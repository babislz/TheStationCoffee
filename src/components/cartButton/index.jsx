import { Container } from "./styles";
import Cart from '../../../public/shopping_cart.svg'

const CartButton = () => {
    return (
        <Container>
            <img src={Cart} alt="" />
        </Container>
    )
}

export default CartButton;