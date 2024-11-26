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

// Helper function to group products by category
const groupProductsByCategory = (products) => {
  return products.reduce((acc, product) => {
    const { category } = product; // Assuming each product has a `category` field
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

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
        {/* Header Section */}
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
            <h1>Mesa: {tableId}</h1>
            <StyledButton>
              <CartButton />
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
          </div>
        ))}

        {/* Decorations */}
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
