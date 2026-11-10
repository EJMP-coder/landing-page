import styled from "styled-components";

export const ScrollUpContainer = styled("div")<{
  show: boolean;
}>`
  padding: 12px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: linear-gradient(135deg, #5B8FB9 0%, #489FB5 100%);
  border: 1px solid rgba(104, 176, 171, 0.5);
  box-shadow: 0 10px 22px rgba(72, 159, 181, 0.3);
  text-align: center;
  align-items: center;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  display: flex;

  img {
    filter: brightness(0) invert(1);
  }

  &:hover,
  &:active,
  &:focus {
    background: linear-gradient(135deg, #489FB5 0%, #68B0AB 100%);
    transform: translateY(-3px);
    box-shadow: 0 14px 26px rgba(104, 176, 171, 0.4);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;
