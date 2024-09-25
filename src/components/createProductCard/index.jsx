import { All, Container, Divisions, Input, InputContainer, Label, Overlay } from "./styles";
import X from "../../../public/x.svg";
import ImageUpload from "../uploadImage";
import { useState } from "react";

const ModalCreateProd = ({ isOpen, onClose, onProductCreated }) => {
    const [ formData, setFormData ] = useState({
        name: '',
        category: '',
        price: '',
        image: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem('token');
        
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('image', formData.image); 
    
        try {
            const response = await fetch('http://localhost:8080/api/products', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}` 
                },
                body: formDataToSend,
            });
    
            if (response.ok) {
                console.log("Produto salvo com sucesso");
                onProductCreated();
                onClose(); 
            } else {
                console.error("Erro ao salvar produto");
            }
        } catch (error) {
            console.error("Erro de requisição", error);
        }
    };
    
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
                    <ImageUpload onImageSelect={(image) => setFormData({ ...formData, image })}/>
                    <InputContainer>
                        <Divisions>
                            <Label htmlFor="name">Nome:</Label>
                            <Input type="text" id="name" value={formData.name} onChange={handleChange} />                        
                        </Divisions>
                        <Divisions>
                            <Label htmlFor="price">Preço:</Label>
                            <Input type="text" id="price" value={formData.price} onChange={handleChange} />                        
                        </Divisions>
                        <Divisions>
                            <Label htmlFor="category">Categoria:</Label>
                            <Input type="text" id="category" value={formData.category} onChange={handleChange} />
                        </Divisions>
                        <button
                            style={{
                                width: "30%",
                                height: "45px",
                                alignSelf: "flex-end",
                                borderRadius: "10px",
                                border: "1px solid black",
                                marginTop: "50px",
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
