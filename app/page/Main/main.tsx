"use client";

import Image from "next/image";
import MainStudy from "./MainStudy";
import MainService from "./MainService";

const Main = () => {
  return (
    <article className="flex">
      <section className="w-70 opacity-80 hover:opacity-100">
        <div className="group relative overflow-hidden">
          <Image
            src="/home.jpg"
            alt="main-image"
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-[1400px] h-[600px]"
            width={900}
            height={600}
          />
          <p className="absolute bottom-[-2rem] left-0 right-0 opacity-0 transition-transform duration-500 ease-in-out group-hover:opacity-100 transform translate-y-[50%] text-7xl group-hover:translate-y-[-50%] text-white p-2 w-48 ml-10">
            საქართველოს ბარმენთა ასოციაცია
          </p>
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="absolute top-10 left-10"
          />
        </div>
      </section>

      <section className="w-[40%]">
        <MainStudy />
        <MainService />
      </section>
    </article>
  );
};

export default Main;
