import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #4F3F35;
    padding-top: 15vh;
`; 

export const Content = styled.div`
    width: 100vw;
`;

export const StyledButton = styled.button`
    all: unset; /* Reset all styles */
    display: inline-flex; /* Keep it inline */
    cursor: pointer; /* Change cursor to pointer */
`;