import React, { useState } from "react";
import PhotoVideo from "./PhotoVideo";
import Gallery from "./Gallery";

const GalleryComponent = () => {
  const [showGallery, setShowGallery] = useState(false);

  const handleClick = () => {
    setShowGallery(true);
  };

  return (
    <>{!showGallery ? <PhotoVideo onClick={handleClick} /> : <Gallery />}</>
  );
};

export default GalleryComponent;
