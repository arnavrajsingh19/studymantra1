import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningLanguageSection = () => {
  return (
    <div className="w-11/12 max-w-maxContent mx-auto py-10">
      <div className="flex flex-col gap-5 items-center text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Your Swiss Knife for{" "}
          <HighlightText text={"learning any language !!"} />
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-richblack-600 w-[90%] sm:w-[70%]">
          Using spin makes learning multiple languages easy. With 20+ languages,
          realistic voice-over, progress tracking, custom schedules, and more.
        </p>

        {/* Images */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-0">
          <img
            src={know_your_progress}
            alt="Know your progress"
            className="object-contain sm:-mr-16 w-[80%] sm:w-auto"
          />
          <img
            src={compare_with_others}
            alt="Compare with others"
            className="object-contain w-[80%] sm:w-auto"
          />
          <img
            src={plan_your_lesson}
            alt="Plan your lessons"
            className="object-contain sm:-ml-16 w-[80%] sm:w-auto"
          />
        </div>

        {/* CTA Button */}
        <div className="w-full sm:w-[20%]">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-1 justify-center">
              Learn More
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
