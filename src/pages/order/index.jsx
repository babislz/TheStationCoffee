import CardOrderStyle from "../../components/cardStyle1";
import Navbar from "../../components/navbar";
import { CardsContainer, PageContainer, Price, SecondPartContainer, TextDivision } from "./styles";
import Seta from "../../../public/seta.svg"
import { Link, useParams } from "react-router-dom";

const Order = () => {

    const { tableId } = useParams()

    return (
        <>
            <Navbar />
            <PageContainer >
                <Link to={"/" + tableId}>
                    <img src={Seta} alt="" style={{
                        position: 'absolute',
                        top: '85px',
                        left: '15px'
                    }}/>
                </Link>
                <SecondPartContainer>
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
                    <Price>
                        <div style={{
                            width: '85%',
                            height: '57%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px'
                        }}>
                            <TextDivision>
                                <h1>Total: 3.000,58</h1>
                                <h1>Mesa 12</h1>
                            </TextDivision>
                            <button style={{
                                width: '50%',
                                height: '50px',
                                fontSize: '1rem',
                                borderRadius: '15px',
                                border: 'none',
                                marginBottom: '20px',
                                backgroundColor: '#362C25',
                                color: 'white'
                            }}>Fazer Pedido</button>
                        </div>
                    </Price>
                </SecondPartContainer>
            </PageContainer>
        </>
    )
}

export default Order;