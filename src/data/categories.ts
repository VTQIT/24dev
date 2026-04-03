import { Category } from '@/types';

export const marketingCategories: Category[] = [
  { id: '1', name: 'Announcements', slug: 'announcement', count: 10, section: 'marketing' },
  { id: '2', name: 'Backgrounds', slug: 'background', count: 33, section: 'marketing' },
  { id: '3', name: 'Borders', slug: 'border', count: 12, section: 'marketing' },
  { id: '4', name: 'Calls to Action', slug: 'call-to-action', count: 34, section: 'marketing' },
  { id: '5', name: 'Clients', slug: 'clients', count: 16, section: 'marketing' },
  { id: '6', name: 'Comparisons', slug: 'comparison', count: 6, section: 'marketing' },
  { id: '7', name: 'Docks', slug: 'dock', count: 6, section: 'marketing' },
  { id: '8', name: 'Features', slug: 'features', count: 36, section: 'marketing' },
  { id: '9', name: 'Footers', slug: 'footer', count: 14, section: 'marketing' },
  { id: '10', name: 'Heroes', slug: 'hero', count: 73, section: 'marketing' },
  { id: '11', name: 'Hooks', slug: 'hook', count: 31, section: 'marketing' },
  { id: '12', name: 'Images', slug: 'image', count: 26, section: 'marketing' },
  { id: '13', name: 'Maps', slug: 'map', count: 2, section: 'marketing' },
  { id: '14', name: 'Navigation Menus', slug: 'navbar-navigation', count: 11, section: 'marketing' },
  { id: '15', name: 'Pricing Sections', slug: 'pricing-section', count: 17, section: 'marketing' },
  { id: '16', name: 'Scroll Areas', slug: 'scroll-area', count: 24, section: 'marketing' },
  { id: '17', name: 'Shaders', slug: 'shader', count: 15, section: 'marketing' },
  { id: '18', name: 'Testimonials', slug: 'testimonials', count: 15, section: 'marketing' },
  { id: '19', name: 'Texts', slug: 'text', count: 58, section: 'marketing' },
  { id: '20', name: 'Videos', slug: 'video', count: 9, section: 'marketing' },
];

export const uiCategories: Category[] = [
  { id: '21', name: 'Accordions', slug: 'accordion', count: 40, section: 'ui' },
  { id: '22', name: 'AI Chats', slug: 'ai-chats', count: 30, section: 'ui' },
  { id: '23', name: 'Alerts', slug: 'alerts', count: 23, section: 'ui' },
  { id: '24', name: 'Avatars', slug: 'avatars', count: 17, section: 'ui' },
  { id: '25', name: 'Badges', slug: 'badges', count: 25, section: 'ui' },
  { id: '26', name: 'Buttons', slug: 'buttons', count: 130, section: 'ui' },
  { id: '27', name: 'Calendars', slug: 'calendars', count: 34, section: 'ui' },
  { id: '28', name: 'Cards', slug: 'cards', count: 79, section: 'ui' },
  { id: '29', name: 'Carousels', slug: 'carousels', count: 16, section: 'ui' },
  { id: '30', name: 'Checkboxes', slug: 'checkboxes', count: 19, section: 'ui' },
  { id: '31', name: 'Date Pickers', slug: 'date-pickers', count: 12, section: 'ui' },
  { id: '32', name: 'Dialogs / Modals', slug: 'dialogs', count: 37, section: 'ui' },
  { id: '33', name: 'Dropdowns', slug: 'dropdowns', count: 25, section: 'ui' },
  { id: '34', name: 'Empty States', slug: 'empty-states', count: 1, section: 'ui' },
  { id: '35', name: 'File Trees', slug: 'file-trees', count: 2, section: 'ui' },
  { id: '36', name: 'File Uploads', slug: 'file-uploads', count: 7, section: 'ui' },
];

export const allCategories = [...marketingCategories, ...uiCategories];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return allCategories.find(cat => cat.slug === slug);
};
