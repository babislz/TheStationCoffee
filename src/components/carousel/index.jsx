import { useState, useEffect } from "react";
import CarouselCard from "../carouselCard";
import { Ul } from "./styles";
import RightArrow from "../../../public/seta-direita.svg";
import LeftArrow from "../../../public/seta-esquerda.svg";
import { getAllProducts } from '../../service/api'; 

const Carousel = () => {
    const [list, setList] = useState([]);
    const length = 5;
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts(); 
                setList(data);
            }catch (error){
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    const RenderCarousel = () => {
        const displayedItems = [
            ...list.slice(startIndex),
            ...list.slice(0, (startIndex + length) % list.length)
        ].slice(0, length);

        return displayedItems.map(i => (
            <li key={i._id}>
                <CarouselCard item={i} />
            </li>
        ));
    };

    const HandleDown = () => {
        setStartIndex(prev => (prev - 1 + list.length) % list.length);
    };

    const HandleUp = () => {
        setStartIndex(prev => (prev + 1) % list.length);
    };

    return (
        <>
            <Ul>
                <button onClick={HandleDown} style={{ background: 'transparent', border: 'none'}}>
                    <img src={LeftArrow} alt=''/>
                </button>
                {list.length > 0 ? <RenderCarousel /> : <p>Carregando...</p>} 
                <button onClick={HandleUp} style={{ background: 'transparent', border: 'none'}}>
                    <img src={RightArrow} alt=''/>
                </button>
            </Ul>
        </>
    );
};

export default Carousel;
