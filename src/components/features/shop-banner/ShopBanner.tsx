import { Link } from 'react-router-dom';

const ShopBanner: React.FC = () => {
  return (
    <section className="py-[30px] sm:py-[80px] text-white bg-[#ffffff17]">
      <div className="banner-container flex flex-col-reverse items-center gap-[25px] md:flex-row md:gap-0 lg:justify-around">
        <div className="max-w-[585px]">
          <h2 className="mb-[32px] font-bold text-[28px] leading-[40px] sm:text-[28px] lg:text-[40px]">
            Get your favourites products on our shop now
          </h2>
          <Link
            className="inline-block rounded-[5px] px-[42px] py-[10px] bg-[#7bbd08] transition-all hover:bg-[#94c83a]"
            to="/shop/categories"
          >
            Visit Shop
          </Link>
        </div>
        <div>
          <img
            className="max-w-full h-[400px]"
            src="https://png.monster/wp-content/uploads/2022/09/png.monster-209.png"
            alt="IPhone"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
