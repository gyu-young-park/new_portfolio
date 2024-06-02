import Image from "next/image";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { projectDetailList } from "@/data";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MdSubtitles } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

export function Projects() {
  return (

    <div className='py-10 flex flex-col justify-center items-center' id="project-detail">
        <h1 className="heading">
            My Software {' '}
            <span className='text-purple'>Projects Details</span>
        </h1>
        {projectDetailList.map((projectDetail) => (
          <div key={projectDetail.id} className="py-10 md:w-[800px] w-[95vw] gap-10" id={projectDetail.id}>
            <BackgroundGradient className="rounded-[22px] py-6 px-8 sm:p-10 bg-white dark:bg-zinc-900">
              <div className="pb-1 flex flex-col items-center justity-center">
                <img
                  src={projectDetail.img}
                  alt="jordans"
                  className="border-2 rounded-xl border-gray-500  object-contain w-[300px] h-[300px]"
                />
              </div>
              
              <TextGenerateEffect
                className='text-center text-[40px] md:text-5xl lg:text-6xl' 
                words={projectDetail.title}
              />

              {projectDetail.descriptions.map((descriptions, i) => (
                <div className="flex flex-col gap-3 p-5" key={i}>
                  <p className="text-lg text-neutral-300 dark:text-neutral-300">
                    {descriptions.subTitle}
                  </p>
                  <p className=" text-xm text-neutral-500 dark:text-neutral-330">
                    → {descriptions.introduction}
                  </p>
                  
                  {
                    <div className="ml-3">
                      {descriptions.description.split('\n').map((line, j) => (
                        <p
                        className="mb-0.5 text-xm text-neutral-600 dark:text-neutral-400" 
                          key={j}> {line.trim() !== "" ? '◦' : ""} {line}
                        </p>
                      ))}
                    </div>
                  }
                  <div className="flex flex-row justify-between items-center">
                <div className="h-fit rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-sl font-bold dark:bg-zinc-800">
                  <span>Duration </span>
                  <span className="bg-zinc-700 rounded-full text-[0.9rem] px-2 py-0 text-white">
                    {projectDetail.duration}
                  </span>
                </div>
                <div className="flex items-center justify-center mt-7 mb-3">
                      <div className='flex items-center'>
                          {descriptions.iconLists.map((icon, index) => (
                              <div key={index} className="border border-white/[0.2] rounded-full 
                                      bg-black lg:w-10 lg:h-10 w-8 h-8
                                      flex justify-center items-center"
                                      style={{transform: `translateX(-${5 * index * 2}px)`
                                  }}>
                                  <img src={icon} alt={icon} className='p-2'/>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              
            </div>    
            ))}
              
            </BackgroundGradient>
          </div>
        ))}

    </div>
    
  );
}

export default Projects