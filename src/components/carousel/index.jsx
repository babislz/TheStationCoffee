import { useState, useEffect } from "react";
import CarouselCard from "../carouselCard";
import ModalEditProd from "../editProductCard"; 
import { Ul } from "./styles";
import RightArrow from "../../../public/seta-direita.svg";
import LeftArrow from "../../../public/seta-esquerda.svg";

const Carousel = ({ products }) => {
    const [list, setList] = useState(products);
    const length = 5;
    const [startIndex, setStartIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null); 

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
            <li key={item._id} onClick={() => handleCardClick(item)}> 
                <CarouselCard item={item} />
            </li>
        ));
    };

    const handleCardClick = (item) => {
        setSelectedItem(item); // Armazena o item clicado
    };

    const handleDown = () => {
        setStartIndex(prev => (prev - 1 + list.length) % list.length);
    };

    const handleUp = () => {
        setStartIndex(prev => (prev + 1) % list.length);
    };

    const closeModal = () => {
        setSelectedItem(null); // Fecha o modal
    };

    return (
        <>
            <Ul>
                <button onClick={handleDown} style={{ background: 'transparent', border: 'none' }}>
                    <img src={LeftArrow} alt='Left arrow' />
                </button>
                
                {list.length > 0 ? <RenderCarousel /> : <p>Loading...</p>} 

                <button onClick={handleUp} style={{ background: 'transparent', border: 'none' }}>
                    <img src={RightArrow} alt='Right arrow' />
                </button>
            </Ul>

            {/* Modal de edição, apenas exibido se um item for selecionado */}
            {selectedItem && (
                <ModalEditProd
                    isOpen={!!selectedItem}
                    onClose={closeModal}
                    item={selectedItem} // Passa o item selecionado para o modal
                />
            )}
        </>
    );
};

export default Carousel;
