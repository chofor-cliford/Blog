import styled from "styled-components";

export const PostDetailsContainer = styled.div`
  width: max-content;
  margin: 0 auto;
  margin-bottom: 8px;
  width: 100%;
`;

export const PostDetailsWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex: 3;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 2;
  @media screen and (max-width: 768px) {
    flex: 3;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  
  @media screen and (max-width: 768px) {
    flex: 3;
  }
`;

export const RightWrapper = styled.div`
  position: sticky;
  top: 8px;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;
