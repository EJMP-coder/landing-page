import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "El nombre es requerido";
  }
  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email no es valido";
  }
  if (!values.message) {
    errors.message = "El mensaje es requerido";
  }
  return errors;
}
