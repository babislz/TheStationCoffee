import { Container, ProdImage, Titles } from "./styles";
import Cafe from "../../../public/cafe.jpg"; 

const CarouselCard = ({ item }) => {
    return (
        <Container>
            <ProdImage src={item.image || Cafe} alt={item.name} /> 
            <div style={{ height: '37%', maxHeight: '37%' }}>
                <div>
                    <Titles style={{ marginBottom: '2px' }}>{item.name}</Titles> 
                    <p style={{ marginTop: '0' }}>{item.category || "Sem categoria"}</p> 
                </div>
            </div>
            <Titles style={{ margin: '0', paddingLeft: '15px' }}>R$: {item.price}</Titles> 
        </Container>
    );
};

export default CarouselCard;
