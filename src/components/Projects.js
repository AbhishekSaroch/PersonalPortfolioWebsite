import React from "react";
import cartoon from "../images/cartoon.jpg";
import project1 from"../images/project1.png"
import project2 from"../images/project2.png"
import project3 from"../images/project3.png"
import {AiFillDownCircle} from "react-icons/ai"
 const Projects = () => {
  const Projects = [
    {
      img: project1,
      title: "blogsapp",
      desc: "Ablog app bulit with ReactJs,ContextAPI and Tailwind CSS",
      code: "https://github.com/AbhishekSaroch",
    },
    {
      img: project2,
      title: "MoviesWebsite",
      desc: "Movies Search Website Bulity With ReactJs,Redux and Tailwind CSS",
      code: "https://github.com/AbhishekSaroch",
    },
    {
      img: project3,
      title: "EcommerceApp",
      desc: "A E commerce Website made with React,Redux and Tailwind CSS",
      code: "https://github.com/AbhishekSaroch",
    },
  ];
  return (
    <div className="gap-y-5 bg-slate-300 py-10" id="projects">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h1 className="underline text-4xl font-semibold">Projects</h1>
        <p className="font-semibold">
          Here Are My Some of best projects . I have built them with HTML5
          TailwindCSS JS and ReactJS
        </p>
        <p>Check Them Out</p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mx-auto space-y-5">
        {Projects.map((project, index) => (
          <div key={index} className="gap-y-3 flex flex-col justify-center items-center">
            <img
              src={project.img}
              className=" flex items-center justify-center h-[350px] w-[400px] rounded-lg mx-auto "
            ></img>
            <p className="text-xl text-center font-bold gap-3">{project.desc}</p>
            <p className="text-center">
              <a href="https://github.com/AbhishekSaroch" target="_blank" className="text-xl font-semibold border px-3 bg-blue-300 hover:bg-transparent">Code</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
