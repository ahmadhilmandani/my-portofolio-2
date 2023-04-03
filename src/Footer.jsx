import logoOrange from './assets/logo-orange.png'

import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react'


export function Footer() {
    return (
        <footer className='w-full bg-dark-green-color text-orange-color pt-10 absolute right-0 left-0 -z-50'>
            <div className='flex flex-wrap justify-center items-start gap-12 lg:gap-32 lg:p-12 p-6'>
                <img src={logoOrange} alt="Ahmad Hilman Dani's Logo" className='h-[40px]' />
                <div className='text-orange-color'>Available Services
                    <ol className='list-disc text-sm leading-loose '>
                        <li className='text-orange-color mt-3'>Frontend Web Development</li>
                        <li className='text-orange-color mt-3'>UI/UX Design</li>
                        <li className='text-orange-color mt-3'>UI/UX Design & Frontend Web Development</li>
                        <li className='text-orange-color mt-3'>Fullstack Web Development (React JS & Laravel)</li>
                    </ol>
                </div>
                <div className='flex flex-wrap justify-center items-start lg:gap-10 gap-5'>
                    <a href="https://github.com/ahmadhilmandani" target="_blank">
                        <IconBrandGithub className='text-orange-color'  />
                    </a>
                    <a href="mailto:ahmadhilmanlagi@gmail.com" target="_blank">
                        <IconBrandGmail className='text-orange-color'  />
                    </a>
                    <a href="https://www.linkedin.com/in/ahmad-hilman-b52b661b7/" target="_blank">
                        <IconBrandLinkedin className='text-orange-color'  />
                    </a>
                    <a href="https://www.instagram.com/?hl=id" target="_blank">
                        <IconBrandInstagram  className='text-orange-color' />
                    </a>
                </div>
            </div>
            <div className='bg-dark-green-color text-center text-sm py-2 mt-8 text-orange-color'>© 2023. All rights reserved.</div>
        </footer>
    )
}