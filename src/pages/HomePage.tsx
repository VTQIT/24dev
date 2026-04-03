import { UIComponentsSection } from '@/components/sections/UIComponentsSection';
import { AgentsSDKSection } from '@/components/sections/AgentsSDKSection';
import { AgentTemplatesSection } from '@/components/sections/AgentTemplatesSection';

export function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <UIComponentsSection />
      <AgentsSDKSection />
      <AgentTemplatesSection />
    </div>
  );
}
