import PriceRange from 'components/UI/price-range/PriceRange';

const ProductFilters: React.FC = () => {
  return (
    <div className="p-[15px] rounded-[5px] text-white bg-[#0e1830]">
      <h2 className="mb-[20px] text-center text-3xl font-bold">Filters</h2>
      <h3 className="mb-[10px] text-xl">Price</h3>
      <PriceRange />
    </div>
  );
};

export default ProductFilters;
