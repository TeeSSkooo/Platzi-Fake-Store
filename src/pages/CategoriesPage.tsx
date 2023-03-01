import { Helmet } from 'react-helmet';

import Header from 'components/features/header/Header';
import CategoryList from 'components/features/category-list/CategoryList';
import Footer from 'components/features/footer/Footer';

const CategoriesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Fake Store | Shop</title>
        <meta name="description" content="Shop page" />
      </Helmet>
      <Header />
      <section className="flex-auto p-[50px]">
        <h2 className="mb-[30px] text-center text-white text-4xl font-bold">Categories</h2>
        <div className="categories-container">
          <CategoryList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoriesPage;
