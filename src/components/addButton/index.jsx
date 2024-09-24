import { Container } from "./styles";
import Add from '../../../public/add.svg'

const AddButton = ({ onClick }) => {
    return (
        <Container onClick={onClick}> 
            <img src={Add} alt="Adicionar Produto" />
        </Container>
    );
}

export default AddButton;
