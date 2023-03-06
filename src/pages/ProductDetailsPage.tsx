import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';

import Header from 'components/features/header/Header';
import Footer from 'components/features/footer/Footer';
import Loader from 'components/UI/loader/Loader';

import productsApi from 'api/productsApi';
import useAppSelector from 'hooks/useAppSelector';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'styles/swiper.scss';

const ProductDetailsPage: React.FC = () => {
  const { activeProduct } = useAppSelector((state) => state.products);

  const { data, isFetching } = productsApi.useGetProductQuery(activeProduct);

  return (
    <>
      <Helmet>
        <title>Platzi Fake Store | {`${data?.title}`}</title>
        <meta name="description" content="Product page" />
      </Helmet>
      <Header />
      <section className="flex-auto py-[20px] sm:py-[50px] text-white">
        <div className="product-container flex flex-col-reverse gap-[30px] md:flex-row">
          {isFetching ? (
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <Loader />
            </div>
          ) : (
            <>
              <div className="basis-[500px] overflow-hidden min-w-0">
                <Swiper
                  className="swiper-fade"
                  spaceBetween={30}
                  effect={'fade'}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[EffectFade, Navigation, Pagination]}
                >
                  {data?.images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <img
                        className="w-full h-full rounded-[5px] object-cover md:h-[350px]"
                        src={image}
                        alt="Product"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex-auto">
                <div className="max-w-[500px]">
                  <h3 className="mb-[10px] text-[30px] sm:text-[40px]">{data?.title}</h3>
                  <p className="mb-[10px] text-[#bababa]">{data?.description}</p>
                  <div className="mb-[25px]">
                    <span className="font-semibold">Category:</span> {data?.category.name}
                  </div>
                  <div className="mb-[25px] text-3xl font-semibold">${data?.price}</div>
                  <button className="inline-block rounded-[5px] px-[12px] py-[7px] text-lg bg-[#7bbd08] transition-all hover:bg-[#94c83a]">
                    Order Now
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
