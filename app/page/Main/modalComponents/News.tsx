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
    <>
      <section>
        <h1 className="text-3xl text-white">
          2024 წლის მსოფლიოს, ევროპის და საქართველოს ჩემპიონატები
        </h1>
        <p className="mt-6 text-white">დეტალები:</p>
        <ul
          role="list"
          className="marker:text-red-700 list-disc pl-5 space-y-3 mt-4"
        >
          <li className="text-white">
            2024 წლის 31 ოქტომბრიდან 4 ნოემბრის ჩათვლით, პორტუგალიაში კუნძულ
            მადეირაზე ჩატარდება მსოფლიო ჩემპიონატი კლასიკასა და ფლაერინგში
          </li>
          <li className="text-white">
            2. 2024 წლის დეკემბერში ჩატარდება საქართველოს ჩემპიონატში კლასიკასა
            და ფლაერინგში
          </li>
          <li className="text-white">
            3. 2024 წლის ევროპის ჩემპიონატი არ ჩატარდება
          </li>
        </ul>
      </section>
    </>
  );
};

// Export the News component
export default News;
