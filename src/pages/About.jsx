import React from 'react';
import about1 from "../assets/Images/aboutus1.webp";
import about2 from "../assets/Images/aboutus2.webp";
import about3 from "../assets/Images/aboutus3.webp";
import Footer from '../components/common/footer';
import about4 from "../assets/Images/FoundingStory.png";
import ReviewTabs from "../components/core/HomePage/ReviewTabs";
import CTAButton from "../components/core/HomePage/Button";
const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-richblack-400">
        <h2 className="text-3xl font-bold">
          Driving Innovation in Online Education for a{' '}
          <span className="text-blue-100">Brighter Future</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          StudyNotion is at the forefront of driving innovation in online education.
          We're passionate about creating a brighter future by offering cutting-edge courses,
          leveraging emerging technologies, and nurturing a vibrant learning community.
        </p>
      </section>

      {/* Image Section */}
      <section className="flex flex-wrap justify-center gap-6 px-6 bg-richblack-400">
        <img src={about1} alt="Students learning online" className="w-full max-w-[300px] rounded-lg" />
        <img src={about2} alt="Interactive study session" className="w-full max-w-[300px] rounded-lg" />
        <img src={about3} alt="Collaborative online education" className="w-full max-w-[300px] rounded-lg" />
      </section>

      {/* Mission Statement */}
      <section className="text-center py-16 px-6 bg-richblack-400">
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          "We are passionate about revolutionizing the way we learn. Our innovative platform{' '}
          <span className="text-blue-100 font-semibold">combines technology</span>,{' '}
          <span className="text-yellow-100 font-semibold">expertise</span>, and community to create an{' '}
          <span className="text-orange-100 font-semibold">unparalleled educational experience</span>."
        </p>
      </section>
      
        <section className="bg-gray-900 text-white py-16 px-6">
        {/* Founding Story Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
            <h2 className="text-3xl font-bold text-pink-400">Our Founding Story</h2>
            <p className="mt-4 text-gray-300">
                Our e-learning platform was born out of a shared vision and passion for transforming education.
                It all began with a group of educators, technologists, and lifelong learners who recognized 
                the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
            </p>
            <p className="mt-2 text-gray-300">
                As experienced educators, we witnessed firsthand the limitations of traditional education systems.
                We believed that education should not be confined to the walls of a classroom or restricted by
                geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals
                from all walks of life to unlock their full potential.
            </p>
            </div>
            <div>
            <img
                src={about4} 
                alt="Our Founding Story"
                className="rounded-lg shadow-lg"
            />
            </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-16">
            {/* Vision */}
            <div>
            <h2 className="text-3xl font-bold text-orange-400">Our Vision</h2>
            <p className="mt-4 text-gray-300">
                With this vision in mind, we set out on a journey to create an e-learning platform that would
                revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a
                robust and intuitive platform that combines cutting-edge technology with engaging content, fostering
                a dynamic and interactive learning experience.
            </p>
            </div>
            
            {/* Mission */}
            <div>
            <h2 className="text-3xl font-bold text-blue-400">Our Mission</h2>
            <p className="mt-4 text-gray-300">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community
                of learners, where individuals can connect, collaborate, and learn from one another.
            </p>
            <p className="mt-2 text-gray-300">
                We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this
                spirit of collaboration through forums, live sessions, and networking opportunities.
            </p>
            </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-richblack-500 py-12">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
            <div>
                <h3 className="text-3xl font-bold text-white">5K+</h3>
                <p className="text-gray-400">Active Students</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-white">10+</h3>
                <p className="text-gray-400">Mentors</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-white">200+</h3>
                <p className="text-gray-400">Courses</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="text-gray-400">Awards</p>
            </div>
            </div>
        </div>
        </section>
        <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section: Heading and Description */}
        <div>
          <h2 className="text-4xl font-bold">
            World-Class Learning for <br />
            <span className="text-blue-400">Anyone, Anywhere</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Studynotion partners with more than <span className="font-semibold">275+ leading universities</span> 
            and companies to bring flexible, affordable, job-relevant online learning to individuals and 
            organizations worldwide.
          </p>
          <div className='mx-auto mt-3'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-1 justify-center'>
                            Learn More
                            </div>
                        </CTAButton>
            </div>
        </div>

        {/* Right Section: Information Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-richblack-400 p-6 rounded-lg">
            <h3 className="font-bold">Curriculum Based on Industry Needs</h3>
            <p className="text-gray-400 mt-2">
              Save time and money! The Belajar curriculum is made to be easier to understand and in line with 
              industry needs.
            </p>
          </div>
          <div className="bg-richblack-400 p-6 rounded-lg">
            <h3 className="font-bold">Our Learning Methods</h3>
            <p className="text-gray-400 mt-2">
              The learning process uses both online and offline methods.
            </p>
          </div>
          <div className="bg-richblack-400 p-6 rounded-lg">
            <h3 className="font-bold">Certification</h3>
            <p className="text-gray-400 mt-2">
              You will receive a certificate that can be used as proof during job hunting.
            </p>
          </div>
          <div className="bg-richblack-400 p-6 rounded-lg">
            <h3 className="font-bold">Rating "Auto-grading"</h3>
            <p className="text-gray-400 mt-2">
              Receive immediate feedback during the learning process without waiting for mentor responses.
            </p>
          </div>
          <div className="bg-richblack-400 p-6 rounded-lg col-span-2">
            <h3 className="font-bold">Ready to Work</h3>
            <p className="text-gray-400 mt-2">
              Connected with over <span className="font-semibold">150+ hiring partners</span>, 
              you’ll have the opportunity to find a job after graduating from our program.
            </p>
          </div>
        </div>
      </div>
    </section>
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white '>
             
             <ReviewTabs/>
        </div>
      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
