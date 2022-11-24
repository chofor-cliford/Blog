import styled from 'styled-components';

export const AuthContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 8px;
  position: relative;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  padding: 50px 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.153);
`;

export const AuthWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -16px;
`;

export const AuthName = styled.h3`
  color: #fff;
  margin: 4px 0;
  font-size: x-large;
  font-weight: bold;
`;

export const AuthBio = styled.p`
  color: #fff;
  font-size: large;
`;
