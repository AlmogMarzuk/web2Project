// import React, { useState } from "react";
// import {
//   AiOutlineMenu,
//   AiOutlineSearch,
//   AiOutlineClose,
// } from "react-icons/ai";
// import { BsFillCartFill } from "react-icons/bs";
// import {  FaHome, FaInfo } from "react-icons/fa";
// import {  MdAirplaneTicket } from "react-icons/md";
// import Cart from "./Cart/Cart";
// import { Link } from "react-router-dom";
// import CartItem from "./Cart/Cartv";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [cart, setCart] = useState(false);

//   return (
//     <div className="max-w mx-auto flex justify-between items-center p-4">
//       {/* Left side */}
//       <div className="flex items-center">
//         <div onClick={() => setNav(!nav)} className="cursor-pointer">
//           <AiOutlineMenu size={30} />
//         </div>
//         <h1 className="text-stone-700			 text-2xl sm:text-3xl lg:text-4xl px-2">
//           TOP<span className="text-blue-600	 font-bold">Vacation</span>
//         </h1>
//         {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
//           <p className="bg-black text-white rounded-full p-2">Delivery</p>
//           <p className="p-2">Pickup</p>
//         </div> */}
//       </div>

//       {/* Search Input */}
//       <div className="bg-stone-300	text-blue-800	 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
//         <AiOutlineSearch size={25} />
//         <input
//           className="bg-transparent p-2 w-full focus:outline-none "
//           type="text"
//           placeholder="Search Your Next Vacation"
//         />
//       </div>
//       <div className=" flex items-center">
//         {/* Cart button */}
//         <button className="bg-stone-600 text-white hidden md:flex items-right py-2 rounded-2xl w-20 mr-2">
//           <span className="mr-2 ml-4 ">
//             <Link to="authform">Log In</Link>
//           </span>
//         </button>
//         <button
//           className="bg-blue-600 text-white hidden md:flex items-right py-2 rounded-2xl w-20"
//           onClick={() => setCart(!cart)}
//         >
//           <BsFillCartFill size={20} className="ml-2 mr-2" /> Cart
//         </button>
//         <Cart />
//       </div>
      

     
//       {nav ? (
//         <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
//       ) : (
//         ""
//       )}

//       {/* Side drawer menu */}
//       <div
//         className={
//           nav
//             ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
//             : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "
//         }
//       >
//         <AiOutlineClose
//           onClick={() => setNav(!nav)}
//           size={30}
//           className="absolute right-4 top-4 cursor-pointer"
//         />
//         <h2 className="text-2xl p-4 text-stone-700">
//           TOP<span className="font-bold text-blue-600">Vacation</span>
//         </h2>
//         <nav className=" ">
//           <ul className="flex flex-col p-4 text-gray-800 ">
//             <li onClick={() => setNav(!nav)} className="text-xl py-4 flex">
//               <FaHome size={25} className="mr-4" /> <Link to="/">Home</Link>
//             </li>
//             <li onClick={() => setNav(!nav)} className="text-xl py-4 flex">
//               <FaInfo size={25} className="mr-4" />{" "}
//               <Link to="/About">About Vaction</Link>
//             </li>
//             <li onClick={() => setNav(!nav)} className="text-xl py-4 flex">
//               <MdAirplaneTicket size={25} className="mr-4" />{" "}
//               <Link to="/flights">Flights</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div
//         className={
//           cart
//             ? "fixed top-0 right-0 w-[450px] h-full bg-white z-10 duration-300 "
//             : "fixed top-0 left-[-100%] w-[300px] h-full bg-white z-10 duration-300"
//         }
//       >
//         <AiOutlineClose
//           onClick={() => setCart(!cart)}
//           size={30}
//           className=" absolute right-4 top-4 cursor-pointer"
//         />
//         <h2 className="text-2xl p-4 text-stone-700">
//           <span className="font-bold text-blue-600">Cart</span>
//         </h2>
//         <nav className="">
//           <div className="flex flex-col max-w-3xl p-6  sm:p-10">
//             <ul className="flex flex-col divide-y divide-gray-700">
//               <CartItem />
//               <CartItem />

//               <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
//                 <div className="flex w-full space-x-2 sm:space-x-4">
//                   <img
//                     className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
//                     src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//                     alt="New York"
//                   />
//                   <div className="flex flex-col justify-between w-full pb-4">
//                     <div className="flex justify-between w-full pb-2 space-x-2">
//                       <div className="space-y-1">
//                         <h3 className="text-lg font-semibold leading-snug sm:pr-8">
//                          Manhattan
//                         </h3>
//                         <p className="text-sm dark:text-gray-400">1-9/8/2024</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-lg font-semibold">600.95€</p>
//                         <p className="text-sm line-through dark:text-gray-600">
//                           850€
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex text-sm divide-x">
//                       <button
//                         type="button"
//                         className="flex items-center px-2 py-1 pl-0 space-x-1"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 512 512"
//                           className="w-4 h-4 fill-current"
//                         >
//                           <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
//                           <rect width="32" height="200" x="168" y="216"></rect>
//                           <rect width="32" height="200" x="240" y="216"></rect>
//                           <rect width="32" height="200" x="312" y="216"></rect>
//                           <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
//                         </svg>
//                         <span>Remove</span>
//                       </button>
//                       <button
//                         type="button"
//                         className="flex items-center px-2 py-1 space-x-1"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 512 512"
//                           className="w-4 h-4 fill-current"
//                         >
//                           <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
//                         </svg>
//                         <span>Add to favorites</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//             <div className="space-y-1 text-right">
//               <p>
//                 Total amount:
//                 <span className="font-semibold">1010.94 €</span>
//               </p>
//               {/* <p className="text-sm dark:text-gray-400">
//                 Not including taxes and shipping costs
//               </p> */}
//             </div>
//             <div className="flex justify-end space-x-4">
//               <button
//                 type="button"
//                 className="px-6 py-2 border rounded-md bg-stone-600 text-white"
//               >
//                 Back
//                 <span className="sr-only sm:not-sr-only">to shop</span>
//               </button>
//               <button
//                 type="button"
//                 className="px-6 py-2 border rounded-md bg-blue-600 text-white"
//               >
//                 <span className="sr-only sm:not-sr-only">Continue to</span>
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
