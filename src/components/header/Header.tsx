import account from 'assets/account.svg';
import cart from 'assets/shopping-cart.svg';

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="header-container min-h-[100px] flex justify-between items-center">
        <a className="flex items-center gap-2" href="/">
          <svg width="40" height="40" fill="#98ca3f" viewBox="0 0 24 24">
            <path d="M10.64 1.127L2.487 9.282a3.842 3.842 0 000 5.436l8.155 8.155a3.842 3.842 0 005.436 0l2.719-2.718-2.719-2.718-2.718 2.718L5.204 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.719L21.514 12a3.842 3.842 0 000-5.437l-5.448-5.436a3.828 3.828 0 00-5.425 0Z"></path>
          </svg>
          <span className="text-white text-3xl font-bold">Platzi Fake Store</span>
        </a>
        <nav>
          <ul className="flex items-center gap-[20px]">
            <li>
              <a href="/">
                <img src={account} alt="Account" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={cart} alt="Shopping cart" />
              </a>
            </li>
            <li>
              <a
                className="inline-block px-3 py-1 rounded-md text-lg text-white transition-all ease-in-out hover:text-[#98ca3f] hover:bg-[#ffffff21]"
                href="/"
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                className="inline-block px-3 py-1 rounded-md text-lg text-white transition-all ease-in-out hover:text-[#98ca3f] hover:bg-[#ffffff21]"
                href="/"
              >
                Log In
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
