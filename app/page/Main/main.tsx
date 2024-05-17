"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import MainStudy from "./MainStudy";
import MainService from "./MainService";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <article className="md:flex block">
      <div className="group relative overflow-hidden">
        <Image
          src="/home.jpg"
          alt="main-image"
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-[800px] lg:w-[1400px] md:h-[600px] h-[400px] object-cover brightness-75 group-hover:brightness-100"
          width={900}
          height={600}
        />
        <p className="absolute bottom-[-2rem] left-0 right-0 opacity-0 transition-transform duration-500 ease-in-out group-hover:opacity-100 transform translate-y-[50%] md:text-7xl text-4xl group-hover:translate-y-[-50%] text-white p-2 w-48 ml-10">
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

      <section className="md:w-[40%] w-[100%]">
        <MainStudy />
        <MainService />
      </section>
    </article>
  );
};

export default Main;

{
  /* <p className="absolute bottom-[-2rem] left-0 right-0 opacity-100 transform translate-y-[-50%] md:text-7xl text-5xl text-white p-2 w-48 ml-10">
  საქართველოს ბარმენთა ასოციაცია
</p>; */
}

{
  /* <p className="absolute bottom-[-2rem] left-0 right-0 opacity-0 transition-transform duration-500 ease-in-out group-hover:opacity-100 transform translate-y-[50%] md:text-7xl text-5xl group-hover:translate-y-[-50%] text-white p-2 w-48 ml-10">
საქართველოს ბარმენთა ასოციაცია
</p> */
}
