import ProductCardProps from 'types/props/ProductCardProps';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <li className="flex flex-col p-[5px] rounded-[5px] shadow-lg text-white bg-[#0e1830]">
      <a className="block h-[190px] rounded-[5px] overflow-hidden" href="/">
        <img className="object-cover" src={product.images[0]} alt="#" />
      </a>
      <div className="flex-auto flex flex-col px-[5px] py-[10px]">
        <div className="flex-auto mb-[15px] flex justify-between items-center gap-[15px]">
          <a className="text-xl" href="/">
            {product.title}
          </a>
          <span className="text-xl">${product.price}</span>
        </div>
        <button className="self-start min-h-[40px] rounded-[5px] px-[12px] bg-[#98ca3f] transition-all hover:bg-[#7ca339]">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
