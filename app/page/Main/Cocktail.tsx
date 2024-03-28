import React from "react";
import categoriesData from "../../categories.json";

interface Category {
  cocktailTitle?: string;
  cocktailQuestion?: string;
  cocktailAnsver?: string;
}

const Cocktail = () => {
  if (categoriesData.length === 2) {
    return null;
  }

  const firstCategory: Category = categoriesData[2];

  return (
    <section>
      <h1 className="text-white text-3xl font-bold">
        {firstCategory.cocktailTitle}
      </h1>
      <p className="text-white mt-4">{firstCategory.cocktailQuestion}</p>
      <p className="text-white mt-2">{firstCategory.cocktailAnsver}</p>
    </section>
  );
};

export default Cocktail;
