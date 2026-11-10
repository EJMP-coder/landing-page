import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) =>
    p.color
      ? "#EBF3FA"
      : "linear-gradient(135deg, #5B8FB9 0%, #489FB5 100%)"};
  color: ${(p) => (p.color ? "#243B53" : "#ffffff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid
    ${(p) => (p.color ? "#C2D9EC" : "rgba(72, 159, 181, 0.4)")};
  border-radius: 12px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(p) =>
    p.color
      ? "0 6px 16px rgba(51, 78, 104, 0.08)"
      : "0 10px 22px -5px rgba(72, 159, 181, 0.35)"};

  &:hover,
  &:active,
  &:focus {
    color: #ffffff;
    border: 1px solid #68B0AB;
    background: linear-gradient(135deg, #489FB5 0%, #68B0AB 100%);
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -5px rgba(104, 176, 171, 0.4);
  }
`;
