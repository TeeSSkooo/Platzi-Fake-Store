import { Link } from 'react-router-dom';

import ProductCard from 'components/features/product-card/ProductCard';
import Loader from 'components/UI/loader/Loader';
import SearchBar from 'components/UI/search-bar/SearchBar';

import productsApi from 'api/productsApi';

const ProductsPreview: React.FC = () => {
  const { data, isFetching } = productsApi.useGetProductsPreviewQuery(null);

  return (
    <section className="p-[15px] sm:p-[30px] text-white">
      <div className="products-container">
        <div className="mb-[45px] max-w-[400px] mx-auto text-center">
          <h2 className="mb-[15px] text-3xl">Our Products</h2>
          <div className="text-base text-[#bababa] md:text-xl">
            Our Furniture It is a long established fact that a reader will be distracted by the service.
          </div>
        </div>
        <SearchBar />
        {isFetching ? (
          <div className="grid place-items-center mb-[50px]">
            <Loader />
          </div>
        ) : (
          <ul className="mb-[50px] grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
        )}
        <div className="text-center">
          <Link
            className="inline-block px-[20px] py-[7px] rounded-[5px] text-lg bg-[#7bbd08] transition-all hover:bg-[#94c83a] sm:px-[28px] sm:py-[12px]"
            to="/shop/categories"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
