import React from "react";
import Image from "next/image";

const partnersListData = [
  {
    partnersTitle: "საქართველოს ბარმენთა ასოციაციის პარტნიორები",
    imageGagra: "gagra.png",
    gagraAlt: "image-gagra",
    descName: "გაგრა+",
  },
  {
    imageGagra: "axali-talga.jpg",
    gagraAlt: "image-axali-talga",
    descName: "ახალი ტალღა",
  },
  {
    imageGagra: "black-see.jpg",
    gagraAlt: "image-black-see",
    descName: "კოლეჯი ბლექსი",
  },

  {
    imageGagra: "image-bagrationi.jpg",
    gagraAlt: "image-nabeglavi",
    descName: "ნაბეღლავი",
  },
];
interface Category {
  partnersTitle?: string;
  imageGagra?: string;
  gagraAlt?: string;
  descName?: string;
}

const Partners = () => {
  const partnersList: Category[] = partnersListData;

  console.log(partnersListData);

  if (partnersList.length === 0) {
    return null;
  }

  return (
    <section>
      <h1 className="text-3xl text-white">
        {(partnersList[0] as Category).partnersTitle}
      </h1>
      <div className="flex justify-between mt-4 flex-wrap">
        {partnersList.map((partner, index) => (
          <div key={index} className="">
            <Image
              src={`/${partner.imageGagra}`}
              alt={`${partner.gagraAlt}`}
              width={200}
              height={200}
              className="h-[200px] w-[200px] object-cover mb-4"
            />
            <p className="text-white">{partner.descName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
