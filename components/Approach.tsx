"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

export default function Approach() {
  return (
    <section className="w-full py-20">
        <h1 className="heading">
            More of <span className="text-purple">me</span>
        </h1>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center gap-4">
            <Card 
                title="Career" 
                icon={<AceternityIcon order="Career"/>}
                description={`[2017~2021] 한국항공대 소프트웨어학과 졸업(4.24 수석) \n [2020] 노보네트웍스 SW인턴 \n [2020] 삼성전자 네트워크 사업부 SW 인턴 \n [2021~현재] 삼성전자 네트워크 사업부 SW Engineer` }    
            >
            <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
            />
            </Card>
            <Card 
                title="Awards and Ceritificate" 
                icon={<AceternityIcon order="Awards and Ceritificate"/>}
                description={`[2017]국가 이공계 우수장학생 \n [2019]교내 4차 산업 SW경시 대회 금상 \n [2019] 경인 지역 알고리즘 대회 본선 진출 \n [2019] 교내 SW개발 대회 금상 \n [2020] 교내 SW개발 대회 금상 \n [2020~2021] 구글 머신러닝 부트캠프 수료 \n [2021] Tensorflow Certificate 취득 \n [2021] 캡스톤 대회 1등 \n [2021] 한화생명 블록체인 해커톤 최종 본선 진출`}
            >
            <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                [236, 72, 153],
                [232, 121, 249],
                ]}
                dotSize={2}
            />
            </Card>
            <Card 
                title="Tech stack" 
                icon={<AceternityIcon order="Stack" />}
                description={`[프로그래밍 언어] Golang, Python, C/C++, Java \n [프론트엔드] JavaScript, TypeScript, React, Nextjs \n [백엔드] Golang, FastAPI, Flask, Spring, Nodejs 
                          \n [모바일] Android(Java) \n [DB] PostgreSQL, Redis 
                          \n [클라우드]Docker, Kubernetes, AWS, [Platform]Linux, Shell, EFK, OpenTelemetry, eBPF
                          \n [커뮤니케이션] 영어`}
            >
            <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
            />
            </Card>
        </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" color={"ef4ecff"}>
        {description.split('\n').map((line, j) => (
                <p
                className="mb-2 text-xm text-start" 
                  key={j}> {line}
                </p>
              ))}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order} : {order: string}) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
            {order}
        </span>
        </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
