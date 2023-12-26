import Image from "next/image";

const Main = () => {
  return (
    <body className="font-sans antialiased">
      <div className="grid grid-cols-2 gap-4">
        <div className="group relative overflow-hidden row-span-2">
          <Image
            src="/home.jpg"
            alt="main-image"
            className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-full h-[600px]"
            width={900}
            height={600}
          />
          <p className="absolute bottom-[-2rem] left-0 right-0 opacity-0 transition-transform duration-500 ease-in-out group-hover:opacity-100 transform translate-y-[50%] text-7xl group-hover:translate-y-[-50%] text-white p-2 w-48 ml-10">
            საქართველოს ბარმენთა ასოციაცია
          </p>
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="absolute top-10 left-10"
          />
        </div>
        <div className="flex flex-col grid-cols-8">
          <Image
            src="/ice-white.jpg"
            alt="ice-white"
            width={300}
            height={300}
            className="mb-4 h-[300px]"
          />
          <Image
            src="/ice.jpg"
            alt="ice"
            width={300}
            height={300}
            className="h-[300px]"
          />
        </div>
      </div>
    </body>
  );
};

export default Main;
