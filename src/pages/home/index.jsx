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
  const [isOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const params = useParams();
  const role = localStorage.getItem("role");
  const [token, setToken] = useState(localStorage.getItem('token'))

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  useEffect(() => {
    getTableSession();
    console.log(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTableSession = async () => {
    const role = "client";
    const userId = await axios.get(
      `https://thestationcoffeebackend.onrender.com/api/user?role=${role}`
    );

    const res = await axios.get(
      `https://thestationcoffeebackend.onrender.com/api/client/table?id=${params.tableId}&user=${userId.data}`
    );
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);

    setToken(res.data.token);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://thestationcoffeebackend.onrender.com/api/product", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
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
  }, [token])

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
        <div style={{
            paddingLeft: "10vw",
            paddingRight: "10vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Kalam",
            paddingTop: "6vh",
            flexDirection: 'column',
            gap: '130px'
          }}>
            <Carousel products={products} />
            <Carousel products={products} />
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
          <div style={{
            paddingLeft: "10vw",
            paddingRight: "10vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Kalam",
            paddingTop: "6vh",
            flexDirection: 'column',
            gap: '130px',
            paddingBottom: '150px'
          }}>
            <Carousel products={products} />
            <Carousel products={products} />
        </div>
      </Container>
    </>
  );
};

export default Home;
