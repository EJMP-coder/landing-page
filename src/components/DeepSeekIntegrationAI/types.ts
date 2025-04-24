// types.ts
export interface DeepSeekMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
  }
  
  export interface DeepSeekRequest {
    model: string;
    messages: DeepSeekMessage[];
    temperature?: number;
  }
  
  export interface DeepSeekChoice {
    message: DeepSeekMessage;
    index: number;
    finish_reason: string;
  }
  
  export interface DeepSeekResponse {
    id: string;
    object: string;
    created: number;
    choices: DeepSeekChoice[];
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
    };
  }
  
  export interface ApiError {
    response?: {
      status?: number;
      data?: {
        error?: {
          message?: string;
        };
      };
    };
    message?: string;
  }