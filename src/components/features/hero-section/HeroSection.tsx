import sofa from 'assets/sofa.png';

const HeroSection: React.FC = () => {
  return (
    <section className="p-[50px] bg-[#ffffff17]">
      <div className="hero-container">
        <div className="flex items-center">
          <div>
            <img className="max-w-full" src={sofa} alt="Sofa" />
          </div>
          <div className=" mb-[25px]">
            <h1 className="mb-[30px] text-white text-4xl leading-relaxed font-bold">
              Unique Features Of latest & Trending Products
            </h1>
            <ul className="mb-[30px] text-white text-lg">
              <li className="mb-[15px]">- All frames constructed with hardwood solids and laminates</li>
              <li className="mb-[15px]">
                - Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
              </li>
              <li>- Arms, backs and seats are structurally reinforced</li>
            </ul>
            <div className="text-white text-2xl">B&B Italian Sofa</div>
            <div className="text-white text-2xl">$32.00</div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="flex justify-center items-center gap-[80px] text-white">
              <div className="flex-auto">
                <div className="mb-[25px] text-center font-bold text-[40px] leading-[47px]">120 k</div>
                <div className="text-xl text-center">Products Sales</div>
              </div>
              <div className="flex-auto">
                <div className="mb-[25px] text-center font-bold text-[40px] leading-[47px]">98 k</div>
                <div className="flex items-center justify-center gap-[10px]">
                  <div className="text-xl text-center">Reviews</div>
                  <div className="text-xl text-center">(4.5)</div>
                </div>
              </div>
              <div className="flex-auto">
                <div className="mb-[25px] text-center font-bold text-[40px] leading-[47px]">125</div>
                <div className="text-xl text-center">Products Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
