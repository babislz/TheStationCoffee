import styled from "styled-components";

export const Container = styled.div`
    width: 10vw;
    height: 32vh;
    border-radius: 25px;
    padding: 10px;
    background-color: #6A5445;
    transition: 300ms;
    cursor: pointer;

    &:hover{
        transform: scale(1.02
            );
    }
`

export const ProdImage = styled.img`
    object-fit: cover;
    height: 50%;
    width: 100%;
    border-radius: 18px;
`

export const Titles = styled.h2`
    font-family: "Kalam", cursive;
`
