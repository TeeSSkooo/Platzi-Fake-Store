import Header from 'components/header/Header';
import HeroSection from 'components/hero-section/HeroSection';
import OurServices from 'components/our-services/OurServices';
import ProductsPreview from 'components/products-preview/ProductsPreview';
import Reviews from 'components/reviews/Reviews';
import ShopBanner from 'components/shop-banner/ShopBanner';
import Footer from 'components/footer/Footer';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col bg-[#121f3d]">
      <Header />
      <main className="flex-auto">
        <HeroSection />
        <OurServices />
        <ProductsPreview />
        <Reviews />
        <ShopBanner />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
