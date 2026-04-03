import { ComponentCard } from '@/components/cards/ComponentCard';
import { Component } from '@/types';

interface ComponentGridProps {
  components: Component[];
}

export function ComponentGrid({ components }: ComponentGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {components.map((component) => (
        <ComponentCard key={component.id} component={component} />
      ))}
    </div>
  );
}
