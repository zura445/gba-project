"use client";

import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const MainStUdy = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section>
      <button type="button" onClick={openModal} className="w-full">
        <div className="group relative overflow-hidden opacity-80 hover:opacity-100 w-full">
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
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[50%] bg-black opacity-80 rounded-lg">
                  <div className="flex justify-between items-center mx-4 mt-4 pb-4">
                    <Dialog.Title as="h3" className="text-lg font-medium">
                      <h1 className="text-3xl">ისწავლეთ ჩვენთან ერთად</h1>
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white px-2 py-1 font-medium text-black"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                  <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-gray-100 w-full h-[500px]  transform rounded-2xl bg-black p-6 text-left">
                    <p className="mt-2">
                      საქართველოს ბარმენთა ასოციაციასთან ერთად 2002 წლის 2 ივლის
                      ჩამოყალიბდა ბარმენთა პროფესიული მოსამზადებელი კურსები.
                      სწავლის ხანგრძლივობაა 10 კვირა. ასევე ფუნქციონირებს 3
                      კვირიანი გადამზადების და ცოდნის ასამაღლებელი მასტერ
                      კლასები. სწავლება მიმდინარეობს საერთაშორისო სტანდარტების
                      მიხედვით, რომელიც დამტკიცებულია საერთოშორისო ბარმენთა
                      ასოციაციის მიერ (IBA) და ასევე საქართველოს განათლებისა და
                      მეცნიერების სამინისტროს მოწოდებული პროგრამის მიხედვით.
                      კურსები ლიცენზირებულია საქართველოს განათლებისა და
                      მეცნიერების სამინისტროს მიერ. ლიცენზია №02341085
                    </p>
                    <div className="mt-2">
                      <p className="text-2xl ">
                        ისწავლება შემდეგი დისციპლინები:
                      </p>
                      <div className="mt-2">
                        <ol className="list-decimal ml-6">
                          <li>საქონელთმცოდნეობა</li>
                          <li>ბარის მოწყობილობა–დანადგარები</li>
                          <li>
                            კოქტეილის მომზადებისა და სასმელების ტექნოლოგია
                          </li>
                          <li>ბარმენის პროფესიული უნარჩვევები</li>
                          <li>სავაჭრო გამოთვლები ბარში</li>
                          <li>პროფესიული ეთიკა და ფსიქოლოგია</li>
                          <li>ჰიგიენა და სანიტარიის საფუძვლები.</li>
                        </ol>
                      </div>
                      <div className="mt-2">
                        ყველა კურსდამთავრებული წევრიანდება საქართველოს ბარმენთა
                        ასოციაციაში. გაიცემა საერთაშორისო სერტიფიკატი, რომელიც
                        ძალაშია მსოფლიოს ყველა ქვეყანაში სადაც არსებობს ბარმენთა
                        ასოციაცია. საქართველოს ბარმენთა ასოციაცია უზრუნველყოფს
                        მისი კურსდამთავრებულების გარანტირებულ დასაქმებას. ასევე
                        იგეგმება წარჩინებულ მოსწავლეთა გაცვლითი პროგრამები
                        საზღვარეთ.
                      </div>
                      <div className="mt-2">
                        <div>🚨🚨🚨 ყ უ რ ა დ ღ ე ბ ა 🚨🚨🚨 </div>
                        <div className="mt-2">
                          მეგობრებო, გვაქვს სიახლე! სწავლის საფასურის გადახდა
                          ასევე შესაძლებელია კრედიტით, ჩვენს პარტნიორ თიბისი
                          ბანკში. ამისათვის საჭიროა მობრძანდეთ ასოციაციაში,
                          მიიღოთ მიმართვა, რომელიც უნდა წარადგინოთ თიბისი
                          ბანკში, რის საფუძველზეც ბანკი გასცემს სასწავლო
                          კრედიტს,სესხს. დამატებითი კითხვების შემთხვევაში გთხოვთ
                          მობრძანდეთ ასოციაციაში ან დაგვიკავშრდეთ ტელეფონზე.
                          გისურვებთ წარმატებას!
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default MainStUdy;
