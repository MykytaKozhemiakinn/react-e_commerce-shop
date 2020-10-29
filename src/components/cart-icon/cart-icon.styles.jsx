import styled from "styled-components";
import { ReactComponent as CartLogo } from "../../assets/cart.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CartIconCounter = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
export const CartLogoSVG = styled(CartLogo)`
  width: 24px;
  height: 24px;
`;