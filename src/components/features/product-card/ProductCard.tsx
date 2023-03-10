import { Link, useNavigate } from 'react-router-dom';

import ProductCardProps from 'types/props/ProductCardProps';

import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import useAuth from 'hooks/useAuth';
import { setActiveProduct } from 'store/slices/productsSlice';
import { addProductToCart, removeProductFromCart } from 'store/slices/cartSlice';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cartProducts } = useAppSelector((state) => state.cart);
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectProduct = () => {
    const productId = product.id.toString();

    dispatch(setActiveProduct(productId));
  };

  const toggleAddProduct = () => {
    if (!isAuth) {
      navigate('/sign-up');
      return;
    }

    if (cartProducts.includes(product)) {
      dispatch(removeProductFromCart(product));
    } else {
      dispatch(addProductToCart(product));
    }
  };

  return (
    <li className="flex flex-col p-[5px] rounded-[5px] shadow-lg text-white bg-[#0e1830]">
      <Link
        className="block rounded-[5px] overflow-hidden"
        to={`/shop/categories/${product.category.name}/products/${product.id}`}
        onClick={selectProduct}
      >
        <img className="w-full h-[190px] object-cover" src={product.images[0]} alt={product.title} />
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
        <button
          className="self-start min-h-[40px] rounded-[5px] px-[12px] bg-[#7bbd08] transition-all hover:bg-[#94c83a]"
          type="button"
          onClick={toggleAddProduct}
        >
          {cartProducts.includes(product) ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
