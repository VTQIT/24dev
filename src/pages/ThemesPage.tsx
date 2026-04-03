import { ThemeCard } from '@/components/cards/ThemeCard';
import { themes } from '@/data/themes';

export function ThemesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Themes
        </h1>
        <p className="text-gray-600">
          Discover community-made shadcn themes
        </p>
      </div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>
    </div>
  );
}
