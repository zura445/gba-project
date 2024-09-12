import React, { Fragment, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  scrollToElementId?: string;
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  isOpen,
  children,
  scrollToElementId,
}) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && scrollToElementId && modalContentRef.current) {
      const elementToScrollTo = modalContentRef.current.querySelector(
        `#${scrollToElementId}`
      );
      if (elementToScrollTo) {
        setTimeout(() => {
          elementToScrollTo.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [isOpen, scrollToElementId]);

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
              <Dialog.Panel className="w-full md:max-w-[60%] max-w-[90%] h-[86%] md:h-[60%] bg-black rounded-lg absolute">
                <div
                  ref={modalContentRef}
                  className="overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-gray-800 max-w-full h-[600px] transform rounded-2xl bg-black p-6 text-left box-border"
                >
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
