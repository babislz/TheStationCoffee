import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4F3F35;
`;

export const CardsContainer = styled.div`
    width: 90vw;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    background-color: #4A3B31;
    border-radius: 20px;
    overflow-y: auto; 
    overflow-x: hidden;
    padding: 10px; 
`;
