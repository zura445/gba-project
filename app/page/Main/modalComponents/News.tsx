import React from "react";
import categoriesData from "../../../categories.json";
interface Category {
  modalTitle?: string;
  modalDescription?: string;
  modalSteoOne?: string;
  modalStepTwo?: string;
  modalStepThree?: string;
}

const News = () => {
  if (categoriesData.length === 0) {
    return null;
  }

  const firstCategory: Category = categoriesData[0];

  return (
    <section>
      <h1 className="text-3xl text-white">{firstCategory.modalTitle}</h1>
      <p className="mt-6 text-white">{firstCategory.modalDescription}</p>
      <ul
        role="list"
        className="marker:text-red-700 list-disc pl-5 space-y-3 mt-4"
      >
        <li className="text-white">{firstCategory.modalSteoOne}</li>
        <li className="text-white">{firstCategory.modalStepTwo}</li>
        <li className="text-white">{firstCategory.modalStepThree}</li>
      </ul>
    </section>
  );
};

// Export the News component
export default News;
