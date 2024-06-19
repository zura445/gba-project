import React, { useState, useRef } from "react";
import Image from "next/image";
import GalleryImages from "../gallery/GaleryImages";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Gallery.css"; // დავამატეთ CSS ფაილის იმპორტი

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  const openImageInCarousel = (index: number) => {
    setSelectedIndex(index);
    setShowGallery(true);
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
    }
  };

  const closeCarousel = () => {
    setShowGallery(false);
  };

  return (
    <div className="text-white">
      {!showGallery ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-4 -z-1">
          {GalleryImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <button
                onClick={() => openImageInCarousel(index)}
                aria-label={`Open image ${index + 1} in carousel`}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-[250px] h-[300px] md:w-full object-cover mt-2"
                />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative">
          <button
            className="absolute top-4 right-4 text-3xl text-white z-50 bg-black px-2"
            onClick={closeCarousel}
          >
            X
          </button>
          <Carousel
            ref={carouselRef}
            initialSlide={selectedIndex}
            arrows
            infinite={false}
          >
            {GalleryImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-[250px] h-[500px] md:w-full object-cover mt-2"
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Gallery;
