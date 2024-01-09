"use client";

import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const MainService = () => {
  const [isOpen, setIsOpen] = useState(false);

  //ES 6
  const closeModal = () => {
    setIsOpen(false);
  };

  // ES 5
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal} className="w-full">
        <div className="group relative overflow-hidden opacity-80 hover:opacity-100 w-full">
          <Image
            src="/ice.jpg"
            alt="ice"
            width={300}
            height={300}
            objectFit="cover"
            className="h-[290px] w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover"
          />
          <p className="absolute bottom-10 left-0 right-0 text-white text-center pt-4 text-2xl">
            მომსახურება
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
                <Dialog.Panel className="w-full max-w-[40%] bg-black opacity-80 rounded-lg">
                  <div className="flex justify-between items-center mx-4 mt-4 pb-4">
                    <Dialog.Title as="h3" className="text-lg font-medium">
                      <h1 className="text-3xl">
                        ბარმენთა ასოციაციის მომსახურება
                      </h1>
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white px-2 py-1 font-medium text-black"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
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
                    <ol className="list-decimal ml-6 text-left">
                      <li>ბარმენების მომსახურებას</li>
                      <li>ივენთის დაგეგმა</li>
                      <li>სრული სერვისის დაგეგმას და განხორციელებას</li>
                    </ol>
                  </div>
                  <div className="text-left py-2 ml-2">
                    დეტალებისთვის დაგვიკავშირდით ტელ: 597 000 540
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MainService;
