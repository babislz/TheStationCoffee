import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";
import CardMesas from "./components/mesas";
import { Container, ContentContainer } from "./styles";

const Mesas = () => {
    const [tables, setTables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTables = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/tables', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response);
                if (Array.isArray(response.data)) {
                    setTables(response.data);
                } else {
                    throw new Error("Expected an array of tables");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        

        fetchTables();
    }, []);

    return (
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
                    <div style={{ alignSelf: "flex-start" }}>
                        <SearchBar />
                    </div>
                    {loading ? (
                        <p>Loading tables...</p>
                    ) : error ? (
                        <p>Error loading tables: {error}</p>
                    ) : (
                        <ContentContainer>
                            {tables.map(table => (
                                <CardMesas key={table._id} table={table} />
                            ))}
                        </ContentContainer>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Mesas;
