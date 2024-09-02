"use client";
import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import Image from "next/image";

const MainStUdy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const courseDisciplines = ["* Bartending", "* BAR MANAGEMENT", "* Barista"];

  return (
    <section>
      <div className="group relative overflow-hidden w-full cursor-pointer	">
        <div onClick={openModal} className="w-full">
          <Image
            src="/ice-white.jpg"
            alt="ice-white"
            width={300}
            height={300}
            objectFit="cover"
            className="h-[300px] w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover brightness-75 group-hover:brightness-100"
          />
          <p className="absolute bottom-10 left-0 right-0 text-white text-center pt-4 text-2xl">
            სწავლება
          </p>
        </div>
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <p className="text-3xl text-white">🍹 შენ შეგიძლია შეისწავლო</p>

        <ol className="list-decimal ml-6 text-white">
          {courseDisciplines.map((discipline, index) => (
            <li key={index}>{discipline}</li>
          ))}
        </ol>
        <div className="mt-3 text-white">
          <p>
            * ყველა ალკოჰოლური სასმლის წარმოშობა და განვითარება, IBA-ის
            სტანდარტების მიხედვით.
          </p>
          <p>
            * 🍸 მიქსოლოგია : IBA-ის 77 კლასიკური და 100 პოპულალური კოქტეილები.
          </p>
          <p>💼 პრაქტიკებს გაივლის და დასაქმდება ყველა კურსდამთავრებული!</p>
          <p>
            სერთიფიკატი გაიცემა International Bartenders Association „PRESIDENT
            " Georgio Fadda-ს მიერ.🎓
          </p>
          <p>
            ✨ჩვენთან სწავლა ნიშნავს : შესაძლებლობას - მიიღოთ მონაწილეობა
            საქართველოს,ევროპის და მსოფლიო ჩემპიონატებზე.
          </p>
          <p>🏅 ✅ კურსზე რეგისტრაცია უკვე დაიწყო!</p>
          <p>
            📩 რეგისტრაციისთვის მოგვწერეთ პირად შეტყობინებაში ან დაგვიკავშირდით
            📲 598 18 13 16
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default MainStUdy;
