import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  width: 15vw;
  height: 4vh;
  background-color: #D9D9D9;
  border-radius: 10px;
  color: black;
  font-size: 20px;
  padding-right: 40px;
  border: none;
  outline: none;
  padding-left:10px;
`;

export const InputImage = styled.img`
  position: absolute;
  right: 10px; 
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
`;
