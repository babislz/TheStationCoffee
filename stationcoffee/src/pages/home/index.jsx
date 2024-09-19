import Carousel from "../../components/carousel";
import CartButton from "../../components/cartButton";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";
import { Container, StyledButton } from "./styles";

const Home = () => {
    return (
        <>
            <Navbar />
            <Container>
                <div style={{
                    paddingLeft:'10vw',
                    paddingRight:'10vw',
                    justifyContent:'space-between',
                    display:'flex',
                    alignItems:'center',
                    fontFamily:'Kalam'
                }}>
                    <SearchBar/>
                    <div style={{
                        display:'flex',
                        gap:'2vw'
                    }}>
                        <h1>Mesa: 12</h1>
                        <StyledButton>
                            <CartButton/>
                        </StyledButton>
                    </div>
                </div>
                {/* <CarouselCard></CarouselCard> */}
                <Carousel></Carousel>
            </Container>
        </>
    )
}

export default Home;