import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ closeModal, isOpen, children }) => {
  return (
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
          <div className="fixed inset-0 bg-black/25 backdrop-filter backdrop-blur-lg" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full md:items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full md:max-w-[60%] max-w-[90%] h-[86%] md:h-[60%]  bg-black rounded-lg absolute">
                <button
                  type="button"
                  className="rounded-md bg-black px-2 py-2 text-white top-2 left-36 relative md:hidden"
                  onClick={closeModal}
                >
                  X
                </button>
                <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-gray-100 w-full h-[600px] transform rounded-2xl bg-black p-6 text-left">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
