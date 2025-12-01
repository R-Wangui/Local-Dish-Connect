// import React from "react";
import PropTypes from "prop-types";

export function RecommendedRestaurantCard({
  image,
  name,
  description,
  price,
  rating,
}) {
  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        {/* Circular Image with Gradient Border */}
        <div className="relative z-10 mb-[-60px]">
          <svg
            width="250"
            height="250"
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id={`borderGradient-${name}-${price}`}
                x1="131.787"
                y1="144.132"
                x2="131.787"
                y2="280.047"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F54748" stopOpacity="0" />
                <stop offset="1" stopColor="#FDC55E" />
              </linearGradient>
              <clipPath id={`circleClip-${name}-${price}`}>
                <circle
                  cx="125.035"
                  cy="124.965"
                  r="116.153"
                  transform="rotate(178.687 125.035 124.965)"
                />
              </clipPath>
            </defs>
            <circle
              cx="125.035"
              cy="120.965"
              r="116.153"
              transform="rotate(178.687 125.035 124.965)"
              stroke={`url(#borderGradient-${name}-${price})`}
              strokeWidth="16"
            />
            <image
              href={image}
              x="24.882"
              y="30.882"
              // width="232"
              // height="232"
              clipPath={`url(#circleClip-${name}-${price})`}
            />
          </svg>
          {/* Price Badge */}
          <div className="absolute bottom-2 right-2">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="29.999"
                cy="29.9997"
                r="28"
                fill="#FDC55E"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
              ${price}
            </span>
          </div>
        </div>

        {/* Card Container */}
        <div className="relative bg-linear-to-b from-orange-100 via-teal-50 to-teal-100 rounded-2xl shadow-lg pt-20 pb-6 px-6">
          {/* Reviewer Profiles & Rating */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex -space-x-2">
              <img
                src="/images/user-profiles.png"
                alt="Reviewer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/images/user-profiles.png"
                alt="Reviewer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/images/user-profiles.png"
                alt="Reviewer"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="text-gray-700 font-medium text-sm">
                ({rating})
              </span>
            </div>
          </div>

          {/* Restaurant Name */}
          <h4 className="text-center text-3xl font-bold text-orange-400 mb-2">
            {name}
          </h4>

          {/* Description */}
          <p className="text-center text-gray-600 text-sm mb-6">
            {description}
          </p>

          {/* Order Button */}
          <div className="flex justify-center">
            <button className="bg-teal-700 hover:bg-teal-300 text-white text-xs py-3 px-8 rounded transition-colors duration-200 shadow-md">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

RecommendedRestaurantCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

