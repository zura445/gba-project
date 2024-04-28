import React, { useState } from "react";
import Image from "next/image";
import GalleryImages from "../gallery/GaleryImages";

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);

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
        <>
          <button
            type="button" // specify the type attribute
            className="text-3xl mt-6 text-white cursor-pointer"
            onClick={() => setShowGallery(false)}
            aria-label="Go Back" // provide a meaningful label for accessibility
          >
            <Image
              src={`/leftArrow1.svg`}
              alt={`tghvbjnbknj`}
              width={300}
              height={300}
              className="h-16 w-16 object-cover mb-4"
            />
          </button>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-4">
            {GalleryImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-[250px] h-[300px] md:w-full object-cover mt-2"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Gallery;
