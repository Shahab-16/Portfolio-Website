import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copywrite Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-sm">Designed and Developed by MD Shahab Uddin</h3>
        </div>

        {/* Year Section */}
        <div className="text-center mb-4 md:mb-0">
          <h3 className="text-sm">Copyright © {year} Shahab</h3>
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-3">
          <a
            href="https://github.com/Shahab-16"
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-shahab-uddin-500405268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/sha_ud16"
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com/u/MD_SHAHAB/"
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
