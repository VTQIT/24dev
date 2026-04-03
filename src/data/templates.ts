import { AgentTemplate } from '@/types';

export const agentTemplates: AgentTemplate[] = [
  {
    id: '1',
    name: 'Next.js Starter',
    description: 'Next.js chat interface with AI agent powered by 21st Agents SDK',
    icon: 'nextjs',
    tags: ['Claude Code', 'DuckDuckGo'],
  },
  {
    id: '2',
    name: 'Python Starter',
    description: 'Minimal server-side Python chat client using the 21st SDK',
    icon: 'python',
    tags: ['Python', '21st SDK'],
  },
  {
    id: '3',
    name: 'Go Starter',
    description: 'Minimal terminal chat client in Go using the 21st SDK',
    icon: 'go',
    tags: ['Go', '21st SDK'],
  },
  {
    id: '4',
    name: 'Lead Research Agent',
    description: 'Research people by email online, qualify leads, and send Slack alerts for interesting prospects',
    icon: 'research',
    tags: ['Claude Code', 'Slack', 'Exa.ai'],
  },
  {
    id: '5',
    name: 'Form Autocomplete',
    description: 'AI-powered form filling with tabbed forms and chat interface',
    icon: 'form',
    tags: ['Claude Code'],
  },
  {
    id: '6',
    name: 'Docs Assistant',
    description: 'Documentation Q&A agent — provide a docs URL and get an instant assistant that searches via llms.txt',
    icon: 'docs',
    tags: ['Claude Code', 'llms.txt'],
  },
  {
    id: '7',
    name: 'Support Agent',
    description: 'Docs-powered support agent that answers questions from llms.txt and escalates unanswered ones via email',
    icon: 'support',
    tags: ['Claude Code', 'llms.txt', 'Resend'],
  },
];
