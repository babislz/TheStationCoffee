/* eslint-disable react/prop-types */

import { Container, ProdImage, Titles } from "./styles";
import Cafe from "../../../public/cafe.jpg"

const CarouselCard = ({item}) => {
    return (
        <Container>
            <ProdImage src={Cafe} alt="" />
            <div style={{ height:'37%', maxHeight:'37%' }}>
                <div>
                    <Titles style={{ marginBottom: '2px' }}>{item.Title}</Titles>
                    <p style={{ marginTop: '0' }}>{item.Description}</p>
                </div>
            </div>
            <Titles style={{ margin: '0', paddingLeft: '15px' }}>R$: {item.Price}</Titles>
        </Container>
    )
}

export default CarouselCard;