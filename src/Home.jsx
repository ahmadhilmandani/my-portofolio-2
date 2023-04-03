import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimaryButton, SecondaryButton } from './my_util/Button'
import { Number } from './my_util/Number'
import { Card, Header, Image, Content, Skill } from './my_util/Card'
import hero from './assets/hero.png'
import baznas from './assets/baznas.jpg'

function Home() {
  return (
    <div className='w-full min-h-screen lg:h-screen flex flex-wrap lg:justify-between lg:items-center justify-center pt-20 lg:pt-0 lg:mt-0 overflow-hidden'>
      <div className='text-center lg:text-left w-full lg:w-[40%]'>
        <p className='mb-6 lg:mb-0'>Hello, there! My name is</p>
        <h1 className='mb-4 font-semibold text-4xl lg:text-6xl lg:leading-normal'>Ahmad Hilman Dani</h1>
        <p className='mb-8 lg:mb-14 text-xl lg:text-2xl lg:leading-loose'>Learn to be A Front-end Developer! and UX Designer</p>
        <PrimaryButton href={'#'} additional={'mx-auto lg:mx-0 hover:-translate-y-1 transition ease-in-out duration-300'}>MY RESUME</PrimaryButton>
      </div>
      <div className='flex justify-center lg:justify-end items-end w-full lg:w-[50%] self-end'>
        <img src={hero} alt="" className='w-full max-w-[540px]' />
      </div>
    </div>
  )
}

export default Home
