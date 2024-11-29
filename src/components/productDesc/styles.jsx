import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    background-color: #6A5445;
    width: 55vw;
    height: 60vh;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
`
export const Button = styled.button`
    border: none;
    background-color: #362C25;
    border-radius: 8px;
    color: white;
    font-family: 'Kalam';
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
    height: 50px;
    font-size: 1.3rem;
    padding: 5px;
    cursor: pointer;
`