import styled from "styled-components";

export const DeepSeekContainer = styled("div")`
  margin: 4rem auto 6rem;
  max-width: 780px;
  padding: 3rem 2.75rem;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.94) 0%,
    rgba(235, 245, 251, 0.9) 100%
  );
  border: 1px solid #CFE2F3;
  border-radius: 24px;
  box-shadow: 0 20px 45px -10px rgba(51, 78, 104, 0.1);
  backdrop-filter: blur(14px);
  text-align: center;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 40px;
    color: #243B53;

    @media only screen and (max-width: 768px) {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 2.5rem auto 4rem;
  }
`;

export const Subtitle = styled("p")`
  font-size: 15px;
  color: #489FB5;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const StyledTextArea = styled("textarea")`
  width: 100%;
  max-width: 620px;
  height: 150px;
  resize: vertical;
  border-radius: 14px;
  border: 1px solid #C5D9E8;
  background: #F4F9FC;
  color: #243B53;
  font-size: 1rem;
  padding: 1.1rem 1.25rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:focus {
    background: #FFFFFF;
    border-color: #5B8FB9;
    box-shadow: 0 0 0 3px rgba(91, 143, 185, 0.2);
  }
`;

export const SubmitButton = styled("button")`
  background: linear-gradient(135deg, #5B8FB9 0%, #489FB5 100%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  max-width: 200px;
  border: 1px solid rgba(72, 159, 181, 0.4);
  border-radius: 12px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 22px -5px rgba(72, 159, 181, 0.35);

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus:not(:disabled) {
    color: #ffffff;
    border-color: #68B0AB;
    background: linear-gradient(135deg, #489FB5 0%, #68B0AB 100%);
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -5px rgba(104, 176, 171, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorBox = styled("div")`
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background: #FDF2F2;
  border: 1px solid #F8B4B4;
  color: #9B1C1C;
  font-size: 0.95rem;
`;

export const ResponseBox = styled("div")`
  margin-top: 2rem;
  padding: 1.75rem;
  border-radius: 16px;
  background: #F4F9FC;
  border: 1px solid #C5D9E8;
  text-align: left;

  h3 {
    font-size: 22px;
    margin-bottom: 0.75rem;
    color: #243B53;
  }

  p {
    font-size: 16px;
    color: #334E68;
    line-height: 1.6;
    margin: 0;
    white-space: pre-wrap;
  }
`;
