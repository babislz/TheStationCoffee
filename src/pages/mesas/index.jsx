import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";
import CardMesas from "./components/mesas";
import { Container, ContentContainer } from "./styles";

const tableView = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
    { number: 11 },
    { number: 12 }
]

const Mesas = () => {
    return(
        <>
            <Navbar />
            <Container>
                <div style={{
                    paddingTop: 30,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "95%",
                    maxWidth: "1200px"
                }}>
                    <div style={{alignSelf: "flex-start"}}>
                        <SearchBar />   
                    </div>
                    <ContentContainer>
                        {tableView.map(x => (
                            <CardMesas table={x}/>
                        ))}
                    </ContentContainer>
                </div>
            </Container>
        </>
    )
}

export default Mesas;