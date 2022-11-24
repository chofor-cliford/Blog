import styled from "styled-components";
export interface Iprop {
    left: boolean
}

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 auto;
`;

export const HeaderWrappers = styled.div`
  color: #fff;
  background: rgba(0, 0, 255, 0.4);
  display: flex;
  padding: 28px;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;

export const LeftWrapper = styled.div`
  display: flex;
`;

export const Title = styled.span`
  cursor: pointer;
  font-weight: bold;
  font-size: xx-large;
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Categories = styled.div`
  cursor: pointer;
  margin-top: 2px;
  align-items: center;
  font-weight: bold;
`;

export const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    svg {
      color: #fff;
      cursor: pointer;
      font-size: 2rem;
    }
  }
`;

export const MobileRightWrapper = styled.div<Iprop>`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    position: absolute;
    background: #a69aff;
    display: flex;
    z-index: 1;
    left: ${({left}) => (left ? '0' : '-100%')};
    padding: 20px 0;
    z-index: 10;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.156);
    justify-content: space-between;
    flex-direction: column;
    transition: 0.5s all ease-in-out;
    width: 90%;
    svg {
      align-self: flex-end;
      font-size: 2.5rem;
    }
  }
`;

export const MobileCategories = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
`;
