import React from 'react'

import { Number } from './my_util/Number'
import { Card, Image, Header, Content, Skill } from './my_util/Card'

import baznas from './assets/baznas.jpg'
import hackfest from './assets/hackfest.jpg'
import bnpt from './assets/bnpt-certificate.jpg'

import { IconBrandTailwind, IconBrandJavascript, IconBrandHtml5, IconBrandLaravel, IconBrandFigma } from '@tabler/icons-react'

export function Experience() {
    return (
        <main className='w-full h-screen lg:mt-0 mt-32'>
            <div className='flex gap-5 flex-wrap mb-10'>
                <Number>2</Number>
                <h1 id='experience' className='font-semibold text-3xl lg:text-5xl'>Experience</h1>
            </div>
            <div className='flex justify-between gap-10 lg:flex-wrap overflow-auto lg:overflow-visible'>
                <Card href={'https://www.linkedin.com/feed/update/urn:li:activity:7044822794433417217/'} additional={'shrink-0 hover:-translate-y-8 transition ease-in-out duration-300'}>
                    <Image src={hackfest} additional={'grayscale hover:grayscale-0 transition ease-in-out duration-300'} />
                    <Header>Commitee of HackFest 2023 at Media & Creative Division</Header>
                    <Content>
                        Make an appealing design of Info Session poster, Deck Slide Template design, Timeline Design, Certificate Design, and Prize Board Design.
                    </Content>
                    <Skill>
                        <IconBrandFigma className='text-dark-orange-color' stroke={1.5} />
                    </Skill>
                </Card>
                <Card href={'https://service.baznasmadiun.id/'} additional={'shrink-0 hover:-translate-y-8 transition ease-in-out duration-300'}>
                    <Image src={baznas} additional={'grayscale hover:grayscale-0 transition ease-in-out duration-300'} />
                    <Header>BAZNAS Kabupaten Madiun Intern</Header>
                    <Content>
                        Frontend Development and UI/UX Design for BAZNAS Kabupaten Madiun's website
                    </Content>
                    <Skill>
                        <IconBrandLaravel className='text-dark-orange-color' stroke={1.5} />
                        <IconBrandJavascript className='text-dark-orange-color' stroke={1.5} />
                        <IconBrandTailwind className='text-dark-orange-color' stroke={1.5} />
                        <IconBrandHtml5 className='text-dark-orange-color' stroke={1.5} />
                        <IconBrandFigma className='text-dark-orange-color' stroke={1.5} />
                    </Skill>
                </Card>
                <Card href={'https://www.linkedin.com/feed/update/urn:li:activity:6884443513900064768/'} additional={'shrink-0 hover:-translate-y-8 transition ease-in-out duration-300'}>
                    <Image src={bnpt} additional={'grayscale hover:grayscale-0 transition ease-in-out duration-300'} />
                    <Header>Top 1 at Microblog Competition "Indonesia Tak Tergantikan" held by BNPT Indonesia</Header>
                    <Content>
                       "1001 Alasan Kamu Tak Tergantikan" is the title of the art for Microblog Competition held by BNPT Indonesia
                    </Content>
                    <Skill>
                        <p className='text-dark-orange-color'>InkScape</p>
                    </Skill>
                </Card>
            </div>
        </main>
    )
}
