import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">FIND A STORE</h4>
            <ul className="space-y-4 ">
              <li>BECOME A MEMBER</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>SEND US FEEDBACK</li>
              <li>STUDENT DISCOUNTS</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">GET HELP</h4>
            <ul className="space-y-4 text-[#7E7E7E]">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">ABOUT NIKE</h4>
            <ul className="space-y-4 text-[#7E7E7E]">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex items-center justify-end space-x-4 md:absolute right-8 top-0 ">
            <FaTwitter className="text-2xl" />
            <FaFacebook className="text-2xl" />
            <FaYoutube className="text-2xl" />
            <FaInstagram className="text-2xl" />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
           
          <div className="text-sm text-gray-500"> 
          <FaLocationDot  className ="text-white inline-block mr-1"/><span className='text-white mr-2'>India</span>
            © 2023 Nike, Inc. All Rights Reserved</div>
          <ul className="flex space-x-4 text-sm text-gray-500 mt-4 md:mt-0">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
          </ul>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;