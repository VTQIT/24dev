import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ComponentCard } from '@/components/cards/ComponentCard';
import { newestComponents } from '@/data/components';

export function UIComponentsSection() {
  return (
    <section className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">UI Components</h2>
          <p className="text-sm text-gray-500">Newest</p>
        </div>
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link to="/components/newest">
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
          {newestComponents.map((component) => (
            <div key={component.id} className="flex-shrink-0 w-[280px]">
              <ComponentCard component={component} />
            </div>
          ))}
        </div>
        
        {/* Fade effect on right */}
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-[#f8f9fa] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
