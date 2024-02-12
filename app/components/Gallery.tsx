// Gallery.js
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/virtual";

import GaleryImages from "./GaleryImages";

const Gallery = () => {
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
        {GaleryImages.map((GaleryImages, index) => (
          <SwiperSlide key={index}>
            <Image
              src={GaleryImages}
              alt={`Image ${index + 1}`}
              width={800}
              height={500}
              className="w-full m-auto h-[550px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Gallery;
