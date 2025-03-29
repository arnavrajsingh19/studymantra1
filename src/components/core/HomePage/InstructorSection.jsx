import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-16 w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        
        {/* Instructor Image */}
        <div className="w-full md:w-[50%] flex justify-center">
          <img
            src={Instructor}
            alt="instructor"
            className="shadow-lg shadow-blue-200 rounded-lg w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[50%] flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Become an <HighlightText text={"Instructor"} />
          </h2>
          <p className="font-medium text-[14px] sm:text-[16px] text-richblack-300 w-full md:w-[90%] mx-auto">
            Instructors from around the world teach millions of students on StudyMantra. 
            We provide the tools and skills to teach what you love.
          </p>
          
          {/* CTA Button */}
          <div className="w-fit mx-auto md:mx-0">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row gap-2 items-center">
                Start Learning Today <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InstructorSection;
