"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/app/components/Modal";

const MainService = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="group relative overflow-hidden w-full cursor-pointer">
        <div onClick={openModal} className="w-full">
          <Image
            src="/ice.jpg"
            alt="ice"
            width={300}
            height={300}
            objectFit="cover"
            className="h-[300px] w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover brightness-75 group-hover:brightness-100"
          />
          <p className="absolute bottom-10 left-0 right-0 text-white text-center pt-4 text-2xl">
            მომსახურება
          </p>
        </div>
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <h1 className="text-3xl text-white">ბარმენთა ასოციაციის მომსახურება</h1>{" "}
        <div className="transform rounded-2xl bg-black p-6 text-left">
          <Image
            src="/bartender.jpg"
            alt="bartender"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="mt-4">
          <ol className="list-decimal ml-6 text-left text-white">
            <li>ბარმენების მომსახურებას</li>
            <li>ივენთის დაგეგმა</li>
            <li>სრული სერვისის დაგეგმას და განხორციელებას</li>
          </ol>
        </div>
        <div className="text-left py-2 ml-2 text-white">
          დეტალებისთვის დაგვიკავშირდით ტელ: 597 000 540
        </div>
      </Modal>
    </>
  );
};

export default MainService;
