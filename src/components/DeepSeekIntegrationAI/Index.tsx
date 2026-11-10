// DeepSeekIntegration.tsx
import React, { useState, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import { DeepSeekRequest, DeepSeekResponse, ApiError } from "./types";
import {
  DeepSeekContainer,
  Subtitle,
  StyledTextArea,
  SubmitButton,
  ErrorBox,
  ResponseBox,
} from "./styles";
//no toma ApiError, y debo introducir el codigo en la home page. 

const MAX_INPUT_LENGTH = 1000;
const COOLDOWN_MS = 5000;

const sanitizeInput = (text: string): string => {
  return text.replace(/<[^>]*>?/gm, "").trim().slice(0, MAX_INPUT_LENGTH);
};

const DeepSeekIntegration: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const lastRequestTimeRef = useRef<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanInput = sanitizeInput(input);
    if (!cleanInput) {
      setError('Por favor, escribe un mensaje válido antes de enviar.');
      return;
    }

    const now = Date.now();
    if (now - lastRequestTimeRef.current < COOLDOWN_MS) {
      setError('Por favor, espera unos segundos antes de enviar otra consulta.');
      return;
    }

    const proxyUrl = process.env.REACT_APP_AI_PROXY_URL;
    const apiKey = process.env.REACT_APP_DEEPSEEK_API_KEY;

    if (!proxyUrl && !apiKey) {
      setError('El servicio de asistente IA no está configurado en este entorno.');
      return;
    }

    setIsLoading(true);
    lastRequestTimeRef.current = now;

    try {
      const requestData: DeepSeekRequest = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: cleanInput }],
        temperature: 0.7,
      };

      const endpoint = proxyUrl || 'https://api.openai.com/v1/chat/completions';
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (!proxyUrl && apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
      }

      const apiResponse = await axios.post<DeepSeekResponse>(
        endpoint,
        requestData,
        {
          headers,
          timeout: 15000,
        }
      );

      if (apiResponse.data.choices?.[0]?.message?.content) {
        setResponse(apiResponse.data.choices[0].message.content);
      } else {
        throw new Error('La estructura de la respuesta no es la esperada');
      }
    } catch (err) {
      const axiosErr = err as AxiosError | Error;
      let errorMessage = 'No se pudo procesar la consulta en este momento. Inténtalo más tarde.';

      if (axios.isAxiosError(axiosErr)) {
        const typedError = axiosErr as AxiosError<{
          error?: { message?: string };
        }>;
        if (typedError.response?.status === 429) {
          errorMessage = 'Demasiadas solicitudes. Por favor, intenta de nuevo en unos minutos.';
        } else if (typedError.response?.status === 401) {
          errorMessage = 'Servicio de IA temporalmente no disponible por configuración.';
        }
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DeepSeekContainer className="deepseek-container">
      <h3>IA a tu servicio </h3>
          
      <form onSubmit={handleSubmit}>
      <Subtitle className="text-sm text-gray-500 mb-1">
       Chatbot · Análisis de Datos · Creación de Contenido
      </Subtitle>
        <StyledTextArea
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
          placeholder="Escribe tu pregunta o mensaje aquí..."
          maxLength={MAX_INPUT_LENGTH}
          aria-label="Escribe tu pregunta o mensaje para el asistente de IA"
          rows={5}
          cols={50}
        />
        <br />
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </SubmitButton>
      </form>

      {error && <ErrorBox className="error" role="alert">{error}</ErrorBox>}

      {response && (
        <ResponseBox className="response">
          <h3>Respuesta:</h3>
          <p>{response}</p>
        </ResponseBox>
      )}
    </DeepSeekContainer>
  );
};

export default DeepSeekIntegration;
