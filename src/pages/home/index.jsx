import Carousel from "../../components/carousel";
import CartButton from "../../components/cartButton";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchBar";
import { Container, StyledButton } from "./styles";
import Decoration from "../../../public/decoration.svg";
import AddButton from "../../components/addButton";
import ModalCreateProd from "../../components/createProductCard";
// import ModalDescrProd from "../../components/productDesc";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const groupProductsByCategory = (products) => {
  return products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
};

const Home = () => {
  const [isOpen, setModalOpen] = useState(false);
  const [groupedProducts, setGroupedProducts] = useState({});
  const { tableId } = useParams();
  const role = localStorage.getItem("role");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleCartClick = async () => {
    try {
      await axios.post(
        // LÓGICA DE REDIRECIONAR PARA A PÁGINA /ORDER COM O ID DA MESA
      );

      navigate("/order");
    } catch (error) {
      console.error("Error while processing the cart:", error);
    }
  };

  useEffect(() => {
    getTableSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTableSession = async () => {
    try {
      const role = "client";
      const userId = await axios.get(
        `https://thestationcoffeebackend.onrender.com/api/user?role=${role}`
      );

      const res = await axios.get(
        `https://thestationcoffeebackend.onrender.com/api/client/table?id=${tableId}&user=${userId.data}`
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      setToken(res.data.token);
    } catch (error) {
      console.error("Error fetching table session:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://thestationcoffeebackend.onrender.com/api/product", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      const products = response.data;

      // Group products by category
      const grouped = groupProductsByCategory(products);
      setGroupedProducts(grouped);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [token]);

  const handleProductCreation = async () => {
    await fetchProducts();
  };

  return (
    <>
      <Navbar />
      <Container>
        <div
          style={{
            padding: "50px 10vw",
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
            <h1>Mesa: {tableId}</h1>
            <StyledButton>
              <CartButton onClick={handleCartClick} />
            </StyledButton>
            {role !== "client" && (
              <StyledButton>
                <AddButton onClick={openModal} />
              </StyledButton>
            )}
            <ModalCreateProd
              isOpen={isOpen}
              onClose={closeModal}
              onProductCreated={handleProductCreation}
            />
          </div>
        </div>

        {/* Render Carousels for Each Category */}
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category}>
            <h2 style={{ textAlign: "center", fontFamily: "Kalam" }}>{category}</h2>
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
                marginTop: "100px",
              }}
            />
          </div>
        ))}

        {/* Decorations */}
        
      </Container>
    </>
  );
};


export default Home;
