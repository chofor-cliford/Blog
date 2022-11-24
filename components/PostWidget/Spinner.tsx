import React from "react";
import { Circles } from "react-loader-spinner";
import styled from "styled-components";

const Spinner = ({ message }: { message: string }) => {
  return (
    <SpinnerContainer>
      <Circles color="rgba(0, 0, 255, 0.4)" height={60} width={60} />
      <Message>{message}</Message>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Message = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 0 2px;
`;

export default Spinner;
