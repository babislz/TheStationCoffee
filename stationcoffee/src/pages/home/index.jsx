import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";
import { Container } from "./styles";

const Home = () => {
    return (
        <>
            <Navbar />
            <Container>
                <div style={{
                    backgroundColor:'aqua'
                }}>
                    <SearchBar/>
                </div>
            </Container>
        </>
    )
}

export default Home;