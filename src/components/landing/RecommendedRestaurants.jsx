// import React from "react";
import { RecommendedRestaurantCard } from "../layout/RecommendedRestaurantsCard";

// Single Restaurant Card Component
// function RestaurantCard({ image, name, description, price, rating }) {
//   return (
//     <div className="relative flex flex-col items-center">
//       {/* Circular Image with Gradient Border */}
//       <div className="relative z-10 mb-[-60px]">
//         <svg
//           width="250"
//           height="250"
//           viewBox="0 0 250 250"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient
//               id={`borderGradient-${name}-${price}`}
//               x1="131.787"
//               y1="144.132"
//               x2="131.787"
//               y2="280.047"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#F54748" stopOpacity="0" />
//               <stop offset="1" stopColor="#FDC55E" />
//             </linearGradient>
//             <clipPath id={`circleClip-${name}-${price}`}>
//               <circle
//                 cx="125.035"
//                 cy="124.965"
//                 r="116.153"
//                 transform="rotate(178.687 125.035 124.965)"
//               />
//             </clipPath>
//           </defs>
//           <circle
//             cx="125.035"
//             cy="120.965"
//             r="116.153"
//             transform="rotate(178.687 125.035 124.965)"
//             stroke={`url(#borderGradient-${name}-${price})`}
//             strokeWidth="16"
//           />
//           <image
//             href={image}
//             x="24.882"
//             y="30.882"
//             width="232.306"
//             height="232.306"
//             clipPath={`url(#circleClip-${name}-${price})`}
//           />
//         </svg>

//         {/* Price Badge */}
//         <div className="absolute bottom-2 right-2">
//           <svg
//             width="60"
//             height="60"
//             viewBox="0 0 60 60"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               cx="29.999"
//               cy="29.9997"
//               r="28"
//               fill="#FDC55E"
//               stroke="white"
//               strokeWidth="4"
//             />
//           </svg>
//           <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
//             ${price}
//           </span>
//         </div>
//       </div>

//       {/* Card Container */}
//       <div className="relative bg-gradient-to-b from-orange-100 via-teal-50 to-teal-100 rounded-3xl shadow-lg pt-20 pb-6 px-6">
//         {/* Reviewer Profiles & Rating */}
//         <div className="flex items-center justify-center gap-2 mb-3">
//           <div className="flex -space-x-2">
//             <img
//               src="/images/user-profiles.png"
//               alt="Reviewer"
//               className="w-8 h-8 rounded-full border-2 border-white object-cover"
//             />
//             <img
//               src="/images/user-profiles.png"
//               alt="Reviewer"
//               className="w-8 h-8 rounded-full border-2 border-white object-cover"
//             />
//             <img
//               src="/images/user-profiles.png"
//               alt="Reviewer"
//               className="w-8 h-8 rounded-full border-2 border-white object-cover"
//             />
//           </div>
//           <div className="flex items-center gap-1">
//             <span className="text-yellow-500 text-xl">★</span>
//             <span className="text-gray-700 font-medium text-sm">
//               ({rating})
//             </span>
//           </div>
//         </div>

//         {/* Restaurant Name */}
//         <h4 className="text-center text-3xl font-bold text-orange-400 mb-2">
//           {name}
//         </h4>

//         {/* Description */}
//         <p className="text-center text-gray-600 text-sm mb-6">{description}</p>

//         {/* Order Button */}
//         <div className="flex justify-center">
//           <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-md">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// Main Component
export default function RecommendedRestaurants() {
  const restaurants = [
    {
      id: 1,
      image: "/images/Restaurant1.svg",
      name: "Kebab",
      description: "Will contain a description of the menu",
      price: 10,
      rating: 4.5,
    },
    {
      id: 2,
      image: "/images/Restaurant1.svg",
      name: "Pizza",
      description: "Will contain a description of the menu",
      price: 12,
      rating: 4.5,
    },
    {
      id: 3,
      image: "/images/Restaurant1.svg",
      name: "Burger",
      description: "Will contain a description of the menu",
      price: 8,
      rating: 4.5,
    },
    {
      id: 4,
      image: "/images/Restaurant1.svg",
      name: "Sushi",
      description: "Will contain a description of the menu",
      price: 15,
      rating: 4.5,
    },
    {
      id: 5,
      image: "/images/Restaurant1.svg",
      name: "Pasta",
      description: "Will contain a description of the menu",
      price: 11,
      rating: 4.5,
    },
    {
      id: 6,
      image: "/images/Restaurant1.svg",
      name: "Tacos",
      description: "Will contain a description of the menu",
      price: 9,
      rating: 4.5,
    },
  ];

  return (
    <div  className="p-4 ">
      <div className=" max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gray-800">
            Recommended
            <br />
            Categories of{" "}
          </span>
          <span className="text-yellow-400">Restaurants</span>
        </h1>

        {/* Restaurant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {restaurants.map((restaurant) => (
            <RecommendedRestaurantCard
              key={restaurant.id}
              image={restaurant.image}
              name={restaurant.name}
              description={restaurant.description}
              price={restaurant.price}
              rating={restaurant.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}