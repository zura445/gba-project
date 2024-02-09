import React from "react";

const News = () => {
  return (
    <section>
      <h1 className="text-3xl">საქართველოს პირველობა 2021</h1>
      <p className="mt-6">დეტალები/წესები:</p>
      <ul
        role="list"
        className="marker:text-red-700 list-disc pl-5 space-y-3 mt-4"
      >
        <li>მომზადდება მხოლოდ კლასიკური კოქტეილები</li>
        <li>
          კონკურსანტი შეფასება როგორც კოქტეილის გემოვნური თვისებებით ასევე
          მომზადების ტექნიკით
        </li>
      </ul>
    </section>
  );
};

export default News;
