import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4';
import Codeblocks from '../components/core/HomePage/Codeblocks';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/footer';
import ReviewTabs from '../components/core/HomePage/ReviewTabs';
import ExploreMore from '../components/core/HomePage/ExploreMore';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 lg:w-9/12 items-center text-white justify-between shadow-2xl">
        <Link to={"/signup"}>
          <div className="mx-auto group mt-10 p-3 rounded-full bg-richblue-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex items-center rounded-full px-6 py-2">
              <p>Become an Instructor</p>
              <FaArrowRight className="ml-2" />
            </div>
          </div>
        </Link>

        <div className="text-center text-3xl md:text-4xl font-semibold mt-5">
          Empower Your Future with <HighlightText text="Coding Skills" />
        </div>
        <div className="w-full md:w-3/4 text-center text-base md:text-lg font-inter mt-4 text-richblack-100">
          With our online coding courses, learn at your own pace, from anywhere in the world, with hands-on projects, quizzes, and instructor feedback.
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-8">
          <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
          <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
        </div>

        <div className="mx-3 my-10 w-full md:w-3/4 shadow-xl shadow-blue-500/50 rounded-lg overflow-hidden">
          <video muted loop autoPlay className="rounded-lg w-full h-auto">
            <source src={Banner} />
          </video>
        </div>

        {/* Code Section 1 */}
        <div className="w-full md:w-9/12 flex flex-col md:flex-row justify-center items-center mx-auto">
          <Codeblocks
            position="lg:flex-row"
            heading={
              <div className="text-center text-3xl md:text-4xl font-semibold mt-5 text-white">
                Unlock Your <HighlightText text="coding potential " /> with our online courses
              </div>
            }
            subheading="Taught by industry experts passionate about sharing their knowledge with you."
            ctabtn1={{ btnText: "Try it yourself", linkto: "/signup", active: true }}
            ctabtn2={{ btnText: "Learn more", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a></nav>`}
            codeColor={'text-yellow'}
          />
        </div>
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 py-10">
        {/* Section 1: CTA Buttons */}
        <div className="homepage_bg h-[220px] flex flex-col items-center gap-5 mx-auto w-11/12 max-w-maxContent">
            <div className="h-[100px]" />
            <div className="flex flex-col md:flex-row gap-5 text-white">
            <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-1">
                Explore Full Catalog <FaArrowRight />
                </div>
            </CTAButton>
            <CTAButton active={false} linkto={"/signup"}>
                <div className="flex items-center gap-1">Learn More</div>
            </CTAButton>
            </div>
        </div>

        {/* Section 2: Main Content */}
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center gap-5 mt-10 mb-10">
            <div className="flex flex-col md:flex-row gap-5 w-full">
            {/* Left Section: Title */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold md:w-1/2 text-center md:text-left">
                Get the Skills You Need for a <HighlightText text="Job that is in demand!!" />
            </div>
            
            {/* Right Section: Description & Button */}
            <div className="flex flex-col gap-5 md:w-1/2 text-center md:text-left">
                <div className="text-sm sm:text-base md:text-lg">
                The modern StudyNotion dictates its own terms. To be competitive, specialists need more than just technical skills.
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 mx-auto md:mx-0">
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                </div>
            </div>
            </div>

            {/* Additional Sections */}
            <TimelineSection />
            <LearningLanguageSection />
        </div>
      </div>


      {/* Section 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center gap-8 bg-richblack-900 text-white py-10">
        <InstructorSection />
        <ReviewTabs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
