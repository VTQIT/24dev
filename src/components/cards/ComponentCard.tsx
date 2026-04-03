import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { Component } from '@/types'; // ✅ FIXED (type-only import)
import { cn } from '@/lib/utils';

interface ComponentCardProps {
  component: Component;
  className?: string;
}

export function ComponentCard({ component, className }: ComponentCardProps) {
  // Generate a gradient based on the component name
  const gradients = [
    'from-pink-500 via-red-500 to-yellow-500',
    'from-green-400 via-blue-500 to-purple-600',
    'from-blue-400 via-indigo-500 to-purple-600',
    'from-orange-400 via-pink-500 to-purple-600',
    'from-cyan-400 via-blue-500 to-indigo-600',
    'from-emerald-400 via-teal-500 to-cyan-600',
  ];
  
  const gradientIndex = component.name.length % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <Link 
      to={`/components/${component.author.name}/${component.slug}`}
      className={cn(
        "group block bg-white rounded-xl border border-gray-200 overflow-hidden",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {/* Preview Area */}
      <div className="aspect-[16/10] bg-gray-50 relative overflow-hidden">
        {/* Gradient preview */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-80",
          gradient
        )} />
        
        {/* Mock UI */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="w-16 h-2 bg-white/40 rounded mb-2" />
            <div className="w-24 h-2 bg-white/30 rounded" />
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-center gap-2">
          <Avatar className="w-5 h-5">
            <AvatarFallback className="text-[10px] bg-gray-100 text-gray-600">
              {component.author.initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-900 truncate">
            {component.name}
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1.5 text-gray-500">
          <Eye className="w-3.5 h-3.5" />
          <span className="text-xs">
            {component.uses.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
