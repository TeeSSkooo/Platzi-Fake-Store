import productsApi from 'api/productsApi';

import sofa from 'assets/sofa.png';

import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const { data } = productsApi.useGetAllCategoriesQuery(null);

  return (
    <section className="py-[20px] sm:py-[50px] bg-[#ffffff17]">
      <div className="hero-container">
        <div className={styles.inner}>
          <div>
            <img className="max-w-full" src={sofa} alt="Sofa" />
          </div>
          <div className="mb-[25px]">
            <h1 className={styles.title}>Unique Features Of latest & Trending Products</h1>
            <ul className="mb-[30px] text-white text-lg">
              <li className="mb-[15px] text-sm sm:text-base md:text-xl">
                - All frames constructed with hardwood solids and laminates
              </li>
              <li className="mb-[15px] text-sm sm:text-base md:text-xl">
                - Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
              </li>
              <li className="text-sm sm:text-base md:text-xl">- Arms, backs and seats are structurally reinforced</li>
            </ul>
            <div className="text-white text-2xl">B&B Italian Sofa</div>
            <div className="text-white text-2xl">$32.00</div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] items-center justify-between text-white sm:flex-row md:justify-center md:gap-[80px]">
          <div>
            <div className="mb-[15px] text-center font-bold text-[30px] leading-[47px]">120 k</div>
            <div className="text-lg md:text-xl text-center">Products Sales</div>
          </div>
          <div>
            <div className="mb-[15px] text-center font-bold text-[30px] leading-[47px]">98 k</div>
            <div className="flex items-center justify-center gap-[10px]">
              <div className="text-lg md:text-xl text-center">Reviews</div>
              <div className="text-lg md:text-xl text-center">(4.5)</div>
            </div>
          </div>
          <div>
            <div className="mb-[15px] text-center font-bold text-[30px] leading-[47px]">{data?.length}</div>
            <div className="text-lg md:text-xl text-center">Products Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
