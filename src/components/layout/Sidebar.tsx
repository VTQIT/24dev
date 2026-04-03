import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Sparkles, 
  Clock, 
  Trophy, 
  Palette, 
  Users, 
  ChevronLeft,
  Command
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { marketingCategories, uiCategories } from '@/data/categories';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const isSubPage = location.pathname.includes('/s/') || location.pathname.includes('/themes');

  const mainNavItems = [
    { label: 'Featured', href: '/components', icon: Sparkles },
    { label: 'Newest', href: '/components/newest', icon: Clock },
    { label: 'Best of the Week', href: '/components/week', icon: Trophy },
    { label: 'Themes', href: '/themes', icon: Palette },
    { label: 'Top Authors', href: '/authors', icon: Users },
  ];

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 h-screen w-[240px] bg-white border-r border-gray-200 z-50",
          "flex flex-col overflow-hidden",
          "transition-transform duration-300 ease-out",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 h-14 border-b border-gray-200">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">21</span>
          </div>
          <span className="font-semibold text-sm">21st</span>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* Back button on subpages */}
          {isSubPage && (
            <div className="px-4 mb-4">
              <Link 
                to="/"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </Link>
            </div>
          )}

          {/* Search */}
          <div className="px-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-8 h-9 text-sm bg-gray-50 border-gray-200 focus:bg-white"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
                <Command className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-400">K</span>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="px-2 mb-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive(item.href)
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Marketing Blocks Section */}
          <div className="mb-6">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Marketing Blocks
            </h3>
            <nav className="px-2">
              {marketingCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/components/s/${category.slug}`}
                  className={cn(
                    "flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-colors",
                    location.pathname === `/components/s/${category.slug}`
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <span>{category.name}</span>
                  <span className="text-xs text-gray-400">{category.count}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* UI Components Section */}
          <div>
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              UI Components
            </h3>
            <nav className="px-2">
              {uiCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/components/s/${category.slug}`}
                  className={cn(
                    "flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-colors",
                    location.pathname === `/components/s/${category.slug}`
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <span>{category.name}</span>
                  <span className="text-xs text-gray-400">{category.count}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
