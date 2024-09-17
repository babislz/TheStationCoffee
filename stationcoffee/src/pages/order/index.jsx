import CardOrderStyle from "../../components/cardStyle1";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Container } from "../login/styles";

const Order = () => {
    return (
        <>
            <Navbar />
            <Container >
                <CardOrderStyle />
            </Container>
            <Footer />
        </>
    )
}

export default Order;