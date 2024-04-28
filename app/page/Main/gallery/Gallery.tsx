// // Gallery.js
// import Image from "next/image";

// import GaleryImages from "../gallery/GaleryImages";

// const Gallery = () => {
//   return (
//     <>
//       <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-4">
//         {GaleryImages.map((image, index) => (
//           <div key={index} className="flex justify-center">
//             <Image
//               src={image}
//               alt={`Image ${index + 1}`}
//               width={800}
//               height={500}
//               className="w-[250px] h-[300px] md:w-full object-cover mt-2"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Gallery;
