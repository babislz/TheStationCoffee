/* eslint-disable react/prop-types */
import { All, Container, Divisions, Input, InputContainer, Label, Overlay } from "./styles";
import X from "../../../public/x.svg";
import ImageUpload from "../uploadImage";
import { useState, useEffect } from "react";
import axios from "axios";

const ModalEditProd = ({ isOpen, onClose, product, onProductUpdated }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        image: '' ,
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                category: product.category || '',
                price: product.price || '',
                image: product.image || '' 
            });
        }
    }, [product]);

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
        };
        console.log(product);
        try {
            const response = await axios.put(`https://thestationcoffeebackend.onrender.com/api/product/${product._id}`, formDataToSend, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json' 
                }
            });
            
            console.log('Produto atualizado com sucesso', response);
            onProductUpdated(); 
            onClose();

        } catch (error) {
            console.error('Erro ao atualizar produto', error.response ? error.response.data : error.message);
        }
    };

    const handleImageSelect = (image) => {
        setFormData({ ...formData, image });
    };

    if (!isOpen) return null;

    return (
        <>
            <Overlay onClick={onClose} />
            <Container>
                <img onClick={onClose} src={X} alt="close" style={{ cursor: "pointer" }} />
                <All>
                    <ImageUpload onImageSelect={handleImageSelect} />
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
                        <button onClick={handleSubmit}>Salvar</button>
                    </InputContainer>
                </All>
            </Container>
        </>
    );
};

export default ModalEditProd;
