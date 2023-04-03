import { PrimaryButton, SecondaryButton } from './my_util/Button'
import logoColored from './assets/logo-colored.png'
// import { SecondaryButton } from './my_util/Button'

export function Navbar(props) {
    return (
        <nav className='w-full border-b border-b-dark-orange-color h-[64px] bg-light-orange-color fixed top-0 left-0 right-0 z-50 flex items-center justify-between lg:px-20 px-5'>
            <a href="#home">
                <img src={logoColored} alt="logo of Ahmad Hilman Dani's Website" className='w-[104px]' />
            </a>
            <div className='flex justify-between items-center w-2/4 scale-105'>
                <a href="#home" className='text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Home</a>
                <a href="#about-me" className='text-sm hover:-translate-y-1 transition ease-in-out duration-300'>About me</a>
                <a href="#experience" className='text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Experience</a>
                <SecondaryButton href={'contact'} size={'sm'} additional='text-sm hover:-translate-y-1 transition ease-in-out duration-300'>Contact</SecondaryButton>
            </div>
        </nav>
    )

}