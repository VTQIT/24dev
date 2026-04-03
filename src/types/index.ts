export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  section: 'marketing' | 'ui';
}

export interface Author {
  name: string;
  avatar?: string;
  initials: string;
}

export interface Component {
  id: string;
  name: string;
  slug: string;
  author: Author;
  category: string;
  uses: number;
  preview?: string;
  tags?: string[];
}

export interface Theme {
  id: string;
  name: string;
  slug: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
  };
  isBuiltIn: boolean;
}

export interface AgentTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  count?: number;
}
