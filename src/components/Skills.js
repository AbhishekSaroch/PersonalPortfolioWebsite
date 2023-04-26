import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
const Skills = () => {
  return (
    <div className=" bg-slate-300" id="skills">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold">Skills</p>
        <p className="text-slate-700 text-[10px]">My Technical Skills</p>
      </div>
      <div className="grid lg:grid-cols-2 space-y-5 items-center">
        <div>
          <p className="font-bold text-3xl">Languages</p>
          <div>
            <div className="flex items-center gap-x-5">
              <SiJavascript />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-3xl">Tools</p>
          <div>
            <div className="flex items-center gap-x-5">
              <BsGit />
              <p>Git</p>
            </div>
            <div className="flex items-center gap-x-5">
              <AiFillGithub />
              <p>GitHub</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-3xl">Libraries and FrameWorks</p>
          <div>
            <div className="flex items-center gap-x-5">
              <DiReact />
              <p>React</p>
            </div>
            <div className="flex items-center gap-x-5">
              <SiTailwindcss />
              <p>TailwindCSS</p>
            </div>
            <div className="flex items-center gap-x-5">
              <DiNodejsSmall />
              <p>NodeJS</p>
            </div>
            <div className="flex items-center gap-x-5">
              <DiMongodb />
              <p>MongoDB</p>
            </div>
            <div className="flex items-center gap-x-5">
              <SiExpress />
              <p>ExpressJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
