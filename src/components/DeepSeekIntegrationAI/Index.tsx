// DeepSeekIntegration.tsx
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { DeepSeekRequest, DeepSeekResponse, ApiError } from "./types";
//no toma ApiError, y debo introducir el codigo en la home page. 

const DeepSeekIntegration: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const apiKey = process.env.REACT_APP_DEEPSEEK_API_KEY || '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';
      const requestData: DeepSeekRequest = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
        temperature: 0.7,
      };

      const response = await axios.post<DeepSeekResponse>(
        'https://api.openai.com/v1/chat/completions',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      if (response.data.choices[0]?.message?.content) {
        setResponse(response.data.choices[0].message.content);
      } else {
        throw new Error('La estructura de la respuesta no es la esperada');
      }
    } catch (err) {
      const error = err as AxiosError | Error;
      
      let errorMessage = 'Error desconocido al llamar a la API';
      
      if (axios.isAxiosError(error)) {
        const ApiError = error as AxiosError<{
          error?: { message?: string };
        }>;
        
        errorMessage = ApiError.response?.data?.error?.message || 
                      ApiError.message || 
                      'Error en la solicitud a la API';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setError(errorMessage);
      console.error('Error calling DeepSeek API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="deepseek-container">
      <h3>Integracion AI en chat</h3>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta o mensaje aquí..."
          rows={5}
          cols={50}
        />
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {response && (
        <div className="response">
          <h3>Respuesta:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default DeepSeekIntegration;