import { useParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ComponentGrid } from '@/components/sections/ComponentGrid';
import { getCategoryBySlug } from '@/data/categories';
import { getComponentsByCategory } from '@/data/components';
import { buttonComponents, heroComponents, shaderComponents } from '@/data/components';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const categoryData = category ? getCategoryBySlug(category) : null;
  
  // Get components for this category
  let components = category ? getComponentsByCategory(category) : [];
  
  // Fallback to mock data for specific categories
  if (components.length === 0) {
    if (category === 'buttons') components = buttonComponents;
    else if (category === 'hero') components = heroComponents;
    else if (category === 'shader') components = shaderComponents;
  }

  // If still no components, generate some mock ones
  if (components.length === 0 && categoryData) {
    components = Array.from({ length: 8 }, (_, i) => ({
      id: `mock-${i}`,
      name: `${categoryData.name} Component ${i + 1}`,
      slug: `component-${i + 1}`,
      author: { name: 'author', initials: 'A' },
      category: category || '',
      uses: Math.floor(Math.random() * 500) + 10,
    }));
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          {categoryData?.name || category}
        </h1>
        <p className="text-gray-600">
          Components for React & Next.js
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Level up first impressions with {categoryData?.count || components.length} {categoryData?.name.toLowerCase() || category} components for React and Tailwind CSS, designed to capture attention on your Next.js landing pages.
        </p>
      </div>

      {/* Filter */}
      <div className="flex items-center justify-between mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              Recommended
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Recommended</DropdownMenuItem>
            <DropdownMenuItem>Newest</DropdownMenuItem>
            <DropdownMenuItem>Most Popular</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Component Grid */}
      <ComponentGrid components={components} />
    </div>
  );
}
