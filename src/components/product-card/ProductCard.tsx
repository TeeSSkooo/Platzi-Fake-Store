const ProductCard: React.FC = () => {
  return (
    <li className="p-[5px] rounded-[5px] shadow-lg bg-[#0e1830]">
      <a className="block rounded-[5px] overflow-hidden" href="/">
        <img src="https://via.placeholder.com/257x172" alt="#" />
      </a>
      <div className="px-[5px] py-[10px]">
        <div className="mb-[10px] flex justify-between items-center">
          <a className="text-xl" href="/">
            Product Name
          </a>
          <span className="text-xl">$ 250</span>
        </div>
        <div className="mb-[15px] text-[#bababa]">
          It is a long estiabs lished fact that a reader will be the service.
        </div>
        <button className="min-h-[40px] rounded-[5px] px-[12px] bg-[#98ca3f] transition-all hover:bg-[#7ca339]">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
