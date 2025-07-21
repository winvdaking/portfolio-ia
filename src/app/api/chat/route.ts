import { groq } from '@ai-sdk/groq';
import { ollama } from 'ollama-ai-provider';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getExperience } from './tools/getExperience';
import { getInterests } from './tools/getInterests';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getVolunteering } from './tools/getVolunteering';

export const maxDuration = 30;

function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getExperience,
      getInterests,
      getVolunteering,
    };

    // Fallback automatique : Ollama en local si USE_OLLAMA=true, sinon Groq
    const useOllama = process.env.USE_OLLAMA === 'true';
    const model = useOllama
      ? ollama('mistral')
      : groq('llama-3.3-70b-versatile');

    const result = streamText({
      model,
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
