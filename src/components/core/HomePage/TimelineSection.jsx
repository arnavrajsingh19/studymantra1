import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to switch is an important skill",
  },
  {
    Logo: Logo4,
    heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div className="w-11/12 max-w-maxContent mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Timeline Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          {timeline.map((element, index) => (
            <div className="flex flex-row gap-4 items-center" key={index}>
              {/* Icon Container */}
              <div className="w-[50px] bg-white flex items-center justify-center p-2 shadow-md rounded-md">
                <img src={element.Logo} alt={`${element.heading} icon`} />
              </div>
              {/* Text Content */}
              <div>
                <h2 className="font-semibold text-lg sm:text-xl">{element.heading}</h2>
                <p className="text-sm sm:text-base text-gray-300">{element.Description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Image with Overlay */}
        <div className="relative w-full md:w-1/2 shadow-lg shadow-blue-200 rounded-lg overflow-hidden">
          <img
            src={timelineImage}
            alt="Timeline"
            className="w-full h-auto object-cover"
          />

          {/* Overlay Section */}
          <div className="absolute bg-caribbeangreen-700 flex flex-col sm:flex-row text-white uppercase py-5 px-7
                left-[50%] translate-x-[-50%] translate-y-[-100%] w-11/12 sm:w-auto rounded-md shadow-md">
            {/* Left: Years of Experience */}
            <div className="flex flex-row gap-3 items-center border-b sm:border-b-0 sm:border-r border-caribbeangreen-300 px-4 pb-2 sm:pb-0">
              <p className="text-2xl sm:text-3xl font-bold">10</p>
              <p className="text-caribbeangreen-300 text-xs sm:text-sm">Years of Experience</p>
            </div>

            {/* Right: Courses */}
            <div className="flex gap-3 items-center px-4 pt-2 sm:pt-0">
              <p className="text-2xl sm:text-3xl font-bold">250</p>
              <p className="text-caribbeangreen-300 text-xs sm:text-sm">Types of Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
