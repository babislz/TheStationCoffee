import { All, Container, Divisions, Input, InputContainer, Label, Overlay } from "./styles";
import X from "../../../public/x.svg";
import ImageUpload from "../uploadImage";
import { useState } from "react";
import axios from "axios";

const ModalCreateProd = ({ isOpen, onClose, onProductCreated }) => {
    const [ formData, setFormData ] = useState({
        name: '',
        category: '',
        price: '',
        image: 'upload.svg'
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async () => {
        const formDataToSend = {
            name: formData.name,
            category: formData.category,
            price: formData.price,
            image: formData.image
        }
    
        console.log(formDataToSend);
        try {
            const response = await axios.post('http://localhost:8080/api/product', formDataToSend, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
    
            console.log("Produto salvo com sucesso", response);
            onProductCreated();
            onClose(); 

        } catch (error) {
            console.error("Erro de requisição", error.message);
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
