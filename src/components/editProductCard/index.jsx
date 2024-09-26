import { All, Container, Divisions, Input, InputContainer, Label, Overlay } from "./styles";
import X from "../../../public/x.svg";
import ImageUpload from "../uploadImage";
import { useState, useEffect } from "react";

const ModalEditProd = ({ isOpen, onClose, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        image: ''
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
        // Lógica para enviar os dados editados para o backend
    };

    if (!isOpen) return null;

    return (
        <>
            <Overlay onClick={onClose} />
            <Container>
                <img onClick={onClose} src={X} alt="close" style={{ cursor: "pointer" }} />
                <All>
                    <ImageUpload onImageSelect={(image) => setFormData({ ...formData, image })} />
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
