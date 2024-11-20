import React, { useState, useRef } from "react";
import Image from "next/image";
import GalleryImages from "./GaleryImages";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Gallery.css";
import { log } from "console";

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mediaType, setMediaType] = useState<"photo" | "video" | "">("");
  const carouselRef = useRef<CarouselRef>(null);

  const selectMediaType = (type: "photo" | "video") => {
    setMediaType(type);
    if (type === "photo") {
      setShowGallery(true);
    }
  };

  const openImageInCarousel = (index: number) => {
    setSelectedIndex(index);
    setShowCarousel(true);
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
    }
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  const closeGallery = () => {
    setShowGallery(false);
    setShowCarousel(false);
    setMediaType("");
  };

  if (mediaType === "") {
    return (
      <div className=" flex flex-col justify-center items-center h-[500px]">
        <button
          className="w-[50%] py-4 bg-gray-700 text-white rounded block"
          onClick={() => selectMediaType("photo")}
        >
          ფოტო
        </button>
        <button
          className="w-[50%] py-4 mt-5 bg-gray-700 text-white rounded"
          onClick={() => selectMediaType("video")}
        >
          ვიდეო
        </button>
      </div>
    );
  }

  if (mediaType === "video") {
    return (
      <div className="mt-10">
        <iframe
          className="m-auto w-full h-[250px] sm:h-[360px] md:h-[450px] lg:h-[500px]"
          src="https://www.youtube.com/embed/jpHTvW0FGig?si=LSv8HPsOc0WPE8eo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div className="relative text-white">
      {showGallery && !showCarousel ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-4 -z-1">
          {GalleryImages.map((image, index) => (
            <div key={index} className="flex justify-center w-full">
              <button
                onClick={() => openImageInCarousel(index)}
                aria-label={`Open image ${index + 1} in carousel`}
                className="w-full"
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-48 md:w-full object-cover mt-2"
                />
              </button>
            </div>
          ))}
        </div>
      ) : showCarousel ? (
        <div className="relative">
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
                  className="w-full h-[550px] md:w-full object-contain mt-2"
                />
              </div>
            ))}
          </Carousel>

          {/* Close button for the carousel */}
          <button
            className="fixed top-4 right-4 text-3xl text-white z-[9999] bg-black px-2 close-button"
            onClick={closeCarousel}
            title="Close"
            style={{ position: "fixed", zIndex: 9999 }}
          >
            X
          </button>
        </div>
      ) : null}

      {/* Close button for the gallery */}
      {showGallery && (
        <button
          className="fixed top-4 right-4 text-3xl text-white z-[9999] bg-black px-2 close-button"
          onClick={closeGallery}
          title="Close"
          style={{ position: "fixed", zIndex: 9999 }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Gallery;
