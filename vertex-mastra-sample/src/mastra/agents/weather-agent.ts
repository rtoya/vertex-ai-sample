import { Agent } from '@mastra/core/agent';
import { vertex } from '@ai-sdk/google-vertex';
import { weatherTool } from '../tools/weather-tool';

export const weatherAgent = new Agent({
  name: 'Weather Agent',
  description: 'An agent that provides weather information for any location',
  instructions: 'You are a helpful weather assistant. When asked about weather, use the weather tool to get current conditions. Provide clear and friendly responses about the weather.',
  tools: {
    'get-weather': weatherTool,
  },
  model: vertex('gemini-1.5-flash'),
});
