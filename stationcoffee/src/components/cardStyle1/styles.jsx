import styled from "styled-components";

export const Container = styled.div`
    width: 27vw;
    height: 22vh;
    border-radius: 25px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    background-color: #6A5445;
    transition: 300ms;

    &:hover{
        transform: scale(1.02
            );
    }
`

export const ProdImage = styled.img`
    object-fit: cover;
    width: 175px;
    border-radius: 18px;
`

export const Titles = styled.h2`
    font-family: "Kalam", cursive;
`
