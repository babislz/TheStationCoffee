import Navbar from "../../components/navbar";
import CardMesas from "./components/mesas";
import { Container, ContentContainer } from "./styles";

const Mesas = () => {
    return(
        <>
            <Navbar />
            <Container>
                <ContentContainer>
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                    <CardMesas />
                </ContentContainer>
            </Container>
        </>
    )
}

export default Mesas;