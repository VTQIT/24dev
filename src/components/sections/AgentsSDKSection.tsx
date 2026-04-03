import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Shield, Zap, Eye, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Shield,
    title: 'E2B Sandboxes',
    description: 'Isolated VM per session',
  },
  {
    icon: Zap,
    title: 'Streaming',
    description: 'Token-by-token via SSE',
  },
  {
    icon: DollarSign,
    title: 'Auth & Limits',
    description: 'Tokens, rate limits, spend caps',
  },
  {
    icon: Eye,
    title: 'Observability',
    description: 'Session replay & traces',
  },
];

export function AgentsSDKSection() {
  return (
    <section className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Agents SDK</h2>
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link to="/agents/docs">
            Read docs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Main Content */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              The fastest way to ship AI agents
            </h3>
            <p className="text-gray-600 mb-6">
              Built-in UI, chat history, spend limits, sandbox execution, and observability. Works with Claude and OpenAI.
            </p>
            <div className="flex gap-3">
              <Button className="gap-2">
                Get started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Documentation
              </Button>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-4 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
              >
                <feature.icon className="w-5 h-5 text-gray-700 mb-2" />
                <h4 className="font-medium text-gray-900 text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
