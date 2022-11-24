import styled from "styled-components";

export const CFContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.152);
  border-radius: 10px;
  padding: 40px 20px;
  padding-bottom: 12px;
  margin-bottom: 8px;
`;

export const CFTitle = styled.h3`
  font-size: x-large;
  margin-bottom: 8px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
`;

export const Form = styled.form`
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 4px;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  width: 100%;
  background: #ddd;
  color: #808080;

  &:focus {
    border: 2px solid #ddd;
  }
  `;

  export const TextArea = styled.textarea`
  padding: 4px;
  outline: none;
  border: none;
  width: 100%;
  background: #ddd;
  color: #808080;

  &:focus {
    border: 2px solid #ddd;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.123);
  display: inline-block;
  border-radius: 10px;
  padding: 8px 20px;
  transition: all 0.5s ease-in-out;
  background: rgba(204, 87, 126, 0.6);

  &:hover {
    background: rgba(75, 0, 130, 0.9);
  }
`;

export const Success = styled.span`
  font-size: x-large;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 3px;
  font-weight: bold;
  color: #008000;
`;

export const Save = styled.label`
  color: rgba(128, 128, 128, 0.5);
  cursor: pointer;
  margin-left: 2px;

`;