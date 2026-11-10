import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  color: #486581;
`;

export const ContentWrapper = styled("div")`
  max-width: 680px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.92) 0%,
    rgba(235, 245, 251, 0.88) 100%
  );
  border: 1px solid #CFE2F3;
  border-radius: 24px;
  padding: 3.5rem 2.75rem;
  box-shadow: 0 18px 42px -8px rgba(51, 78, 104, 0.08);
  backdrop-filter: blur(12px);

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 2.25rem 1.5rem;
  }
`;
