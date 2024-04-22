import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-black flex items-center justify-center">
      <p className="text-white cursor-pointer" onClick={openModal}>
        კონტაქტი
      </p>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <Link
        className="text-white"
        href="https://www.facebook.com/georgianbartenders.associattion"
      >
        <Image
          src={"/facebook.png"}
          alt={`facebook icon`}
          width={20}
          height={20}
          className="h-8 w-8 object-contain mb-4 mt-4 ml-8 cursor-pointer"
        />
      </Link>
      <Link
        className="text-white"
        href="https://www.instagram.com/georgianbartendersassociation/"
      >
        <Image
          src={"/instagram2.svg"}
          alt={`instagram icon`}
          width={20}
          height={20}
          className="h-8 w-8 object-contain mb-4 mt-4 ml-8 cursor-pointer"
        />
      </Link>
    </section>
  );
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-black p-8 rounded-lg">
        <p className="text-white">ტელ: 593-24-46-34</p>
        <p className="text-white mt-2">იმეილი: gbajako@gmail.com</p>
        <Link
          className="text-white"
          href="https://www.google.com/maps/place/7+%E1%83%92%E1%83%98%E1%83%92%E1%83%90+%E1%83%9A%E1%83%9D%E1%83%A0%E1%83%97%E1%83%A5%E1%83%98%E1%83%A4%E1%83%90%E1%83%9C%E1%83%98%E1%83%AB%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+T'bilisi/@41.6912278,44.7952014,17z/data=!3m1!4b1!4m5!3m4!1s0x40440cede9fbb0b7:0x8f257e2bf884ab9e!8m2!3d41.6912238!4d44.7977763?entry=ttu"
        >
          <p className="mt-2">
            მისამართი: გიგა ლორთქიფანიძის N 7 (ყოფილი ლერმონტოვის N 21)
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
