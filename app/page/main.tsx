import Image from "next/image";

const Main = () => {
  return (
    <div className="flex">
      {/* Left column with the large image */}
      <div className="w-70 opacity-80 hover:opacity-100">
        <div className="group relative overflow-hidden">
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
      </div>

      {/* Right column with two images and text */}
      <div className="w-[40%]">
        <div className="group relative overflow-hidden opacity-80 hover:opacity-100">
          <Image
            src="/ice-white.jpg"
            alt="ice-white"
            width={300}
            height={300}
            objectFit="cover"
            className="h-[300px] w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover"
          />
          <p className="absolute bottom-10 left-0 right-0 text-white text-center pt-4 text-2xl">
            სწავლება
          </p>
        </div>
        <div className="group relative overflow-hidden opacity-80 hover:opacity-100">
          <Image
            src="/ice.jpg"
            alt="ice"
            width={300}
            height={300}
            objectFit="cover"
            className="h-[300px] w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover"
          />
          <p className="absolute bottom-10 left-0 right-0 text-white text-center pt-4 text-2xl">
            მომსახურება
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
