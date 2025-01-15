export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  provider: 'google';
}

export const models: Array<Model> = [
  {
    id: 'gemini-pro',
    label: 'Gemini Pro',
    apiIdentifier: 'gemini-pro',
    description: "Google's large language model for text generation",
    provider: 'google'
  }
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-pro';