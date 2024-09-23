import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-width: 250px;
    max-width: 350px;
    width: 16vw;
    height: 11vh;
    border-radius: 10px;
    background-color: #6A5445;
    align-items: center;
    justify-content: center;
    transition: 300ms;
    position: relative;
    font-family: 'Kalam';

    &:hover{
        transform: scale(1.04);
        cursor: pointer;
    }   
`
