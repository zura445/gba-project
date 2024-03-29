// CategoryMain.tsx
import React from "react";
import CategoryItem from "./CategoryItem";
import categories from "../../categories.json";

const CategoryMain: React.FC = () => {
  return (
    <section className="grid md:grid-cols-3 grid-cols-1">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} index={index} />
      ))}
    </section>
  );
};

export default CategoryMain;
