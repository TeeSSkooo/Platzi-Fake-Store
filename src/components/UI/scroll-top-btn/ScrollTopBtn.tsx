import { useRef } from 'react';

const ScrollTopBtn: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', () => {
    if (btnRef.current) {
      btnRef.current.style.bottom = window.pageYOffset > 100 ? '60px' : '-100%';
    }
  });

  return (
    <button
      onClick={handleClick}
      className="fixed right-[15px] w-[45px] h-[45px] grid place-items-center rounded-[50%] bg-[#007aff] transition-all duration-200 md:w-[60px] md:h-[60px]"
      ref={btnRef}
    >
      <svg
        className="w-[25px] h-[25px]"
        fill="#fff"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"></path>
        </g>
      </svg>
    </button>
  );
};

export default ScrollTopBtn;
