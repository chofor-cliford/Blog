import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalSytles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
`;

export const ServerContainer = styled.div`
  margin: 0 auto;
  background: #d3d3d3;
  width: 100%;
  height: 100%;
`;

export const PostContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex: 3;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PostWrapper = styled.div`
  flex: 2;
  @media screen and (max-width: 768px) {
    flex: 3;
    width: 100%;
  }
`;

export const RightPost = styled.div`
  flex: 1;
  @media screen and (max-width: 768px) {
    flex: 3;
  }
`;

export const RightPostWrapper = styled.div`
  top: 8px;
  position: sticky;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

