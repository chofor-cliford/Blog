import styled, { keyframes } from 'styled-components';
import Carousel from "react-multi-carousel";


export const FeaturedPostContainer = styled.div`
  margin-bottom: 8px;
`;
export const CarouselStyle = styled(Carousel)`
  padding: 0 10px;
`;

export const FeaturedPostCardContainer = styled.div`
  position: relative;
  height: 180px;
`;

export const FeaturedPostImage = styled.div<{image: string}>`
  position: absolute;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.153);
  display: inline-block;
  width: 100%;
  height: 180px;
  background-image: url("${({image}) => image }");

`;

export const Glowing = keyframes`
  0%{
    background: rgba(128, 128, 128, 0.2);
  }

  100%{
    background: rgba(128, 128, 128, 0.4);
  }
`;

export const FeaturedPostContent = styled.div`
  position: absolute;
  border-radius: 10px;
  background-position: center;
  height: 180px;
  width: 100%;
  display: inline-block;
  animation: ${Glowing} 1.5s infinite linear;
`;

export const FeaturedPostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const PostCreation = styled.p`
  color: #fff;
  margin-bottom: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.153);
  font-weight: bold;
  font-size: small;

`;

export const PostImg = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
`;

export const PostTitle = styled.p`
  color: #fff;
  margin-bottom: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.153);
  font-weight: bold;
  font-size: x-large;
  text-align: center;
`;

export const PostImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 5px;
  width: 100%;
  justify-content: center;
`;

export const PostAuthor = styled.p`
  display: inline;
  align-items: center;
  color: #fff;
  text-shadow: 0px 2px 0px rgb(0 0 0 / 30%);
  margin-left: 2px;
  font-size: medium;
`;

export const PostLink = styled.span`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
`;