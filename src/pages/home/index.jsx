import Carousel from "../../components/carousel";
import CartButton from "../../components/cartButton";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";
import { Container, StyledButton } from "./styles";
import Decoration from "../../../public/decoration.svg";
import AddButton from "../../components/addButton"; 
import ModalCreateProd from "../../components/createProductCard";
import { useState } from "react";

const Home = () => {
    const [isOpen, setModalOpen] = useState(false);

    const openModal = () => {
        console.log("Abrindo modal");
        setModalOpen(true);
    }

    const closeModal = () => {
        console.log("Fechando modal");
        setModalOpen(false);
    }

    return (
        <>
            <Navbar />
            <Container>
                <div style={{
                    paddingLeft:'10vw',
                    paddingRight:'10vw',
                    justifyContent: 'space-between',
                    display:'flex',
                    alignItems:'center',
                    fontFamily:'Kalam'
                }}>
                    <SearchBar />
                    <div style={{
                        display:'flex',
                        gap:'2vw'
                    }}>
                        <h1>Mesa: 12</h1>
                        <StyledButton>
                            <CartButton/>
                        </StyledButton>
                        <StyledButton>
                            <AddButton onClick={openModal} />
                        </StyledButton>
                        <ModalCreateProd isOpen={isOpen} onClose={closeModal} />
                    </div>
                </div>
                <div style={{
                    paddingLeft:'10vw',
                    paddingRight:'10vw',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    fontFamily:'Kalam',
                    paddingTop:'6vh'
                }}>
                    <Carousel />
                </div>
                <img src={Decoration} alt='' style={{
                    marginLeft:'10vw',
                    maxWidth:'80vw'
                }}/>
            </Container>
        </>
    );
}

export default Home;
