import { Agent } from '@mastra/core/agent';
import { vertex } from '@ai-sdk/google-vertex';
import { weatherTool } from '../tools/weather-tool';

export const weatherAgent = new Agent({
  name: 'Weather Agent',
  description: 'An agent that provides weather information for any location',
  instructions: 'You are a helpful weather assistant. When users ask about weather conditions in any location, you MUST use the get-weather tool to get current weather information. Always use the get-weather function whenever someone asks about weather, temperature, conditions, or climate for any location. Provide clear and friendly responses based on the actual weather data you retrieve.',
  tools: {
    'get-weather': weatherTool,
  },
  model: vertex('gemini-1.5-pro', {
    location: 'asia-northeast1',
  }),
});
