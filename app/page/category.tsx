"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "../components/Modal";

type Category = {
  title: string;
  imageSrc: string;
  key: number;
  route?: string;
}[];

const categories: Category = [
  {
    key: 1,
    title: "სიახლეები",
    imageSrc: "/news-image.jpg",
    route: "https://www.google.com",
  },
  {
    key: 2,
    title: "გალერია",
    imageSrc: "/break-ice.jpg",
    route: "https://www.google.com",
  },
  {
    key: 3,
    title: "კოქტეილები",
    imageSrc: "/coctail.jpg",
    route: "https://www.google.com",
  },
  {
    key: 4,
    title: "ბარის ისტორია",
    imageSrc: "/bar.jpg",
    route: "https://www.google.com",
  },
  {
    key: 5,
    title: "პარტნიორები",
    imageSrc: "/partner.jpg",
    route: "https://www.google.com",
  },
  {
    key: 6,
    title: "ჩვენს შესახებ",
    imageSrc: "/our.jpg",
    route: "https://www.google.com",
  },
];

const Category = () => {
  return (
    <section className="grid grid-cols-3">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} index={index} />
      ))}
    </section>
  );
};

type CategoryItemProps = {
  category: Category | any;
  index: number;
};

const CategoryItem = ({ category, index }: CategoryItemProps) => {
  return (
    <Link href={category.route}>
      <div className="group relative overflow-hidden opacity-80 hover:opacity-100">
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
    </Link>
  );
};

export default Category;
