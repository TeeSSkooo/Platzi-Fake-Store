import truck from 'assets/truck.svg';
import checkbox from 'assets/checkbox.svg';
import quality from 'assets/quality.svg';

const OurServices: React.FC = () => {
  return (
    <section className="py-[20px] sm:py-[30px]">
      <div className="services-container">
        <div className="max-w-[434px] mb-[35px] text-white">
          <h2 className="mb-[15px] text-[24px] leading-[35px] sm:text-[30px]">We provide that service</h2>
          <div className="relative pl-[76px] text-base text-[#bababa] sm:text-xl before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:h-[1px] before:w-[69px] before:bg-white">
            It is a long established fact that a reader will be distracted by the service.
          </div>
        </div>
        <div className="grid grid-col-1 gap-[30px] md:grid-cols-3">
          <div className="p-[12px] border rounded-[5px] border-[#98ca3f] text-white">
            <div className="w-[75px] h-[75px] mb-[15px] rounded-[5px] grid place-items-center bg-[#e8f8fc]">
              <img src={truck} alt="Free Delevary" />
            </div>
            <h3 className="mb-[10px] text-xl font-semibold">Free Delivery</h3>
            <div className="text-base text-[#bababa] md:text-xl">
              It is a long established fact that a reader will be the service.
            </div>
          </div>
          <div className="p-[12px] border rounded-[5px] border-[#98ca3f] text-white">
            <div className="w-[75px] h-[75px] mb-[15px] rounded-[5px] grid place-items-center bg-[#fceaf1]">
              <img src={checkbox} alt="100% Guarnatee" />
            </div>
            <h3 className="mb-[10px] text-xl font-semibold">100% Guarnatee</h3>
            <div className="text-base text-[#bababa] md:text-xl">
              It is a long established fact that a reader will be the service.
            </div>
          </div>
          <div className="p-[12px] border rounded-[5px] border-[#98ca3f] text-white">
            <div className="w-[75px] h-[75px] mb-[15px] rounded-[5px] grid place-items-center bg-[#e5e6fc]">
              <img src={quality} alt="Best Quality" />
            </div>
            <h3 className="mb-[10px] text-xl font-semibold">Best Quality</h3>
            <div className="text-base text-[#bababa] md:text-xl">
              It is a long established fact that a reader will be the service.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
