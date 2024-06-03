import React, { useState } from "react";
import Image from "next/image";
import GalleryImages from "../gallery/GaleryImages";
import Modal from "react-modal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Modal custom styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
    setShowGallery(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowGallery(false);
  };

  return (
    <>
      {!showGallery ? (
        <div className="text-center">
          <div
            className="text-3xl mt-6 text-white cursor-pointer"
            onClick={() => setShowGallery(true)}
          >
            ფოტო
          </div>
          <div
            className="text-3xl mt-6 text-white cursor-pointer"
            onClick={() => setShowGallery(true)}
          >
            ვიდეო
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-4 -z-1">
          {GalleryImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <button onClick={() => openModal(image)}>
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-[250px] h-[300px] md:w-full object-cover mt-2"
                />
                hgvbjhjn
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          contentLabel="Selected Image"
          style={customStyles}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="flex flex-col items-center"
          >
            <button
              onClick={closeModal}
              className=" bg-white text-black rounded"
            >
              Close
            </button>
            {GalleryImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center !w-full h-full"
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-[250px] h-[300px] md:w-full object-cover mt-2"
                />
              </SwiperSlide>
            ))}
            {/* <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={500}
              className="object-cover"
            /> */}
          </Swiper>
        </Modal>
      )}
    </>
  );
};

export default Gallery;
