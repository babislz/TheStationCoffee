import { Button, Container, Modal } from "./styles";
import Cafe from "../../../public/cafe.jpg";
import Cart from "../../../public/cart.svg";
import X from "../../../public/x.svg";

const ProductDescription = (props) => {
    return(
        <Modal>
            <Container>
                <img src={Cafe} alt="" style={{
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
                    <img src={X} alt="" style={{objectFit: 'cover', width: '50px'}} onClick={props.onClose}/>
                    <div style={{
                            textAlign: 'center',
                            marginBottom: '60px'
                        }}>
                        <h1 style={{ marginBottom: '40px', fontFamily: 'Kalam'}}>Café depresso{props.name}</h1>
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
                        <h1>R$: 300,00{props.prodprice}</h1>
                        <Button>
                            Adicionar
                            <img src={Cart} alt="" />
                        </Button>
                    </div>
                </div>
            </Container>
        </Modal>
    )
};

export default ProductDescription;