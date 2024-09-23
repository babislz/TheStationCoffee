import { Container } from "./styles";
import Pendente from "../../../../../public/pendente.svg"
import Andamento from "../../../../../public/andamento.svg"
import Concluido from "../../../../../public/concluido.svg"

const CardMesas = ({table}) => {
    return (
        <Container>
            <img src={Pendente} alt="" style={{
                objectFit: 'cover',
                position: 'absolute',
                top: '5px',
                right: '5px'
            }}/>
            <h1>Mesa {table.number}</h1>
        </Container>
    )   
}

export default CardMesas;