import styled from "styled-components";

export const PageContainer = styled.div`
    height: 100vh;
    flex-direction: column;
    display: flex;
    background-color: #4F3F35;
    justify-content: flex-end;
`;

export const CardsContainer = styled.div`
    width: 60vw;
    height: 64vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    background-color: #4A3B31;
    border-radius: 20px;
    overflow-y: auto; 
    padding: 10px; 
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    border: 2px solid #362c25;
`;

export const SecondPartContainer = styled.div`
    width: 100%;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const Price = styled.div`
    height: 66vh;
    width: 25vw;
    border-radius: 20px;
    border: 2px solid #362c25;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 100px;
`
export const TextDivision = styled.div`
    text-align: center;
`
