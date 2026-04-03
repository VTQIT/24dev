import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  
  const isComponentsPage = location.pathname.startsWith('/components');
  const isThemesPage = location.pathname === '/themes';
  
  // Extract breadcrumb from path
  const pathParts = location.pathname.split('/').filter(Boolean);
  const breadcrumb = pathParts.length > 1 ? pathParts[pathParts.length - 1] : null;
  const formattedBreadcrumb = breadcrumb 
    ? breadcrumb.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : null;

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-30 lg:pl-[240px]">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Breadcrumb or Title */}
          <div className="flex items-center gap-2">
            {isComponentsPage && formattedBreadcrumb && (
              <>
                <Link 
                  to="/components" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Components
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-sm font-medium text-gray-900">{formattedBreadcrumb}</span>
              </>
            )}
            {isThemesPage && (
              <span className="text-sm font-medium text-gray-900">Themes</span>
            )}
            {!isComponentsPage && !isThemesPage && (
              <span className="text-sm font-medium text-gray-900">Home</span>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Components Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <span className="hidden sm:inline">Components</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/components">All Components</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/components/newest">Newest</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/components/featured">Featured</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/themes">Themes</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Avatar */}
          <Button variant="ghost" size="icon" className="rounded-full">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
