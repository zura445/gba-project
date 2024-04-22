import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-black flex items-center	justify-center">
      <div className="text-white">კონტაქტი</div>
      <Image
        src={"/facebook.png"}
        alt={`facebook icon`}
        width={300}
        height={300}
        className="h-[20px] w-[20px] object-contain mb-4 mt-4 ml-8 cursor-pointer"
      />
      <Link href="https://www.facebook.com/your-facebook-page-url" />

      <Image
        src={"/instagram.png"}
        alt={`instagram icon`}
        width={300}
        height={300}
        className="h-[30px] w-[80px] object-contain mb-4 mt-4 ml-8 cursor-pointer"
      />
    </section>
  );
};

export default Footer;
