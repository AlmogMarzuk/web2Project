// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

// const ImageSlider = () => {
//   const slides = [
//     {
//       url: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=80",
//       title: "Manhattan",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5JTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
//       title: "Sydney",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1566634159940-f5a66c4c80fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuaWxhJTIwcGhpbGlwcGluZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=80",
//       title: "Manila",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1603258740665-711401f368bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlaWppbmd8ZW58MHx8MHx8%3D&w=1000&q=80",
//       title: "Beijing",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className="max-w-[1800px] h-[580px] w-full m-auto py-16 px-4  relative group   ">
//       <div
//         className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//       ></div>
//       {/* Left Arrow */}
//       <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>

//       <div className="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             className="text-2xl cursor-pointer"
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
