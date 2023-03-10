import React from 'react';
import { Link } from 'react-router-dom';

import phone from 'assets/phone.svg';
import mail from 'assets/mail.svg';
import facebook from 'assets/facebook.svg';
import instagram from 'assets/instagram.svg';
import twitter from 'assets/twitter.svg';
import linkedIn from 'assets/linked in.svg';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert('* Sending handler *');
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    alert('* Download handler *');
  };

  return (
    <footer className={styles.footer}>
      <div className={`footer-container ${styles.footerContainer}`}>
        <div className={styles.item}>
          <h3 className="mb-[30px] uppercase font-bold text-[24px] text-center leading-[41px] md:text-[35px]">sq r3</h3>
          <div className="mb-[11px] flex items-center justify-center gap-[10px]">
            <div className="w-[32px] h-[32px] rounded-[50%] grid place-content-center bg-white">
              <img src={phone} alt="Phone" />
            </div>
            <a className="text-sm underline sm:text-base" href="tel:+8801760007083">
              +8801760-007083
            </a>
          </div>
          <div className="mb-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[32px] h-[32px] rounded-[50%] grid place-content-center bg-white">
              <img src={mail} alt="Mail" />
            </div>
            <a className="text-sm underline sm:text-base" href="mailto:uiuxmdomith@gmail.com">
              uiuxmdomith@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-5">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className={styles.item}>
          <h3 className="mb-[30px] text-center font-medium text-xl">Usefull Links</h3>
          <Link className="block mb-[16px] text-center text-base" to="/">
            Home
          </Link>
          <Link className="block text-center text-base" to="/shop/categories">
            Shop
          </Link>
        </div>
        <div className={styles.item}>
          <h3 className="mb-[30px] font-medium text-center text-xl">Newsletter</h3>
          <form className="mb-[30px] flex items-center justify-center gap-[10px]" onSubmit={handleSubmit}>
            <input
              className="w-[171px] h-[40px] p-[12px] rounded-[5px] border-2 text-black transition-all focus:border-[#94c83a]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="min-h-[40px] px-[12px] rounded-[5px] bg-[#7bbd08] transition-all hover:bg-[#94c83a]">
              Send
            </button>
          </form>
          <div className="flex justify-center items-center">
            <a
              className=" px-[27px] py-[9px] rounded-[5px] text-base font-bold bg-[#7bbd08] transition-all hover:bg-[#94c83a]"
              href="/"
              onClick={handleClick}
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
