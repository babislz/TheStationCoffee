import styled from "styled-components";

export const Container = styled.div`
    height:50px;
    width:50px;
    border-radius:7px;
    background-color: #362C25;
    display:flex;
    justify-content:center;
    align-items:center;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(1.05);
    }
`