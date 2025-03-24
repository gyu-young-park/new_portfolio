'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FaBlogger, FaGithub, FaDev  } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  id: number
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {

  const handleClickOnMyBlog = () => {
    // window.location.href="https://velog.io/@chappi/posts"
    window.open("https://velog.io/@chappi/posts", '_blank');
  }

  const handleClickOnMyGit = () => {
    // window.location.href="https://velog.io/@chappi/posts"
    window.open("https://github.com/gyu-young-park", '_blank');
  }

  const handleClickOnOpensourceCommit = () => {
    window.open("https://gerrit.o-ran-sc.org/r/q/owner:gyoue200125%2540gmail.com", '_blank')
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%,rgba(12, 14, 35, 1) 100%'
      }}
    >
      <div className={`${(id === 6 || id === 4) && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
          <div className="font-sans font-extralight text-sm md:text-xs lg:text-base z-10 text-[#c1c2d3]">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-2">
              {["Go", "Python", "Java"].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              {/* <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/> */}
            </div>
            <div className="flex flex-col gap-3">
            {/* <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/> */}
              {["Kubernetes", "Linux"].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
            </div>
            
          </div>
        )}

        { id === 4 && (
          <div className="mt-1 w-100 flex flex-row justify-center items-center">
            <MagicButton
              title={"My Contribution"}
              icon={<FaDev/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleClickOnOpensourceCommit}
            />
          </div>
        )}

        {
          id === 5 && (
            <MagicButton
              title={"My Git"}
              icon={<FaGithub/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleClickOnMyGit}
            />
          )
        }

        { id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bttom-5 right-0`}>
              <Lottie options={{
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                }
              }}/>
            </div>
            <MagicButton
              title={"My Tech Blog"}
              icon={<FaBlogger/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleClickOnMyBlog}
            />
          </div>
        )}
      </div>
    </div>
    </div>
    
  );
};
