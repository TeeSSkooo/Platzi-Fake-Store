import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import CategoriesPage from 'pages/CategoriesPage';
import ProductsPage from 'pages/ProductsPage';
import SignUpPage from 'pages/SignUpPage';
import LogInPage from 'pages/LogInPage';

export default function App() {
  return (
    <div className="min-h-full flex flex-col bg-[#121f3d]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/categories" element={<CategoriesPage />} />
        <Route path="/shop/categories/:categoryId/products" element={<ProductsPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </div>
  );
}
