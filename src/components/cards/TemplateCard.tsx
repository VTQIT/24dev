import { AgentTemplate } from '@/types';
import { Badge } from '@/components/ui/badge';
import { 
  FileCode, 
  Terminal, 
  Bot, 
  ClipboardList, 
  FileText, 
  Headphones,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TemplateCardProps {
  template: AgentTemplate;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  nextjs: FileCode,
  python: Terminal,
  go: Terminal,
  research: Search,
  form: ClipboardList,
  docs: FileText,
  support: Headphones,
};

export function TemplateCard({ template, className }: TemplateCardProps) {
  const Icon = iconMap[template.icon] || Bot;

  return (
    <div 
      className={cn(
        "group bg-white rounded-xl border border-gray-200 p-5",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-md cursor-pointer",
        className
      )}
    >
      {/* Icon */}
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
        <Icon className="w-5 h-5 text-gray-700" />
      </div>

      {/* Content */}
      <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{template.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {template.tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary"
            className="text-xs font-normal bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
