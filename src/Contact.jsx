import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react"

export function Contact() {
    return (
        <div className="flex justify-between items-end fixed w-full h-screen bottom-0 left-0 right-0 z-30 lg:px-6 px-4">
            <div className="flex justify-between items-center flex-col h-2/3">
                <IconBrandGithub color="#B8B5A6" />
                <IconBrandGmail color="#B8B5A6" />
                <IconBrandLinkedin color="#B8B5A6" />
                <IconBrandInstagram color="#B8B5A6" />
                <div className="w-[1px] bg-dark-orange-color h-[100px]"></div>
            </div>
            <div className="flex justify-between items-center flex-col h-2/3">
                <p className="italic text-dark-orange-color text-xs h-[320px]" style={{ writingMode: 'vertical-rl' }}>Portofolio website of Ahmad Hilman Dani</p>
                <div className="w-[1px] bg-dark-orange-color h-[160px]"></div>
            </div>
        </div>
    )
}