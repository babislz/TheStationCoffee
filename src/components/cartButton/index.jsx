import { Container } from "./styles";
import Cart from '../../../public/shopping_cart.svg'
import { Link, useParams } from "react-router-dom";

const CartButton = () => {

    const { tableId } = useParams()

    return (
        <Link to={`/order/${tableId}`}>
            <Container>
                <img src={Cart} alt="" />
            </Container>
        </Link>
    )
}

export default CartButton;