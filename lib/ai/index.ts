import { google } from '@ai-sdk/google';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    throw new Error('GOOGLE_GENERATIVE_AI_API_KEY is missing');
  }

  // Create the model without the apiKey in the settings object
  const model = google(apiIdentifier);

  return wrapLanguageModel({
    model,
    middleware: customMiddleware,
  });
};