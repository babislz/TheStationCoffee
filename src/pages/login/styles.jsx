import styled from "styled-components";
import loginBackground from "../../assets/login-container.svg";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4F3F35;
`;  

export const Background = styled.div`
    width: 65vw;
    height: 70vh;
    background-image: url(${loginBackground});
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat; 
    display: flex;
    align-items: center;
    justify-content: right;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    height: 45%;
` 

export const InfosContainer = styled.div`
    position: absolute;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    width: 23%;
    margin-right: 10%;
    flex-direction: column;
`

export const Input = styled.input`
    width: 98%;
    height: 50px;
    border-radius: 13px; 
    background-color: white;
    border: none;
    color: black;
    font-size: 15px;
    padding-left: 10px;
`
export const Button = styled.button`
    align-self: flex-end;
    background-color: #6A5445;
    font-family: "Kalam", cursive;
    font-size: 22px;
    height: 50px;
    display: flex;
    align-items: center;
`

export const Title = styled.h1`
    font-family: "Vujahday Script", cursive;
    font-size: 2.5rem;
    color: #241C17;
`

export const Label = styled.label`
    font-family: "Kalam", cursive;
    font-weight: bold;
    color: #362C25;
`

