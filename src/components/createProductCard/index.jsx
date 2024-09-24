import { All, Container, Divisions, Input, InputContainer, Label, Overlay } from "./styles"; // Importe o Overlay
import X from "../../../public/x.svg";
import ImageUpload from "../uploadImage";

const handleSubmit = async () => {
    const productData = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        description: document.getElementById('desc').value,
    };

    try {
        const response = await fetch('URL_DA_SUA_API/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if (response.ok) {
            console.log('Produto cadastrado com sucesso');
            onClose(); 
        } else {
            console.error('Erro ao cadastrar produto');
        }
    } catch (error) {
        console.error('Erro de rede:', error);
    }
};


const ModalCreateProd = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            <Overlay onClick={onClose} /> 
            <Container>
                <img
                    onClick={onClose}
                    src={X}
                    alt=""
                    style={{
                        alignSelf: "flex-end",
                        marginRight: "10px",
                        objectFit: "cover",
                        width: "50px",
                        cursor: "pointer",
                    }}
                />
                <All>
                    <ImageUpload />
                    <InputContainer>
                        <Divisions>
                            <Label htmlFor="name">Nome:</Label>
                            <Input type="text" id="name" />
                        </Divisions>
                        <Divisions>
                            <Label htmlFor="price">Preço:</Label>
                            <Input type="text" id="price" />
                        </Divisions>
                        <Divisions>
                            <Label htmlFor="desc">Descrição:</Label>
                            <textarea
                                rows={12}
                                id="desc"
                                style={{
                                    width: "100%",
                                    resize: "none",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    border: "none",
                                    boxSizing: "border-box",
                                }}
                            ></textarea>
                        </Divisions>
                        <button
                            style={{
                                width: "30%",
                                height: "45px",
                                alignSelf: "flex-end",
                                borderRadius: "10px",
                                border: "1px solid black",
                                marginTop: "20px",
                                fontFamily: "Kalam",
                                fontSize: "1.15rem",
                                cursor: "pointer",
                            }}
                        onClick={handleSubmit}>
                            Enviar
                        </button>
                    </InputContainer>
                </All>
            </Container>
        </>
    );
};

export default ModalCreateProd;
