import type { APIRoute } from 'astro';

import { KICKSTART_CALL_URL } from '~consts/kickstart';
import { PARTNER_DATA } from '~consts/partnerData';

// The llms.txt index for AI tools, in the format described at https://llmstxt.org.
export const GET: APIRoute = ({ site }) => {
  const link = (name: string, href: string, note: string) =>
    `- [${name}](${new URL(href, site).href}): ${note}`;

  const partners = PARTNER_DATA.map((partner) =>
    link(
      partner.name,
      partner.website,
      `${partner.description} Location: ${partner.location}. Contact: ${partner.email}.`,
    ),
  );

  const body = [
    '# Neuron AI',
    '',
    '> Neuron AI is the first agentic framework of the PHP ecosystem: an open-source (MIT) framework to build AI agents, RAG systems and multi-step workflows in PHP.',
    '',
    'Install it with `composer require neuron-core/neuron-ai`. Neuron works with OpenAI, Anthropic, Gemini, Mistral, ZAI and more, and you switch LLM provider with a single line of code. It runs in Laravel, Symfony, WordPress or any custom PHP application. Every method, property and return value is typed, and the framework ships skills for AI coding assistants. Monitoring of agent execution is built in through Inspector (https://inspector.dev).',
    '',
    '## Framework',
    '',
    link(
      'Agents',
      'https://docs.neuron-ai.dev/agent/agent',
      'Production-ready agentic loops. Swap LLMs like OpenAI, Claude or Gemini with a single line of code.',
    ),
    link(
      'Toolkits',
      'https://docs.neuron-ai.dev/agent/tools',
      'Composable agent capabilities that interact with your application data, services or external APIs, with an MCP connector.',
    ),
    link(
      'RAG',
      'https://docs.neuron-ai.dev/rag/rag',
      'Pipelines that load PDFs, SQL or documents into vector stores like Pinecone or Elasticsearch to give agents real-world context.',
    ),
    link(
      'Workflows',
      'https://docs.neuron-ai.dev/workflow/getting-started',
      'Event-driven workflows with multiple steps, state, loops and human-in-the-loop logic.',
    ),
    link(
      'Observability',
      'https://inspector.dev/neuron-ai/',
      'Monitor agent runs, LLM calls and tool calls with Inspector, enabled with one line of code.',
    ),
    '',
    '## Documentation',
    '',
    link(
      'Neuron AI documentation',
      'https://docs.neuron-ai.dev/llms.txt',
      'Index of the full documentation: agents, tools, streaming, structured output, RAG, workflows and components.',
    ),
    link(
      'Getting started',
      'https://docs.neuron-ai.dev/overview/getting-started',
      'Install Neuron AI and create your first agent.',
    ),
    link(
      'GitHub',
      'https://github.com/neuron-core/neuron-ai',
      'Source code, issues and releases.',
    ),
    link(
      'Video tutorials',
      'https://www.youtube.com/watch?v=oSA1bP_j41w',
      'Step-by-step guides from installation to advanced features.',
    ),
    '',
    '## Work with the team',
    '',
    link(
      'Kickstart',
      '/kickstart/',
      'Bring a real project you want to build with Neuron. After a short intro call, if it is a fit, the people who build Neuron run a live onboarding session of about 60 minutes for your developers, at no cost.',
    ),
    link(
      'Book a Kickstart intro call',
      KICKSTART_CALL_URL,
      'Tell the team about your project.',
    ),
    link(
      'Expert support',
      'https://cal.com/inspector/neuron-meeting',
      'Meet the framework creators for dedicated support on your project.',
    ),
    link(
      'Partners',
      '/partners/',
      'A vetted network of companies building real products on Neuron, with a direct line to the maintainers.',
    ),
    link(
      'Become a partner',
      '/become-a-partner/',
      'Apply to the partner network for $300 a month, cancel anytime. Applications need a link to a live project, repository or application built with Neuron AI.',
    ),
    '',
    '## Partners',
    '',
    ...partners,
    '',
    '## Ecosystem',
    '',
    link(
      'Inspector',
      'https://inspector.dev/',
      'Monitoring for PHP applications, and the company behind Neuron AI.',
    ),
    link(
      'Neuron Hub',
      'https://neuronhub.dev/',
      'Connectors and extensions for Neuron AI.',
    ),
    link(
      'Neuron Router',
      'https://github.com/neuron-core/router',
      'Route inference calls to different providers, with a fallback order or routing rules you define.',
    ),
    link(
      'Maestro',
      'https://github.com/neuron-core/maestro',
      'A CLI agent built entirely in PHP with Neuron AI.',
    ),
    '',
    '## Optional',
    '',
    link(
      'Start with AI Agents in PHP',
      'https://www.amazon.com/dp/B0F1YX8KJB',
      'The book on building AI-powered agents with PHP, on Amazon and Google Play.',
    ),
    link(
      'Neuron TUI',
      'https://github.com/asterixcapri/neuron-tui',
      'Community project: a terminal UI for running Neuron AI agents.',
    ),
    link(
      'Generative UI demo',
      'https://github.com/neuron-core/generative-ui-demo',
      'Agents that query SQL databases and generate insights from business data in natural language.',
    ),
    link(
      'Drupal agent demo',
      'https://github.com/neuron-core/drupal-demo',
      'Two Neuron AI agents in the Drupal admin panel, with the ai_neuron module.',
    ),
    link(
      'Deep Research Agent',
      'https://github.com/neuron-core/deep-research-agent',
      'Generates research reports on any topic with large language models.',
    ),
    link(
      'How to create a RAG agent with Neuron',
      'https://inspector.dev/how-to-create-a-rag-agent-with-neuron-adk-for-php/',
      'Tutorial: Retrieval-Augmented Generation with Ollama or cloud providers.',
    ),
    link(
      'Building multi-agent systems in Laravel',
      'https://inspector.dev/building-multi-agent-systems-in-laravel-a-practical-demo/',
      'Tutorial: a multi-agent travel planner with orchestration and state management.',
    ),
    '',
  ].join('\n');

  return new Response(body);
};
