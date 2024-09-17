import { Container, ProdImage } from "./styles";
import Delete from "../../../public/delete.svg"
import Cafe from "../../../public/cafe.jpg"

const CardOrderStyle = () => {
    return(
        <Container> 
            <ProdImage src={Cafe} alt="" />
            <div>
                <div>
                    <h1>Café Tradicional</h1>
                </div>
                <img src={Delete} alt="" />
            </div>
            <h2></h2>
        </Container>
    )
}

export default CardOrderStyle;