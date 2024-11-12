import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    background-color: #white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px;
    flex-direction: column;
    z-index: 1001;
    position: fixed; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
`;


export const InputContainer =  styled.div`
    width: 55%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;
    box-sizing: border-box;
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 8px;;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
`

export const Label = styled.label`
    color: white;
    font-family: 'Kalam';
    font-size: 1.15rem;
`

export const Divisions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const All = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    margin-top: 15px;
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.411); 
    z-index: 1000; 
`;