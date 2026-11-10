import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(240, 247, 252, 0.9) 100%
  );
  border: 1px solid #D1E2F0;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 18px 40px -8px rgba(51, 78, 104, 0.08);
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 414px) {
    padding: 1.5rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: #489FB5;
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
