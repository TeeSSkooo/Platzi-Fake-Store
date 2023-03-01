import ProductCard from 'components/features/product-card/ProductCard';
import Loader from 'components/UI/loader/Loader';
import SearchBar from 'components/UI/search-bar/SearchBar';

import productsApi from 'api/productsApi';

const ProductsPreview: React.FC = () => {
  const { data, isFetching } = productsApi.useGetProductsPreviewQuery(null);

  return (
    <section className="p-[30px] text-white">
      <div className="products-container">
        <div className="mb-[45px] max-w-[400px] mx-auto text-center">
          <h2 className="mb-[15px] text-3xl">Our Products</h2>
          <div className="text-xl text-[#bababa]">
            Our Furniture It is a long established fact that a reader will be distracted by the service.
          </div>
        </div>
        <SearchBar />
        {isFetching ? (
          <div className="grid place-items-center mb-[50px]">
            <Loader />
          </div>
        ) : (
          <ul className="mb-[50px] grid grid-cols-4 gap-[30px]">
            {data?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </ul>
        )}
        <div className="text-center">
          <a
            className="inline-block  px-[28px] py-[12px] rounded-[5px] text-lg bg-[#7bbd08] transition-all hover:bg-[#94c83a]"
            href="/"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
