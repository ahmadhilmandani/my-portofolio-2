import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react"

export function Contact() {
    return (
        <div className="lg:flex hidden justify-between items-end fixed -z-10 w-full h-screen bottom-0 left-0 right-0 lg:px-6 px-4 bg-transparent">
            <div className="flex justify-between items-center flex-col h-2/3">
                <a href="https://github.com/ahmadhilmandani" target="_blank">
                    <IconBrandGithub color="#B8B5A6" stroke={2} className="hover:text-dark-green-color hover:-translate-y-1 transition ease-in-out duration-300" />
                </a>
                <a href="mailto:ahmadhilmanlagi@gmail.com" target="_blank">
                    <IconBrandGmail color="#B8B5A6" stroke={2} className="hover:text-dark-green-color hover:-translate-y-1 transition ease-in-out duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/ahmad-hilman-b52b661b7/" target="_blank">
                    <IconBrandLinkedin color="#B8B5A6" stroke={2} className="hover:text-dark-green-color hover:-translate-y-1 transition ease-in-out duration-300" />
                </a>
                <a href="https://www.instagram.com/ahmadhilmandani/" target="_blank" >
                    <IconBrandInstagram color="#B8B5A6" stroke={2} className="hover:text-dark-green-color hover:-translate-y-1 transition ease-in-out duration-300" />
                </a>
                <div className="w-[1px] bg-dark-orange-color h-[100px]"></div>
            </div>
            <div className="flex justify-between items-center flex-col h-2/3">
                <p className="italic text-dark-orange-color text-xs h-[320px]" style={{ writingMode: 'vertical-rl' }}>Portofolio website of Ahmad Hilman Dani</p>
                <div className="w-[1px] bg-dark-orange-color h-[160px]"></div>
            </div>
        </div>
    )
}