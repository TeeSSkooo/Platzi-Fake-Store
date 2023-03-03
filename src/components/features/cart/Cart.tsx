import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { closeCart } from 'store/slices/cartSlice';

import ProductCard from '../product-card/ProductCard';

import closeBtn from 'assets/close-x.svg';

const Cart: React.FC = () => {
  const { showCart, cartProducts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const close = () => dispatch(closeCart());

  return (
    <div
      className="fixed top-0 left-[0] w-[250px] h-full p-[20px] border border-white border-l-0 rounded-[5px] text-white bg-[#162850] transition-all duration-500"
      style={showCart ? { left: 0 } : { left: '-100%' }}
    >
      <div className="mb-[30px] flex justify-between items-center">
        <h2 className="text-3xl font-bold">Cart</h2>
        <button onClick={close}>
          <img src={closeBtn} alt="Close button" />
        </button>
      </div>
      <ul className="mb-[40px] flex flex-col gap-[20px] h-[800px] overflow-auto">
        {cartProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
      <div className="flex gap-[10px] text-2xl">
        <span className="font-bold">Total:</span>${cartProducts.reduce((acc, curr) => acc + curr.price, 0)}
      </div>
    </div>
  );
};

export default Cart;
