import React from 'react'

import { Number } from './my_util/Number'

import { IconBrandReact, IconBrandTailwind, IconBrandJavascript, IconBrandHtml5, IconBrandLaravel } from '@tabler/icons-react'

export function About() {
    return (
        <>
            <div className='w-full h-[200px] bg-light-green-color flex flex-col justify-center items-center text-center absolute left-0 right-0 -z-20 p-4 lg:p-0'>
                <p className='lg:text-3xl text-xl mb-4 lg:leading-relaxed font-semibold'>
                    "So, verily, with every difficulty, there is relief."
                </p>
                <small>(Quran 94:5)</small>
            </div>
            <div className='w-full min-h-screen mt-72'>
                <div className='flex gap-5 flex-wrap'>
                    <Number>1</Number>
                    <h1 id='about-me' className='font-semibold text-3xl lg:text-5xl'>About me</h1>
                </div>
                <div className='w-full lg:w-1/2 mt-4'>
                    <p>
                        Hello and welcome to my web portfolio! My name is Ahmad Hilman Dani, and I am an undergraduate student of Informatics Engineering with a passion for mastering frontend web development and UX design.
                    </p>
                    <p className='my-10'>
                        My goal is to create stunning and user-friendly websites that provide an exceptional user experience. To achieve this, I am constantly improving my skills and staying up-to-date with the latest technologies and trends in the industry.
                    </p>
                    <p>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <div className='flex gap-14 px-5'>
                        <ul className='list-disc'>
                            <li className='mt-3'><IconBrandReact className='text-sky-400' /></li>
                            <li className='my-2'><IconBrandTailwind className='text-cyan-400' /></li>
                            <li><IconBrandJavascript className='text-yellow-500' /></li>
                        </ul>
                        <ul className='list-disc'>
                            <li className='mt-3'><IconBrandHtml5 className='text-orange-600' /></li>
                            <li className='my-2'><IconBrandLaravel className='text-red-600' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
