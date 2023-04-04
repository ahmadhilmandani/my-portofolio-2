import React from 'react'

import { PrimaryButton } from './my_util/Button'

import hero from './assets/hero.png'

export function Home() {
  return (
    <div id='home' className='w-full min-h-screen lg:h-screen flex flex-wrap lg:justify-between lg:items-center justify-center pt-32 lg:pt-0 lg:mt-0 overflow-hidden'>
      <div className='text-center lg:text-left w-full lg:w-[40%]'>
        <p className='mb-6 lg:mb-0'>Hello, there! My name is</p>
        <h1 className='mb-4 font-semibold text-4xl lg:text-6xl lg:leading-normal'>Ahmad Hilman Dani</h1>
        <p className='mb-8 lg:mb-14 text-xl lg:text-2xl lg:leading-loose'>Learn to be A Front-end Developer! and UX Designer</p>
        <PrimaryButton href={'https://drive.google.com/file/d/17I7S_YflmBrfuDes-cjMvmLGDCTdUXm7/view?usp=share_link'} additional={'mx-auto lg:mx-0 hover:-translate-y-1 transition ease-in-out duration-300'}>MY RESUME</PrimaryButton>
      </div>
      <div className='full lg:w-[50%] self-end'>
        <img src={hero} alt="" className='w-full max-w-[540px] mx-auto' />
      </div>
    </div>
  )
}

