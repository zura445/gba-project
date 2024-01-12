"use client";

import Category from "./page/category";
import Main from "./page/Main/main";
import News from "./page/Main/News";

// მთავარი გვერდი

export default function Home() {
  return (
    <>
      <Main />
      <Category />
      <News />
    </>
  );
}
