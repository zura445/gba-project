import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full m-auto flex items-center justify-center h-screen">
      <body className="font-sans antialiased">
        <div className="group relative overflow-hidden">
          <Image
            src="/home.jpg"
            alt="main-image"
            className="w-full h-auto"
            width={900}
            height={600}
          />
          <p className="absolute bottom-[-2rem] left-0 right-0 opacity-0 transition-transform duration-300 ease-in-out group-hover:opacity-100 transform translate-y-[50%] text-7xl group-hover:translate-y-[-200%] text-white p-2">
            საქართველოს ბარმენთა ასოციაცია
          </p>
        </div>
      </body>
    </div>
  );
};

export default Main;
