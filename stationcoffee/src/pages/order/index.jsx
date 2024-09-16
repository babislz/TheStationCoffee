import CardOrderStyle from "../../components/cardStyle1";
import Footer2 from "../../components/footerAll";
import Navbar2 from "../../components/navbarAll";
import { Container } from "../login/styles";

const Order = () => {
    return (
        <>
            <Navbar2 />
            <Container >
                <CardOrderStyle />
            </Container>
            <Footer2 />
        </>
    )
}

export default Order;