import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ComponentCard } from '@/components/cards/ComponentCard';
import { 
  newestComponents, 
  popularComponents, 
  shaderComponents, 
  heroComponents 
} from '@/data/components';

interface SectionProps {
  title: string;
  components: typeof newestComponents;
  viewAllHref: string;
}

function Section({ title, components, viewAllHref }: SectionProps) {
  return (
    <section className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link to={viewAllHref}>
            View all
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {components.slice(0, 4).map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>
    </section>
  );
}

export function ComponentsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Section 
        title="Newest" 
        components={newestComponents} 
        viewAllHref="/components/newest" 
      />
      <Section 
        title="Popular" 
        components={popularComponents} 
        viewAllHref="/components/popular" 
      />
      <Section 
        title="Shaders" 
        components={shaderComponents} 
        viewAllHref="/components/s/shader" 
      />
      <Section 
        title="Heros" 
        components={heroComponents} 
        viewAllHref="/components/s/hero" 
      />
    </div>
  );
}
