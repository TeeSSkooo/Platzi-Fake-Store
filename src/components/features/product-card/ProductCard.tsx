import { Link } from 'react-router-dom';

import ProductCardProps from 'types/props/ProductCardProps';

import useAppDispatch from 'hooks/useAppDispatch';
import { setActiveProduct } from 'store/slices/productsSlice';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const selectProduct = (): void => {
    dispatch(setActiveProduct(product.id.toString()));
  };

  return (
    <li className="flex flex-col p-[5px] rounded-[5px] shadow-lg text-white bg-[#0e1830]">
      <Link
        className="block h-[190px] rounded-[5px] overflow-hidden"
        to={`/shop/categories/${product.category.name}/products/${product.id}`}
        onClick={selectProduct}
      >
        <img className="object-cover" src={product.images[0]} alt={product.title} />
      </Link>
      <div className="flex-auto flex flex-col px-[5px] py-[10px]">
        <div className="flex-auto mb-[15px] flex justify-between items-center gap-[15px]">
          <Link
            className="text-xl"
            to={`/shop/categories/${product.category}/products/${product.id}`}
            onClick={selectProduct}
          >
            {product.title}
          </Link>
          <span className="text-xl">${product.price}</span>
        </div>
        <button className="self-start min-h-[40px] rounded-[5px] px-[12px] bg-[#7bbd08] transition-all hover:bg-[#94c83a]">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
