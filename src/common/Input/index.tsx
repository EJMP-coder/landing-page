import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, t, type, value }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      type={type || "text"}
      placeholder={t(placeholder)}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
