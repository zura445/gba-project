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

  const courseDisciplines = [
    "საქონელთმცოდნეობა",
    "ბარის მოწყობილობა–დანადგარები",
    "კოქტეილის მომზადებისა და სასმელების ტექნოლოგია",
    "ბარმენის პროფესიული უნარჩვევები",
    "სავაჭრო გამოთვლები ბარში",
    "პროფესიული ეთიკა და ფსიქოლოგია",
    "ჰიგიენა და სანიტარიის საფუძვლები.",
  ];

  return (
    <section>
      <div className="group relative overflow-hidden opacity-80 hover:opacity-100 w-full">
        <div onClick={openModal} className="w-full">
          <Image
            src="/ice-white.jpg"
            alt="ice-white"
            width={300}
            height={300}
            objectFit="cover"
            className="h-[300px] w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover"
          />
          <p className="absolute bottom-10 left-0 right-0 text-white text-center pt-4 text-2xl">
            სწავლება
          </p>
        </div>
      </div>

      <Modal closeModal={closeModal} isOpen={isOpen}>
        <p className="text-3xl">ისწავლეთ ჩვენთან ერთად</p>
        <p className="mt-3">
          საქართველოს ბარმენთა ასოციაციასთან ერთად 2002 წლის 2 ივლის ჩამოყალიბდა
          ბარმენთა პროფესიული მოსამზადებელი კურსები. სწავლის ხანგრძლივობაა 10
          კვირა. ასევე ფუნქციონირებს 3 კვირიანი გადამზადების და ცოდნის
          ასამაღლებელი მასტერ კლასები. სწავლება მიმდინარეობს საერთაშორისო
          სტანდარტების მიხედვით, რომელიც დამტკიცებულია საერთოშორისო ბარმენთა
          ასოციაციის მიერ (IBA) და ასევე საქართველოს განათლებისა და მეცნიერების
          სამინისტროს მოწოდებული პროგრამის მიხედვით. კურსები ლიცენზირებულია
          საქართველოს განათლებისა და მეცნიერების სამინისტროს მიერ. ლიცენზია
          №02341085
        </p>
        <p className="text-2xl mt-4">ისწავლება შემდეგი დისციპლინები:</p>
        <ol className="list-decimal ml-6">
          {courseDisciplines.map((discipline, index) => (
            <li key={index}>{discipline}</li>
          ))}
        </ol>
        <p className="mt-3">
          ყველა კურსდამთავრებული წევრიანდება საქართველოს ბარმენთა ასოციაციაში.
          გაიცემა საერთაშორისო სერტიფიკატი, რომელიც ძალაშია მსოფლიოს ყველა
          ქვეყანაში სადაც არსებობს ბარმენთა ასოციაცია. საქართველოს ბარმენთა
          ასოციაცია უზრუნველყოფს მისი კურსდამთავრებულების გარანტირებულ
          დასაქმებას. ასევე იგეგმება წარჩინებულ მოსწავლეთა გაცვლითი პროგრამები
          საზღვარეთ.
        </p>
        <p className="my-5 text-center">🚨🚨🚨 ყ უ რ ა დ ღ ე ბ ა 🚨🚨🚨</p>
        <p>
          მეგობრებო, გვაქვს სიახლე! სწავლის საფასურის გადახდა ასევე შესაძლებელია
          კრედიტით, ჩვენს პარტნიორ თიბისი ბანკში. ამისათვის საჭიროა მობრძანდეთ
          ასოციაციაში, მიიღოთ მიმართვა, რომელიც უნდა წარადგინოთ თიბისი ბანკში,
          რის საფუძველზეც ბანკი გასცემს სასწავლო კრედიტს,სესხს. დამატებითი
          კითხვების შემთხვევაში გთხოვთ მობრძანდეთ ასოციაციაში ან დაგვიკავშრდეთ
          ტელეფონზე. გისურვებთ წარმატებას!
        </p>
      </Modal>
    </section>
  );
};

export default MainStUdy;
