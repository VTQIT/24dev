import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TemplateCard } from '@/components/cards/TemplateCard';
import { agentTemplates } from '@/data/templates';

export function AgentTemplatesSection() {
  return (
    <section className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Agent Templates</h2>
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link to="/agents/templates">
            View all
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative -mx-6 px-6">
        <div 
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'thin', msOverflowStyle: 'none' }}
        >
          {agentTemplates.map((template) => (
            <div key={template.id} className="flex-shrink-0 w-[300px]">
              <TemplateCard template={template} />
            </div>
          ))}
        </div>
        
        {/* Fade effect on right */}
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-[#f8f9fa] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
