import { Theme } from '@/types';
import { cn } from '@/lib/utils';

interface ThemeCardProps {
  theme: Theme;
  className?: string;
}

export function ThemeCard({ theme, className }: ThemeCardProps) {
  return (
    <div 
      className={cn(
        "group cursor-pointer rounded-2xl overflow-hidden",
        "transition-all duration-200 ease-out",
        "hover:scale-[1.02] hover:shadow-lg",
        className
      )}
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Preview Content */}
      <div className="aspect-square p-6 flex flex-col items-center justify-center text-center">
        <h3 
          className="text-xl font-semibold mb-2"
          style={{ color: theme.colors.foreground }}
        >
          Amazing Website
        </h3>
        <p 
          className="text-sm mb-6 opacity-80"
          style={{ color: theme.colors.foreground }}
        >
          Experience beautiful design with perfect colors and typography
        </p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 rounded-md text-sm font-medium transition-opacity hover:opacity-90"
            style={{ 
              backgroundColor: theme.colors.primary,
              color: '#ffffff'
            }}
          >
            Get Started
          </button>
          <button
            className="px-4 py-2 rounded-md text-sm font-medium border transition-opacity hover:opacity-80"
            style={{ 
              borderColor: theme.colors.foreground + '40',
              color: theme.colors.foreground
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Theme Info */}
      <div className="bg-white p-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">{theme.name}</span>
          {theme.isBuiltIn && (
            <span className="text-xs text-gray-500">Built-in</span>
          )}
        </div>
      </div>
    </div>
  );
}
