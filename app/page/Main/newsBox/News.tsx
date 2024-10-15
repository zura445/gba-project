import React from "react";
import rawNewsData from "./New.json";
import Image from "next/image";

interface NewsItem {
  title: string;
  details?: string;
  topic1: string;
  topic2?: string;
  topic3: string;
  topic4?: string;
  topic5?: string;
  topic6?: string;
  topic7?: string;
  topic8?: string;
  image?: string;
}

const newsData = rawNewsData as NewsItem[];

const News: React.FC = () => {
  return (
    <>
      {newsData.map((item, index) => (
        <section key={index} className="mb-20 text-white">
          <h1 className="text-3xl">{item.title}</h1>
          {item.details && <p className="mt-6">{item.details}</p>}
          <ul
            role="list"
            className="marker:text-red-700 list-disc pl-5 space-y-3 mt-4"
          >
            {item.topic1 && <li>{item.topic1}</li>}
            {item.topic2 && <li>{item.topic2}</li>}
            {item.topic3 && <li>{item.topic3}</li>}
            {item.topic4 && <li>{item.topic4}</li>}
            {item.topic5 && <li>{item.topic5}</li>}
            {item.topic6 && <li>{item.topic6}</li>}
            {item.topic7 && <li>{item.topic7}</li>}
            {item.topic8 && (
              <li>
                <a
                  href="https://www.facebook.com/kacper.smarz?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {item.topic8}
                </a>
              </li>
            )}
          </ul>
          {item.image && (
            <Image
              src={`/${item.image}`}
              alt=""
              width={600}
              height={400}
              className="h-[400px] w-[600px] object-contain mt-4"
            />
          )}
        </section>
      ))}
    </>
  );
};

export default News;

// import React from "react";
// import newsData from "./new.json";
// import categoriesData from "../../../categories.json";
// import Image from "next/image";

// interface Category {
//   modalTitle?: string;
//   modalDescription?: string;
//   modalSteoOne?: string;
//   modalStepTwo?: string;
//   modalStepThree?: string;
// }

// interface NewsItem {
//   title: string;
//   details: string;
//   topic1: string;
//   topic2: string;
//   topic3: string;
//   image?: string;
// }

// const News = () => {
//   if (categoriesData.length === 0) {
//     return null;
//   }

//   return (
//     <>
//       <section>
//         <h1 className="text-3xl text-white">{newsTitle}</h1>
//         <p className="mt-6 text-white">დეტალები:</p>
//         <ul
//           role="list"
//           className="marker:text-red-700 list-disc pl-5 space-y-3 mt-4"
//         >
//           <li className="text-white">
//             2024 წლის 31 ოქტომბრიდან 4 ნოემბრის ჩათვლით, პორტუგალიაში კუნძულ
//             მადეირაზე ჩატარდება მსოფლიო ჩემპიონატი კლასიკასა და ფლაერინგში
//           </li>
//           <li className="text-white">
//             2. 2024 წლის დეკემბერში ჩატარდება საქართველოს ჩემპიონატში კლასიკასა
//             და ფლაერინგში
//           </li>
//           <li className="text-white">
//             3. 2024 წლის ევროპის ჩემპიონატი არ ჩატარდება
//           </li>
//         </ul>
//       </section>
//       <section className="mt-20">
//         <h1 className="text-3xl text-white">
//           დაესწარი Kacper Smarz ის ექსკლუზიურ, 5 დღიან ფლაირინგის კურსს!🍸✨
//         </h1>
//         <ul
//           role="list"
//           className="marker:text-red-700 list-disc pl-5 space-y-3 mt-4"
//         >
//           <li className="text-white">
//             🔥 არ გაუშვა უნიკალური შანსი დაესწრო მსოფლიოს და ევროპის მოქედი
//             ჩემპიონის, Kacper Smarz ის ექსკლუზიურ, 5 დღიან ფლაირინგის კურსს!🍸✨
//           </li>
//           <li className="text-white">📅 9-13 სექტემბერი</li>
//           <li className="text-white">📍 მდებარეობა: ქუთაისი</li>
//           <li className="text-white">
//             კურსის შემეგ გაიცემა საერთასორისო სერთიფიკატი! 🎉
//           </li>
//           <li className="text-white">
//             იჩქარეთ, ადგილები შეზღუდულია! დარეგისტრირდი ახლავე! 💥
//           </li>
//           <li className="text-white">📞 რეგისტრაცია: 598 181 316</li>
//           <a
//             target="blank"
//             href="https://www.facebook.com/kacper.smarz?mibextid=LQQJ4d"
//           >
//             <li className="mt-2 text-blue-700">
//               Kacper Smarz - ის ფეისბუქ გვერდი
//             </li>
//           </a>
//         </ul>
//         <Image
//           src={"/kacper.jpg"}
//           alt=""
//           width={300}
//           height={300}
//           className="h-[400px] w-[600px] object-contain mt-4 items-center"
//         />
//       </section>
//       <section className="mt-20">
//         <h1 className="text-3xl text-white">
//           გახდი საუკეთესო ბარმენი საქართველოში
//         </h1>
//         <Image
//           src={"/news.jpg"}
//           alt=""
//           width={300}
//           height={300}
//           className="h-[400px] w-[600px] object-contain mt-4 items-center"
//         />
//       </section>
//     </>
//   );
// };

// // Export the News component
// export default News;
