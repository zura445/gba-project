// CategoryItem.tsx
import React, { useState } from "react";
import ProductComponentsDesc from "./ProductComponentsDesc";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import PhotoVideo from "./gallery/Gallery";
import Cocktail from "./cocktail/Cocktail";
import News from "./newsBox/News";
import BarHistory from "./BarHistory";
import Partners from "../Main/partners/Partners";
import AboutUs from "./AboutUs";

type CategoryItemProps = {
  category: ProductComponentsDesc;
  index: number;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalKey, setModalKey] = useState<string>("newsComponent");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (modalComponent: any) => {
    setModalKey(modalComponent);
    setIsOpen(true);
  };

  return (
    <>
      <div
        className="group relative overflow-hidden cursor-pointer"
        onClick={() => openModal(category.modalComponent)}
      >
        <Image
          src={category.imageSrc}
          alt={`main-image-${index}`}
          width={300}
          height={300}
          className="w-full h-[350px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover group-hover:brightness-100 brightness-75"
        />
        <p className="absolute bottom-10 left-0 right-0 text-white text-center pt-4 text-2xl">
          {category.title}
        </p>
      </div>

      <Modal closeModal={closeModal} isOpen={isOpen}>
        <SubComponent modalKey={modalKey} />
      </Modal>
    </>
  );
};

//როცა ახალ ფაილს შევქმნი აქაც უნდა ჩავამატო

const SubComponent = ({ modalKey }: string | any) => {
  switch (modalKey) {
    case "newsComponent":
      return <News />;
    case "PhotoVideoComponent":
      return <PhotoVideo />;
    case "cocktailComponent":
      return <Cocktail />;
    case "historyComponent":
      return <BarHistory />;
    case "partnersComponent":
      return <Partners />;
    case "aboutUsComponent":
      return <AboutUs />;

    default:
      return <></>;
  }
};

export default CategoryItem;
