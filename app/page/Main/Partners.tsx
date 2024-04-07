import React from "react";
import categoriesData from "../../categories.json";
import Image from "next/image";

interface Category {
  barTitle?: string;
}

const Partners = () => {
  const partnersComponent: Category = categoriesData[4];

  return (
    <section>
      <h1 className="text-3xl text-white">yretrftgyhi6tygu</h1>
    </section>
  );
};

// Export the News component
export default Partners;
