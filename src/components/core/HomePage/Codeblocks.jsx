import React from 'react';
import CTAButton from './Button';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Codeblocks = ({ position, heading, subheading, ctabtn1, ctabtn2, codeblock }) => {
  return (
    <div className={`flex flex-col ${position} sm:flex-col lg:flex-row my-20 justify-between gap-5 lg:gap-10`}>
      {/* Left Section - Text */}
      <div className="w-full lg:w-[50%] flex flex-col gap-6 sm:gap-8">
        {heading}
        <div className="text-richblack-300 font-bold text-sm sm:text-base">
          {subheading}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-5 sm:mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center justify-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Right Section - Code Block */}
      <div className="h-fit flex flex-row sm:text-[10px] w-full lg:w-[500px] py-4 bg-[#161D29] rounded-lg shadow-lg overflow-hidden">
        {/* Line Numbers */}
        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
          {Array.from({ length: 11 }, (_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>

        {/* Code Content */}
        <div className="w-[90%] flex flex-col gap-2 font-bold font-mono text-white pr-2">
          <TypeAnimation
            sequence={[codeblock, 5000, '']}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: 'pre-line',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Codeblocks;
