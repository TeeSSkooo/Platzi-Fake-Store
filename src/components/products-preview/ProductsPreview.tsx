import ProductCard from 'components/product-card/ProductCard';

import search from 'assets/search.svg';

const ProductsPreview: React.FC = () => {
  return (
    <section className="p-[30px] text-white">
      <div className="products-container">
        <div className="mb-[45px] max-w-[400px] mx-auto text-center">
          <h2 className="mb-[15px] text-3xl">Our Products</h2>
          <div className="text-xl text-[#bababa]">
            Our Furniture It is a long established fact that a reader will be distracted by the service.
          </div>
        </div>
        <div className="relative w-[317px] mx-auto mb-[50px]">
          <input
            className="w-full h-[50px] rounded-[5px] p-[16px] pr-[55px] text-xl text-black"
            type="text"
            placeholder="Search a product"
          />
          <div className="absolute top-0 right-0 w-[50px] h-[50px] rounded-[5px] grid place-items-center bg-[#98ca3f]">
            <img src={search} alt="Search" />
          </div>
        </div>
        <ul className="mb-[50px] grid grid-cols-4 gap-[30px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
        <div className="text-center">
          <a
            className="inline-block  px-[28px] py-[12px] rounded-[5px] text-lg bg-[#98ca3f] transition-all hover:bg-[#7ca339]"
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
