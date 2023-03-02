import { Helmet } from 'react-helmet';

import Header from 'components/features/header/Header';
import ProductList from 'components/features/product-list/ProductList';
import ProductFilters from 'components/features/product-filters/ProductFilters';
import Footer from 'components/features/footer/Footer';

import useAppSelector from 'hooks/useAppSelector';

const ProductsPage: React.FC = () => {
  const { activeCategory } = useAppSelector((state) => state.products);

  return (
    <>
      <Helmet>
        <title>Platzi Fake Store | Shop - {`${activeCategory}`} </title>
        <meta name="description" content="Products page" />
      </Helmet>
      <Header />
      <section className="flex-auto p-[50px]">
        <h2 className="mb-[30px] text-center text-white text-4xl font-bold">{activeCategory}</h2>
        <div className="categories-container flex items-start gap-[30px]">
          <ProductFilters />
          <ProductList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPage;
