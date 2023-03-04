import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import CategoriesPage from 'pages/CategoriesPage';
import ProductsPage from 'pages/ProductsPage';
import SignUpPage from 'pages/SignUpPage';
import LogInPage from 'pages/LogInPage';
import ProductDetailsPage from 'pages/ProductDetailsPage';
import ProfilePage from 'pages/ProfilePage';
import NotFoundPage from 'pages/NotFoundPage';
import Cart from 'components/features/cart/Cart';

export default function App() {
  return (
    <div className="min-h-full flex flex-col bg-[#121f3d]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/shop/categories" element={<CategoriesPage />} />
        <Route path="/shop/categories/:categoryId/products" element={<ProductsPage />} />
        <Route path="/shop/categories/:categoryName/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Cart />
    </div>
  );
}
