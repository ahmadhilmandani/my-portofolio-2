import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimaryButton, SecondaryButton } from './my_util/Button'
import { Number } from './my_util/Number'
import { Card, Header, Image, Content, Skill } from './my_util/Card'
import hero from './assets/hero.png'
import baznas from './assets/baznas.jpg'

export function About() {
    return (
        <>
        <div className='w-full lg:h-[200px] bg-light-green-color flex flex-col justify-center items-center text-center absolute left-0 right-0 -z-20 p-4 lg:p-0'>
            <p className='lg:text-3xl text-xl mb-4 lg:leading-relaxed font-semibold'>
                " It's always seems imposible until you do it! "
            </p>
            <small>quote by: J.M. Barrie</small>
            </div>
            <div className='w-full h-screen bg-red-50 mt-44 lg:mt-64'>

            </div>
        </>
    )
}
