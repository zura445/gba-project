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
