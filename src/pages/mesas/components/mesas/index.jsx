import { Container } from "./styles";
import Pendente from "../../../../../public/pendente.svg"; // Pending
import Andamento from "../../../../../public/andamento.svg"; // Preparing
import Concluido from "../../../../../public/concluido.svg"; // Done

const CardMesas = ({ table }) => {
    // Determine the icon based on the table status
    let statusIcon;
    switch (table.status) {
        case "pending":
            statusIcon = Pendente;
            break;
        case "preparing":
            statusIcon = Andamento;
            break;
        case "done":
            statusIcon = Concluido;
            break;
        default:
            statusIcon = null; // Handle any unexpected status
    }

    return (
        <Container>
            {statusIcon && (
                <img 
                    src={statusIcon} 
                    alt={table.status} 
                    style={{
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '5px',
                        right: '5px'
                    }} 
                />
            )}
            <h1>Mesa {table.tableNumber}</h1>
        </Container>
    );
};

export default CardMesas;
