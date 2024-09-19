import { useState } from "react";
import CarouselCard from "../carouselCard";
import { Ul } from "./styles";

const Carousel = () => {
    const [list] = useState([
        { Id: 0, Title: 'Café 0', Description: 'Lorem Ipsum', Price: '0,00' },
        { Id: 1, Title: 'Café 1', Description: 'Lorem Ipsum', Price: '0,00' },
        { Id: 2, Title: 'Café 2', Description: 'Lorem Ipsum', Price: '0,00' },
        { Id: 3, Title: 'Café 3', Description: 'Lorem Ipsum', Price: '0,00' },
        { Id: 4, Title: 'Café 4', Description: 'Lorem Ipsum', Price: '0,00' },
        { Id: 5, Title: 'Café 5', Description: 'Lorem Ipsum', Price: '0,00' },
        { Id: 6, Title: 'Café 6', Description: 'Lorem Ipsum', Price: '0,00' },
    ]);

    const length = 5; // Number of items to show at once
    const [startIndex, setStartIndex] = useState(0);

    const RenderCarousel = () => {
        const displayedItems = [
            ...list.slice(startIndex),
            ...list.slice(0, (startIndex + length) % list.length)
        ].slice(0, length);

        return displayedItems.map(i => (
            <li key={i.Id}>
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
                <button onClick={HandleDown}>
                    <h1>{"<"}</h1>
                </button>
                <RenderCarousel />
                <button onClick={HandleUp}>
                    <h1>{">"}</h1>
                </button>
            </Ul>
        </>
    );
};

export default Carousel;
