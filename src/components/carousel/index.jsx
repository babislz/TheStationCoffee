import { useState, useEffect } from "react";
import CarouselCard from "../carouselCard";
import { Ul } from "./styles";
import RightArrow from "../../../public/seta-direita.svg";
import LeftArrow from "../../../public/seta-esquerda.svg";

const Carousel = ({ products }) => {
    const [list, setList] = useState(products);
    const length = 5;
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        setList(products);
        setStartIndex(0); 
    }, [products]);

    const RenderCarousel = () => {
        const displayedItems = [];

        for (let i = 0; i < length; i++) {
            const index = (startIndex + i) % list.length;
            displayedItems.push(list[index]);
        }

        return displayedItems.map(item => (
            <li key={item._id}>
                <CarouselCard item={item} />
            </li>
        ));
    };

    const handleDown = () => {
        setStartIndex(prev => (prev - 1 + list.length) % list.length);
    };

    const handleUp = () => {
        setStartIndex(prev => (prev + 1) % list.length);
    };

    return (
        <Ul>
            <button onClick={handleDown} style={{ background: 'transparent', border: 'none' }}>
                <img src={LeftArrow} alt='Left arrow' />
            </button>
            
            {list.length > 0 ? <RenderCarousel /> : <p>Loading...</p>} 

            <button onClick={handleUp} style={{ background: 'transparent', border: 'none' }}>
                <img src={RightArrow} alt='Right arrow' />
            </button>
        </Ul>
    );
};

export default Carousel;
