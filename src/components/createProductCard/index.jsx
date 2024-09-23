import { Container } from "./styles";
import Upload from "../../../public/upload.svg";

const ModalCreateProd = () => {
    return (
        <Container>
            <img src={Upload} alt="" style={{
                objectFit: 'cover',
                width: '350px'
            }}/>
        </Container>
    )
}

export default ModalCreateProd;