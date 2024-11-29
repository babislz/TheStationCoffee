import CardOrderStyle from "../../components/cardStyle1";
import Navbar from "../../components/navbar";
import { CardsContainer, LoadingOver, PageContainer, Price, SecondPartContainer, TextDivision } from "./styles";
import Seta from "../../../public/seta.svg"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Titles } from "../../components/carouselCard/styles";

const Order = () => {

    const { tableId } = useParams()
    const [products, setProducts] = useState([])
    const [ordering, setOrdering] = useState(false)

    const removeItem = (id) => {
        const filtered = products.filter(item => item._id != id);
        localStorage.setItem("cart", JSON.stringify(filtered));
        setProducts(filtered);
    }

    const order = async () => {
        setOrdering(true)
        const productsToOrder = []
        products.forEach(product => {
            for(let i = 0; i < product.qtd; i++)
                productsToOrder.push({ ...product, qtd: undefined })
        })
        await axios.post("https://thestationcoffeebackend.onrender.com/api/order/" + tableId, { products: productsToOrder })
        localStorage.removeItem("cart")
        setProducts([])
        setOrdering(false)
    }

    useEffect(() => {
        const data = localStorage.getItem("cart");
        const cart = data ? JSON.parse(data) : [];
        (async () => {
            const fetchData = await Promise.all(cart.map(async (item) => {
                const { data: product } = await axios.get("https://thestationcoffeebackend.onrender.com/api/product/" + item._id, {
                    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
                })
                return { ...product, qtd: item.qtd }
            }))
            setProducts(fetchData)
        })()
    }, [])

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
                        {products.length > 0 ? products.map(item => (
                            <CardOrderStyle 
                                key={item._id} 
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                qtd={item.qtd}
                                productId={item._id}
                                removeItem={() => removeItem(item._id)}
                            /> 
                        )) : <Titles>Você não adicionou nenhum produto ainda</Titles>}
                        {ordering && <LoadingOver><div className="loader"></div></LoadingOver>}
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
                                <h1>Total: R$ {products.reduce((acc, item) => item.price * item.qtd + acc, 0).toFixed(2).replace(".", ",")}</h1>
                                <h1>Mesa { tableId }</h1>
                            </TextDivision>
                            <button onClick={order} style={{
                                width: '50%',
                                height: '50px',
                                fontSize: '1rem',
                                borderRadius: '15px',
                                border: 'none',
                                marginBottom: '20px',
                                backgroundColor: '#362C25',
                                color: 'white',
                                cursor: "pointer"
                            }}>Fazer Pedido</button>
                        </div>
                    </Price>
                </SecondPartContainer>
            </PageContainer>
        </>
    )
}

export default Order;