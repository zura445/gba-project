"use client";

import Image from "next/image";
import CategoryProps from "../components/CategoryProps";

const categories = [
  { title: "სიახლეები", imageSrc: "/news-image.jpg" },
  { title: "გალერია", imageSrc: "/break-ice.jpg" },
  { title: "კოქტეილები", imageSrc: "/coctail.jpg" },
  { title: "ბარის ისტორია", imageSrc: "/bar.jpg" },
  { title: "პარტნიორები", imageSrc: "/partner.jpg" },
  { title: "ჩვენს შესახებ", imageSrc: "/our.jpg" },
];

const Category = () => {
  return (
    <>
      <section className="grid grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden opacity-80 hover:opacity-100"
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
        ))}
      </section>
    </>
  );
};

export default Category;
