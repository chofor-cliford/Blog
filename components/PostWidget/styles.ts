import styled  from 'styled-components';

export const PostWidgetContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.183);
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
  margin-top: 10px;
`;

export const Heading = styled.h3`
  text-align: center;
  margin-bottom: 8px;
  font-size: x-large;
  font-weight: 600;
  padding-bottom: 4px;
  border-bottom: 1px solid #000;
`;

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 4px;
`;

export const ImgContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  flex: none;
`;

export const PostDateContainer = styled.div`
  display: flex;
  margin-left: 4px;
`;

export const PostDate = styled.p`
  color: #808080;
  font-size: small;
`;

export const PostLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: medium;
`;

