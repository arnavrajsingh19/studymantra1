import React, { useState } from "react";

const reviews = [
  {
    name: "Cody Fisher",
    email: "tim.jennings@example.com",
    review:
      "Coordination of activities improved tremendously with Learn codings.",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Esther Howard",
    email: "felicia.reid@example.com",
    review:
      "Everyone’s on the same page. Many of our people are not very organized naturally, so Learn codings is a godsend!",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Eleanor Pena",
    email: "nathan.roberts@example.com",
    review:
      "I would recommend Learn codings for anyone trying to get the word out about their business. It has saved me so much time!",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Kristin Watson",
    email: "bill.sanders@example.com",
    review:
      "With Learn codings, we have finally accomplished things that have been waiting forever to get done.",
    rating: 4.5,
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-11/12 mx-auto max-w-maxContent py-12 text-white">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        Reviews from other learners
      </h2>

      {/* Tabs for Small Screens */}
      <div className="block sm:hidden">
        <div className="flex overflow-x-auto space-x-4 pb-2">
          {reviews.map((review, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeTab === index
                  ? "bg-yellow-400 text-black font-semibold"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {review.name}
            </button>
          ))}
        </div>

        {/* Active Review Display */}
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg text-richblack-200 text-center">
          <img
            src={reviews[activeTab].img}
            alt={reviews[activeTab].name}
            className="w-16 h-16 rounded-full border-2 border-yellow-400 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-white">
            {reviews[activeTab].name}
          </h3>
          <p className="text-gray-400 text-sm">{reviews[activeTab].email}</p>
          <p className="mt-4 text-gray-300">{reviews[activeTab].review}</p>
          <div className="mt-4 text-yellow-400">
            {"★".repeat(Math.floor(reviews[activeTab].rating))}
            <span className="text-gray-400"> {reviews[activeTab].rating}</span>
          </div>
        </div>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col text-richblack-200 items-center text-center"
          >
            <img
              src={review.img}
              alt={review.name}
              className="w-16 h-16 rounded-full border-2 border-yellow-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{review.name}</h3>
            <p className="text-gray-400 text-sm">{review.email}</p>
            <p className="mt-4 text-gray-300">{review.review}</p>
            <div className="mt-4 text-yellow-400">
              {"★".repeat(Math.floor(review.rating))}
              <span className="text-gray-400"> {review.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
