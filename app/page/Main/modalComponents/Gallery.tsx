import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/virtual";

const Gallery = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <>
      {/* <div className="text-center">
        <div className="text-3xl mt-6">ფოტო</div>
        <div className="text-3xl mt-6">ვიდეო</div>
      </div> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="">
          <Image
            src="/bar-16.jpg"
            alt="bar"
            width={100}
            height={100}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-17.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-21.jpg"
            alt="logo"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-22.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-23.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-2.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-3.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-4.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-5.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-6.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-8.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-9.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-10.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-11.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-12.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-13.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-14.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/bar-15.jpg"
            alt="main-image"
            width={300}
            height={300}
            className="w-full m-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Gallery;
