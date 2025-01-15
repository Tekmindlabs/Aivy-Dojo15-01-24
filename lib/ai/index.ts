import { google } from '@ai-sdk/google';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  if (!process.env.GOOGLE_AI_API_KEY) {
    throw new Error('GOOGLE_API_KEY is missing');
  }

  return wrapLanguageModel({
    model: google(apiIdentifier),
    middleware: customMiddleware,
  });
};