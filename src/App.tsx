import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { ComponentsPage } from '@/pages/ComponentsPage';
import { CategoryPage } from '@/pages/CategoryPage';
import { ThemesPage } from '@/pages/ThemesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="components/s/:category" element={<CategoryPage />} />
          <Route path="themes" element={<ThemesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
