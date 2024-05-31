import Image from "next/image";
import { BackgroundGradient } from "./ui/BackgroundGradient";

export function Projects() {
  return (
    <div className='py-10' id="project-detail">
        <h1 className="heading">
            My Software Major {' '}
            <span className='text-purple'>Projects Details</span>
        </h1>
        <div className="py-10 flex flex-col gap-10 items-center">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div className="flex flex-col">
              <img
                src={`/ric.svg`}
                alt="jordans"
                className="object-contain h-[300px]"
              />
            </div>
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Air Jordan 4 Retro Reimagined
            </p>
    
            <p className="text-xm text-neutral-600 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases.
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases.
            </p>
            <div className="flex flex-row">
              <div className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-sl font-bold dark:bg-zinc-800">
                <span>Duration </span>
                <span className="bg-zinc-700 rounded-full text-[0.9rem] px-2 py-0 text-white">
                  2022.12~2024.5
                </span>
              </div>
            </div>
          </BackgroundGradient>

        </div>
    </div>
    
  );
}

export default Projects