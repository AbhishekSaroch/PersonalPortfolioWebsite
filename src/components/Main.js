import React from "react";
import { AiFillGithub, AiFillInstagram} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import main from "../images/main.jpg"
const Main = () => {
  const image="C:\Users\abhis\OneDrive\Documents\React-Projects\PersonalPortfolio\personalportfoliowebsite\images\cartoon1.jpg"
  return (
    <section className="bg-slate-300 px-5 text-white py-32" id="main">
      <div className="container grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0 ">
          <h1 className="text-4xl lg:text-6xl text-black">
            Hi, <br />I am <span className="text-red-700">Abhishek Sharma</span> <br />
            <span className="text-red-700">MERN Stack</span> Developer
          </h1>

          <p className="py-5 text-black">
            I am proficient in JavaScript, React.js,Tailwind CSS and HTML5
          </p>

          <div className="flex py-4 items-center">
            <a
              href="https://github.com/AbhishekSaroch"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-red-700"
            >
              {" "}
              <AiFillGithub size={40} className="text-blue-700" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sharma-34ab24237/" target="_blank"
              className="pr-4 inline-block text-accent hover:text-red-700"
            >
              {" "}
              <BsLinkedin size={35} className="text-blue-700"/>{" "}
            </a>
            <a
              href="https://www.instagram.com/abhishek_sharma.0026/" target="_blank"
              className="pr-4 inline-block text-accent hover:text-red-700"
            >
              {" "}
              <AiFillInstagram size={40} className="text-blue-700" />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent rounded-lg border-2 border-[#7477FF] text-black px-7 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>
        <div>
          <img  src={main} className="lg:h-[350px] sm:h-[300px] w-[450px] rounded-lg"></img>
        </div>
      </div>
    </section>
  );
};

export default Main;
