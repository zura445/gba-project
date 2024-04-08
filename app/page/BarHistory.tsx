import React from "react";
import categoriesData from "../categories.json";
import Image from "next/image";

interface Category {
  barTitle?: string;
  barText?: string;
  imageBarHistory?: string;
  name?: string;
}

const BarHistory = () => {
  const barHistoryComponent: Category = categoriesData[3];

  return (
    <section>
      <h1 className="text-3xl text-white">{barHistoryComponent.barTitle}</h1>
      <p className="text-white mt-4">{barHistoryComponent.barText}</p>
      <div className="flex flex-col	items-center mt-4">
        <Image
          src={`/${barHistoryComponent.imageBarHistory}`}
          alt={`${barHistoryComponent.imageBarHistory}`}
          width={300}
          height={300}
          className="h-[500px] w-[400px] object-cover mb-4"
        />
        <p className="text-white">{barHistoryComponent.name}</p>
      </div>
    </section>
  );
};

export default BarHistory;
