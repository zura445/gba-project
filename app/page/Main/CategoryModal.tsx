// News.tsx
import React, { Children } from "react";
import Modal from "../../components/Modal";
import ProductComponentsDesc from "./ProductComponentsDesc";

type NewsProps = {
  category: ProductComponentsDesc;
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
};

//ბოდის ყველა მოდალის შიდა დიზაინი

const CategoryModal: React.FC<NewsProps> = ({
  category,
  isOpen,
  closeModal,
  children,
}) => {
  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <h1 className="text-3xl">{category.modalTitle}</h1>
      {category.modalDescription && (
        <div className="mt-4">
          <div className="list-decimal ml-6 text-left">
            <p>{category.modalDescription}</p>
          </div>
        </div>
      )}
      {children}
    </Modal>
  );
};

export default CategoryModal;
