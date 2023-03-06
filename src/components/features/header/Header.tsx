import { Link, NavLink } from 'react-router-dom';

import useAuth from 'hooks/useAuth';
import useAppDispatch from 'hooks/useAppDispatch';
import { removeUser } from 'store/slices/userSlice';
import { openCart } from 'store/slices/cartSlice';

import profile from 'assets/profile.svg';
import cart from 'assets/shopping-cart.svg';

import styles from './Header.module.css';

const Header: React.FC = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const logOut = () => dispatch(removeUser());

  const open = () => {
    document.body.style.overflow = 'hidden';
    dispatch(openCart());
  };

  return (
    <header className="sticky z-30 top-0 left-0 border-b bg-[#121f3d]">
      <div className={`header-container ${styles.headerContainer}`}>
        <Link className="flex items-center gap-2" to="/">
          <svg className="w-[40px] h-[40px]" fill="#98ca3f" viewBox="0 0 24 24">
            <path d="M10.64 1.127L2.487 9.282a3.842 3.842 0 000 5.436l8.155 8.155a3.842 3.842 0 005.436 0l2.719-2.718-2.719-2.718-2.718 2.718L5.204 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.719L21.514 12a3.842 3.842 0 000-5.437l-5.448-5.436a3.828 3.828 0 00-5.425 0Z"></path>
          </svg>
          <span className={`${styles.logo}`}>Platzi Fake Store</span>
        </Link>
        <div className="flex items-center gap-7">
          <nav className={styles.nav}>
            <ul className={styles.menuList}>
              {isAuth && (
                <>
                  <li>
                    <Link to="/profile">
                      <img className="mx-auto" src={profile} alt="Profile" />
                    </Link>
                  </li>
                  <li>
                    <button className="mx-auto grid place-items-center" onClick={open}>
                      <img src={cart} alt="Shopping cart" />
                    </button>
                  </li>
                </>
              )}
              <li className="text-center">
                <NavLink
                  className="text-lg transition-all ease-in-out hover:text-[#98ca3f]"
                  to="/shop/categories"
                  style={({ isActive }) => (isActive ? { color: '#98ca3f' } : { color: '#fff' })}
                >
                  Shop
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            {isAuth ? (
              <NavLink
                className="inline-block px-3 py-1 rounded-md text-lg text-white transition-all ease-in-out hover:text-[#98ca3f] hover:bg-[#ffffff21]"
                to="/login"
                onClick={logOut}
              >
                Log Out
              </NavLink>
            ) : (
              <>
                <NavLink
                  className="inline-block px-3 py-1 rounded-md text-lg text-white transition-all ease-in-out hover:text-[#98ca3f] hover:bg-[#ffffff21]"
                  to="/sign-up"
                >
                  Sign Up
                </NavLink>
                <Link
                  className="inline-block px-3 py-1 rounded-md text-lg text-white transition-all ease-in-out hover:text-[#98ca3f] hover:bg-[#ffffff21]"
                  to="/login"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
