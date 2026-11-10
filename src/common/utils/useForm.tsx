import { useState, useRef } from "react";
import { notification } from "antd";
import emailjs from "emailjs-com";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

const RECIPIENT_EMAIL =
  process.env.REACT_APP_CONTACT_EMAIL || "lord_edwin@hotmail.com";
const SUBMIT_COOLDOWN_MS = 8000;

const sanitizeField = (value: string, maxLength: number): string => {
  return value.replace(/<[^>]*>?/gm, "").trim().slice(0, maxLength);
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });
  const lastSubmitTimeRef = useRef<number>(0);

  const resetForm = (formElement: HTMLFormElement | null) => {
    if (formElement && typeof formElement.reset === "function") {
      formElement.reset();
    }
    setFormState({
      values: { ...initialValues },
      errors: { ...initialValues },
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    const sanitizedValues: IValues = {
      name: sanitizeField(formState.values.name, 120),
      email: sanitizeField(formState.values.email, 150),
      message: sanitizeField(formState.values.message, 2000),
    };

    const errors = validate(sanitizedValues);
    setFormState((prevState) => ({ ...prevState, errors }));

    const hasErrors = Object.values(errors).some(
      (error) => Boolean(error && error !== "")
    );
    if (hasErrors) {
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTimeRef.current < SUBMIT_COOLDOWN_MS) {
      notification["warning"]({
        message: "Espera un momento",
        description:
          "Por seguridad, espera unos segundos antes de enviar otro mensaje.",
      });
      return;
    }
    lastSubmitTimeRef.current = now;

    const serviceID = "service_d7labja";
    const templateID = "template_o16obfr";
    const userID = "2MAFNItWxaEBo-go4";

    try {
      // 1. Primary delivery via FormSubmit AJAX directly to recipient email
      const formSubmitResponse = await fetch(
        `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Nombre: sanitizedValues.name,
            Email: sanitizedValues.email,
            Mensaje: sanitizedValues.message,
            _replyto: sanitizedValues.email,
            _subject: `Nuevo mensaje de contacto de ${sanitizedValues.name} - TuPortalWeb`,
            _template: "table",
          }),
        }
      );

      const formSubmitData = await formSubmitResponse.json().catch(() => null);

      if (
        formSubmitResponse.ok &&
        (formSubmitData?.success === "true" || formSubmitData?.success === true)
      ) {
        resetForm(formElement);
        notification["success"]({
          message: "¡Mensaje enviado!",
          description:
            "Tu mensaje ha sido enviado correctamente. Te responderemos pronto.",
        });
        return;
      }

      // Check if FormSubmit requires one-time email activation
      if (
        formSubmitData?.message &&
        String(formSubmitData.message).toLowerCase().includes("activation")
      ) {
        resetForm(formElement);
        notification["info"]({
          message: "Activación única requerida",
          description: `Hemos enviado un correo de activación a ${RECIPIENT_EMAIL} (revisa también Spam/Correo no deseado). Haz clic en 'Activate Form' en ese correo para recibir todos los mensajes futuros automáticamente.`,
          duration: 10,
        });
        return;
      }

      // 2. Fallback to EmailJS if configured
      const templateParams = {
        name: sanitizedValues.name,
        from_name: sanitizedValues.name,
        user_name: sanitizedValues.name,
        nombre: sanitizedValues.name,
        email: sanitizedValues.email,
        from_email: sanitizedValues.email,
        user_email: sanitizedValues.email,
        reply_to: sanitizedValues.email,
        to_email: RECIPIENT_EMAIL,
        message: sanitizedValues.message,
        mensaje: sanitizedValues.message,
      };

      const emailJsResponse = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );

      if (emailJsResponse.status === 200) {
        resetForm(formElement);
        notification["success"]({
          message: "¡Mensaje enviado!",
          description:
            "Tu mensaje ha sido enviado correctamente. Te responderemos pronto.",
        });
        return;
      }

      throw new Error(
        formSubmitData?.message || "No se pudo completar el envío del formulario."
      );
    } catch (error) {
      console.error("Error al enviar formulario de contacto:", error);
      notification["error"]({
        message: "Error al enviar",
        description:
          "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo en unos momentos.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
