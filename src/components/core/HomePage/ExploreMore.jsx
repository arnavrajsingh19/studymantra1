import React from "react";
import { FaUserGraduate, FaBook } from "react-icons/fa";
import HighlightText from "./HighlightText";

const courses = [
  {
    title: "Learn HTML",
    description:
      "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
    level: "Beginner",
    lessons: "6 Lessons",
    highlighted: true,
  },
  {
    title: "Learn CSS",
    description:
      "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques.",
    level: "Beginner",
    lessons: "6 Lessons",
    highlighted: false,
  },
  {
    title: "Responsive Web Design",
    description:
      "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes.",
    level: "Beginner",
    lessons: "6 Lessons",
    highlighted: false,
  },
];

const ExploreMore = () => {
  return (
    <div className="bg-gray-900 py-12 text-white text-center px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        Unlock the <HighlightText text={"Power of Code"} />
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-8">
        Learn to Build Anything You Can Imagine
      </p>

      {/* Courses Grid */}
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 ${
              course.highlighted
                ? "bg-white text-black border-l-4 border-yellow-400"
                : "bg-richblack-600 text-gray-200"
            }`}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-xs sm:text-sm mb-4">{course.description}</p>
            <div className="flex justify-between text-xs sm:text-sm items-center">
              <span className="flex items-center gap-2">
                <FaUserGraduate /> {course.level}
              </span>
              <span className="flex items-center gap-2">
                <FaBook /> {course.lessons}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
