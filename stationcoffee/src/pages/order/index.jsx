import CardOrderStyle from "../../components/cardStyle1";
import Navbar from "../../components/navbar";
import { CardsContainer, PageContainer } from "./styles";

const Order = () => {
    return (
        <>
            <Navbar />
            <PageContainer >
                <CardsContainer>
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                    <CardOrderStyle />
                </CardsContainer>
            </PageContainer>
        </>
    )
}

export default Order;