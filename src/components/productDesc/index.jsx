import { Button, Container, Modal } from "./styles";
import Cafe from "../../../public/cafe.jpg";
import Cart from "../../../public/cart.svg";
import X from "../../../public/x.svg";

const ProductDescription = (props) => {

    const addToCart = async () => {
        if(!localStorage.getItem("cart"))
            localStorage.setItem("cart", JSON.stringify([]))
        const cart = JSON.parse(localStorage.getItem("cart"))
        
        const index = cart.findIndex(item => item._id == props.productId)
        if(index > -1) {
            cart[index].qtd++
        } else {
            cart.push({ _id: props.productId, qtd: 1 })
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        props.onClose()
    }

    return(
        <Modal onClick={props.onClose}>
            <Container onClick={(e) => e.stopPropagation()}>
                <img src={props.image || Cafe} alt="" style={{
                    objectFit: 'cover',
                    width: '46%',
                    borderTopLeftRadius: '30px'
                }}/>
                <div style={{
                    width: '47%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "space-around",
                    alignItems:'end',
                    marginRight: '30px'
                }}>
                    <img src={X} alt="" style={{objectFit: 'cover', width: '50px', cursor: "pointer"}} onClick={props.onClose}/>
                    <div style={{
                            textAlign: 'center',
                            marginBottom: '60px'
                        }}>
                        <h1 style={{ marginBottom: '40px', fontFamily: 'Kalam'}}>{props.name}</h1>
                        <h2>
                            Um café ideal para dias frios e tristes,
                            os torna reconfortantes e menos difíceis de aturar.
                            {props.description}
                        </h2>
                    </div>
                    <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '100%',
                            marginBottom: '10px'
                        }}>
                        <h1>R$: {props.price.toFixed(2).replace(".", ",")}</h1>
                        <Button onClick={addToCart}>
                            Adicionar
                            <img src={Cart} alt="" onClick={addToCart} />
                        </Button>
                    </div>
                </div>
            </Container>
        </Modal>
    )
};

export default ProductDescription;