import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  
  return (
    <div className='py-20' id="testimonials">
        <h1 className="heading">
            My
            <span className='text-purple'> Experiencies</span>
        </h1>
        <div className='w-full h-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {workExperience.map((card) => (
            <Button
                key={card.id}
                borderRadius='1.75rem'
                link={card.link}
                duration={Math.floor(Math.random() * 10000 + 10000)}
                className='flex-1 text-white border-neutral-200 dark:border-slate-800 h-full'
            >
                <div className='flex lg:flex-row flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <div className='flex flex-col justify-center items-center gap-2 w-[50%]'>
                      <img src={card.thumbnail} alt={card.thumbnail} className='border-2 rounded-xl border-gray-500  object-contain lg:w-40 md:w-30 w-25'/>
                      <h1 className='text-start text-m md:text-1xl font-bold'>
                        Click!      
                      </h1>
                    </div>
                    
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>
                            {card.title}
                        </h1>
                        <h1 className='text-start text-m md:text-1xl font-bold'>
                            My role: {card.role}
                        </h1>
                        <div className='text-start text-white-100 my-3 font-semibold'>
                        {card.desc.split('\n').map((line, j) => (
                          <p
                          className="text-xm text-start" 
                            key={j}> {line.trim() !== "" ? '◦' : ""} {line}
                          </p>
                        ))}
                        
                        </div>
                        <div className='mt-5 flex flex-row'>
                          {card.iconList.map((icon, index) => (
                                <div key={index} className="border border-white/[0.2] rounded-full 
                                        bg-black lg:w-10 lg:h-10 w-10 h-10
                                        flex justify-center items-center"
                                        style={{transform: `translateX(-${5 * index * 2}px)`
                                    }}>
                                    <img src={icon} alt={icon} className='p-2'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Button>
          ))}
        </div>
    </div>
  )
}

export default Experience