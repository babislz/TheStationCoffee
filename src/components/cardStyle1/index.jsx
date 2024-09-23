import { Container, ProdImage, Titles } from "./styles";
import Delete from "../../../public/delete.svg"
import Cafe from "../../../public/cafe.jpg"

const CardOrderStyle = (props) => {
    return (
        <Container>
            <ProdImage src={Cafe} alt="" />
            <div>
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    height: '80%'
                }}>
                    <div style={{
                        width: '80%',
                        height: '100%',
                        paddingLeft: '15px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        textAlign: 'left'
                    }}>
                        <Titles style={{ marginBottom: '5px' }}>{props.name}Cafe</Titles>
                        <p style={{ marginTop: '0' }}>{props.desc}Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque vel</p> {/* Ajuste a margem superior */}
                    </div>
                    <img src={Delete} alt="" />
                </div>
                <Titles style={{ margin: '0', paddingLeft: '15px' }}>R$: {props.price}</Titles>
            </div>
        </Container>
    )
}

export default CardOrderStyle;