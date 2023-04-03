import { SecondaryButton } from './my_util/Button'

import logoColored from './assets/logo-colored.png'

import { IconMenu2, IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandInstagram, IconX } from '@tabler/icons-react'

export function Navbar() {
    const menu = (params) => {
        document.getElementById('menu').classList.remove('hidden')
    }

    const close = () => {
        document.getElementById('menu').classList.add('hidden');
    }

    document.addEventListener('click', function (event) {
        if (!document.getElementById('humbergur-icon').contains(event.target) && !document.getElementById('menu').contains(event.target)) {
            close()
        }
    })

    return (
        <nav className='w-full border-b border-b-dark-orange-color h-[64px] bg-light-orange-color fixed top-0 left-0 right-0 z-50 flex items-center justify-between lg:px-20 px-5'>
            
            <a href="#home">
                <img src={logoColored} alt="logo of Ahmad Hilman Dani's Website" className='w-[104px]' />
            </a>

            <div className='lg:flex hidden justify-between items-center w-2/4'>
                <a href="#home" className='text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Home</a>
                <a href="#about-me" className='text-sm hover:-translate-y-1 transition ease-in-out duration-300'>About me</a>
                <a href="#experience" className='text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Experience</a>
                <SecondaryButton href={'contact'} size={'sm'} additional='text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Contact</SecondaryButton>
            </div>

            <div className='lg:hidden block'>
                <IconMenu2 id='humbergur-icon' onClick={menu} />
                <div id='menu' className='hidden max-w-[360px] w-[80%] h-full fixed top-0 bottom-0 right-0 bg-white p-10'>
                    <div className='flex justify-end' id='close' onClick={close}>
                        <IconX />
                    </div>
                    <div>
                        <a href="#home" className='block text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Home</a>
                        <a href="#about-me" className='block text-sm hover:-translate-y-1 transition ease-in-out duration-300 my-10'>About me</a>
                        <a href="#experience" className='block text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Experience</a>
                        <a href="https://github.com/ahmadhilmandani" target="_blank" className='block my-10'>
                            <IconBrandGithub stroke={2} className="text-dark-green-color" />
                        </a>
                        <a href="mailto:ahmadhilmanlagi@gmail.com" target="_blank" className='block'>
                            <IconBrandGmail stroke={2} className="text-dark-green-color" />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmad-hilman-b52b661b7/" target="_blank" className='block my-10'>
                            <IconBrandLinkedin stroke={2} className="text-dark-green-color" />
                        </a>
                        <a href="https://www.instagram.com/ahmadhilmandani/" target="_blank" className='block'>
                            <IconBrandInstagram stroke={2} className="text-dark-green-color" />
                        </a>
                    </div>
                </div>
            </div>

        </nav>
    )
}