import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #4F3F35;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContentContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    max-width: 1250px;
    height: 75vh;
    border-radius: 10px;
    border: 2px solid #362c25;
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    overflow-y: auto; 
`