import Link from "next/link";
import styled from "styled-components";

export const PostCardContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.154);
  border-radius: 10px;
  padding-bottom: 12px;
  margin: 8px 0;
  @media screen and (max-width: 768px) {
    padding: 8;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  height: 320px;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  transition: 0.7s all ease;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    color: rgba(204, 87, 126, 0.6);
  }
`;

export const AuthorImg = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const TitleContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const AuthorContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 8px;
  width: 100%;
  gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AuthorName = styled.p`
  align-items: center;
  color: #aaa;
  font-size: large;
`;

export const AuthorWrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  width: auto;
  margin-right: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

export const DateContainer = styled.div`
  font-size: medium;
  color: #aaa;

  svg {
    margin-right: 10px;
    color: rgb(204, 87, 126);
  }
`;

export const Excerpt = styled.span`
  text-align: center;
  color: #808080;
  display: block;
  font-size: large;
  font-style: normal;
  padding: 0px 20px;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    padding: 0 4px;
  }
`;

export const ButtonContainer = styled.a`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const Button = styled.div`
  width: fit-content;
`;

export const ButtonText = styled.span`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.151);
  transition: all 0.5s ease-in-out;
  background: rgba(204, 87, 126, 0.6);
  font-size: medium;
  display: block;
  border-radius: 20px;
  color: #fff;
  padding: 5px 8px;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;
