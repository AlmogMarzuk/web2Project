// import ImageSlider from "./ImageSlider";
// import { useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// const Aboutv = () => {
//   const params = useParams();
//   const [flightdata, setFlighData] = useState({});

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/flight/" + params.id)
//       .then((response) => response.json())
//       .then((data) => {
//         setFlighData(data);
//       });
//   }, []);

//   return (
//     <div>
      
       
//       <div className="w-full h-full">
//       <ImageSlider></ImageSlider>
//         <div className="bg-stone-700 absolute  left-0 w-full  h-full" />
//         <div className=" w-full h-full absolute  flex-col justify-center text-white">
//           {" "}
//           <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
//             <p>{flightdata.category}</p>
//             <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
//               <span className="text-blue-600 text-8xl">T</span>he{" "}
//               {flightdata.name}{" "}
//             </h1>
//             <p className="max-w-[900px] drop-shadow-2xl py-2 text-xl">
//               {flightdata.info}
//               The Maldives is the ultimate paradise destination, the one we all
//               dream of visiting. Renowned for its spectacular beaches and
//               luxurious hotels, it’s a bucket list destination for a reason. In
//               the heart of the Indian Ocean, this tropical archipelago is of
//               thousands of islands, clustered into larger atolls. Most Maldives
//               travel packages start and end in the capital, Male, where you can
//               hop aboard a water plane or speedboat to head to your idyllic
//               island getaway. The Maldives resort vacation packages all but
//               guarantee an incredibly special vacation, so you just need to
//               choose: barefoot luxury, all-out glamor, family-friendly fun, or
//               another version of bliss.
//             </p>
//             <h2 className="  font-bold text-lg md:text-3xl drop-shadow-xl">
//               Top <span className="text-blue-600">5</span> Attractions
//             </h2>{" "}
//             <ul className="list-disc   ">
//               <li>Alimatha Island</li>
//               <li>Alimatha Island</li>
//               <li>Alimatha Island</li>
//               <li>Alimatha Island</li>
//               <li>Alimatha Island</li>
             
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default Aboutv;
