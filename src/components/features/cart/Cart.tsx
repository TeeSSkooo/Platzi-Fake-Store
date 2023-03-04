import { Link } from 'react-router-dom';

import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { closeCart } from 'store/slices/cartSlice';

import ProductCard from '../product-card/ProductCard';

import closeBtn from 'assets/close-x.svg';
import sadFace from 'assets/sad-face.svg';

const Cart: React.FC = () => {
  const { showCart, cartProducts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const close = () => {
    document.body.style.overflow = 'auto';
    dispatch(closeCart());
  };

  return (
    <>
      <div
        className="fixed z-20 top-0 w-[300px] h-full p-[10px] border border-white border-l-0 rounded-[5px] text-white bg-[#162850] transition-all duration-500"
        style={showCart ? { left: 0 } : { left: '-100%' }}
      >
        <div className="mb-[30px] flex justify-between items-center">
          <h2 className="text-3xl font-bold">Cart</h2>
          <button onClick={close}>
            <img src={closeBtn} alt="Close button" />
          </button>
        </div>
        {cartProducts.length ? (
          <>
            <ul className="mb-[40px] rounded-[5px] flex flex-col gap-[20px] h-[800px] overflow-auto">
              {cartProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <div className="flex gap-[10px] text-2xl">
                <span className="font-bold">Total:</span>${cartProducts.reduce((acc, curr) => acc + curr.price, 0)}
              </div>
              <button className="rounded-[5px] p-[7px] bg-[#7bbd08] transition-all hover:bg-[#94c83a]">
                Order Now
              </button>
            </div>
          </>
        ) : (
          <div className="absolute top-1/2 left-1/2 flex flex-col items-center gap-[20px] translate-x-[-50%] translate-y-[-50%]">
            <img className="w-[150px] h-[150px]" src={sadFace} alt="Sad face" />
            <div className="text-xl text-center">
              Cart is empty.{' '}
              <Link className="text-[#7bbd08]" to="shop/categories">
                Buy something
              </Link>
            </div>
          </div>
        )}
      </div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-[#000000a8] transition-all duration-500"
        onClick={close}
        style={showCart ? { opacity: 1 } : { opacity: 0, visibility: 'hidden' }}
      ></div>
    </>
  );
};

export default Cart;
