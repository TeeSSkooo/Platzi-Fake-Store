import { Helmet } from 'react-helmet';

import Header from 'components/features/header/Header';
import HeroSection from 'components/features/hero-section/HeroSection';
import OurServices from 'components/features/our-services/OurServices';
import ProductsPreview from 'components/features/products-preview/ProductsPreview';
import Reviews from 'components/features/reviews/Reviews';
import ShopBanner from 'components/features/shop-banner/ShopBanner';
import Footer from 'components/features/footer/Footer';
import ScrollTopBtn from 'components/UI/scroll-top-btn/ScrollTopBtn';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Fake Store</title>
        <meta name="description" content="Profile page" />
      </Helmet>
      <Header />
      <main className="flex-auto">
        <HeroSection />
        <OurServices />
        <ProductsPreview />
        <Reviews />
        <ShopBanner />
      </main>
      <Footer />
      <ScrollTopBtn />
    </>
  );
};

export default HomePage;
