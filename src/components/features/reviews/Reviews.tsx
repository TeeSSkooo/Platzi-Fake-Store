import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import Review from 'components/features/review/Review';

import 'styles/swiper.scss';

const Reviews: React.FC = () => {
  return (
    <section className="py-[120px]">
      <div className="reviews-container">
        <div className="max-w-[434px] mb-[35px] text-white">
          <h2 className="mb-[15px] text-[30px] leading-[35px]">What customers say about us</h2>
          <div className="relative pl-[76px] text-xl text-[#bababa] before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:h-[1px] before:w-[69px] before:bg-white">
            It is a long established fact that a reader will be distracted by the service.
          </div>
        </div>
        <Swiper
          className="swiper"
          slidesPerView={2}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
