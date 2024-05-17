import React, { useState } from "react";
import Image from "next/image";
import GalleryImages from "../gallery/GaleryImages";
import Modal from "react-modal";

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
        <div>
          <button
            type="button"
            className="absolute top-4 right-4 text-white"
            onClick={closeModal}
            aria-label="Close Modal"
          >
            Close
          </button>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Enlarged Image"
              width={800}
              height={500}
              className="object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            />
          )}
        </div>
      )}

      {showGallery && (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-4 -z-1">
          {GalleryImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <button onClick={() => openModal(image)}>
                ytgjbhj
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
      )}
    </>
  );
};

export default Gallery;
