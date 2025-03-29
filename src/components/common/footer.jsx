import React, { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-[#161D29] text-richblack-200 py-10 border-t-2">
      <div className="container mx-auto px-5">
        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white w-full text-left text-lg font-semibold flex justify-between items-center" 
          onClick={() => setIsOpen(!isOpen)}
        >
          Study Mantra <span>{isOpen ? '▲' : '▼'}</span>
        </button>

        {/* Footer Content */}
        <div className={`grid gap-8 transition-all duration-300 ${isOpen ? 'grid-cols-1' : 'hidden'} md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-5`}>
          {/* Company Section */}
          <div>
            <h2 className="text-white text-lg font-semibold">Study Mantra</h2>
            <ul className="mt-3 space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Affiliates</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="text-white text-lg font-semibold">Resources</h2>
            <ul className="mt-3 space-y-2">
              <li>Articles</li>
              <li>Blog</li>
              <li>Code Challenges</li>
              <li>Docs</li>
            </ul>
          </div>

          {/* Plans & Community Section */}
          <div>
            <h2 className="text-white text-lg font-semibold">Plans</h2>
            <ul className="mt-3 space-y-2">
              <li>Paid Memberships</li>
              <li>For Students</li>
            </ul>
            <h2 className="text-white text-lg font-semibold mt-6">Community</h2>
            <ul className="mt-3 space-y-2">
              <li>Forums</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Subjects Section */}
          <div>
            <h2 className="text-white text-lg font-semibold">Subjects</h2>
            <ul className="mt-3 space-y-2">
              <li>AI</li>
              <li>Cybersecurity</li>
              <li>Data Science</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <div className="flex justify-center space-x-4">
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
        <p className="mt-3">Made with ❤️ CodeHelp © 2023 Study Mantra</p>
      </div>
    </footer>
  );
};

export default Footer;
