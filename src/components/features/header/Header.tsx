import { Link, NavLink } from 'react-router-dom';

import useAuth from 'hooks/useAuth';
import useAppDispatch from 'hooks/useAppDispatch';
import { removeUser } from 'store/slices/userSlice';

import account from 'assets/account.svg';
import cart from 'assets/shopping-cart.svg';

const Header: React.FC = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const logOut = (): void => {
    dispatch(removeUser());
  };

  return (
    <header className="border-b">
      <div className="header-container min-h-[100px] flex justify-between items-center">
        <Link className="flex items-center gap-2" to="/">
          <svg width="40" height="40" fill="#98ca3f" viewBox="0 0 24 24">
            <path d="M10.64 1.127L2.487 9.282a3.842 3.842 0 000 5.436l8.155 8.155a3.842 3.842 0 005.436 0l2.719-2.718-2.719-2.718-2.718 2.718L5.204 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.719L21.514 12a3.842 3.842 0 000-5.437l-5.448-5.436a3.828 3.828 0 00-5.425 0Z"></path>
          </svg>
          <span className="text-white text-3xl font-bold">Platzi Fake Store</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-[20px]">
            <li style={isAuth ? { display: 'block' } : { display: 'none' }}>
              <a href="/">
                <img src={account} alt="Account" />
              </a>
            </li>
            <li style={isAuth ? { display: 'block' } : { display: 'none' }}>
              <a href="/">
                <img src={cart} alt="Shopping cart" />
              </a>
            </li>
            <li>
              <NavLink
                className="text-lg transition-all ease-in-out hover:text-[#98ca3f]"
                to="/shop/categories"
                style={({ isActive }) => (isActive ? { color: '#98ca3f' } : { color: '#fff' })}
              >
                Shop
              </NavLink>
            </li>
            {isAuth ? (
              <li>
                <NavLink
                  className="inline-block px-3 py-1 rounded-md text-lg text-white transition-all ease-in-out hover:text-[#98ca3f] hover:bg-[#ffffff21]"
                  to="/login"
                  onClick={logOut}
                >
                  Log Out
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    className="inline-block px-3 py-1 rounded-md text-lg text-white transition-all ease-in-out hover:text-[#98ca3f] hover:bg-[#ffffff21]"
                    to="/sign-up"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <Link
                    className="inline-block px-3 py-1 rounded-md text-lg text-white transition-all ease-in-out hover:text-[#98ca3f] hover:bg-[#ffffff21]"
                    to="/login"
                  >
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
