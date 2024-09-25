import Carousel from "../../components/carousel";
import CartButton from "../../components/cartButton";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";
import { Container, StyledButton } from "./styles";
import Decoration from "../../../public/decoration.svg";
import AddButton from "../../components/addButton";
import ModalCreateProd from "../../components/createProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {
  const role = localStorage.getItem("role");
  const [isOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const openModal = () => {
    console.log("Abrindo modal");
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("Fechando modal");
    setModalOpen(false);
  };

  const params = useParams();

  const getTableSession = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/client/table?id=${params.tableId}&user=66f1768ae1bb0d93f3b0474a`
    );
    sessionStorage.setItem("token", res.data.token);
    console.log("teste", res);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products", {
        headers: { token: sessionStorage.getItem("token") },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleProductCreation = async () => {
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    getTableSession();
    console.log(params);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function RenderButton() {
    if (role == "client") {
      return <></>;
    }
    return (
      <StyledButton>
        <AddButton onClick={openModal} />
      </StyledButton>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <div
          style={{
            paddingLeft: "10vw",
            paddingRight: "10vw",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            fontFamily: "Kalam",
          }}
        >
          <SearchBar />
          <div
            style={{
              display: "flex",
              gap: "2vw",
            }}
          >
            <h1>Mesa: {params.tableId}</h1>
            <StyledButton>
              <CartButton />
            </StyledButton>
            <RenderButton/>
            <ModalCreateProd
              isOpen={isOpen}
              onClose={closeModal}
              onProductCreated={handleProductCreation}
            />
          </div>
        </div>
        <div
          style={{
            paddingLeft: "10vw",
            paddingRight: "10vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Kalam",
            paddingTop: "6vh",
          }}
        >
          <Carousel products={products} />
        </div>
        <img
          src={Decoration}
          alt=""
          style={{
            marginLeft: "10vw",
            maxWidth: "80vw",
          }}
        />
      </Container>
    </>
  );
};

export default Home;
