// CategoryItem.tsx
import React, { useState } from "react";
import News from "./CategoryModal";
import ProductComponentsDesc from "./ProductComponentsDesc";
import Image from "next/image";
import newsComponent from "../newsComponent";

// ბოდის ვიზუალი

type CategoryItemProps = {
  category: ProductComponentsDesc;
  index: number;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  type ComponentsType = {
    [key: string]: React.FC<{}>;
  };

  const Components: ComponentsType = {
    newsComponent: newsComponent,
  };

  return (
    <>
      <div
        className="group relative overflow-hidden opacity-80 hover:opacity-100 cursor-pointer"
        onClick={openModal}
      >
        <Image
          src={category.imageSrc}
          alt={`main-image-${index}`}
          width={300}
          height={300}
          className="w-full h-[350px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover"
        />
        <p className="absolute bottom-10 left-0 right-0 text-white text-center pt-4 text-2xl">
          {category.title}
        </p>
      </div>
      <News closeModal={closeModal} isOpen={isOpen} category={category}>
        {React.createElement(
          Components[category.modalComponent || "newsComponent"],
          { key: index }
        )}
      </News>
    </>
  );
};

export default CategoryItem;
