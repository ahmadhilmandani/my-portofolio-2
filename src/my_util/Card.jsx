import { PrimaryButton } from "./Button"

export function Card(props) {
    const { href, children, additional = null } = props
    return (
        <a href={href} className={"block w-[280px] h-[480px] bg-light-green-color " + additional} target="_blank">
            {children}
            <PrimaryButton size='sm' href={href} additional={'mx-auto'}>DETAIL</PrimaryButton>
        </a>
    )
}


export function Image({ src, additional }) {
    return (
        <div className={"w-full h-full min-h-[100px] max-h-[160px] bg-cover bg-center "+additional} style={{ backgroundImage: `url(${src})` }}></div>
    )
}


export function Header({ children }) {
    return (
        <h2 className="font-semibold line-clamp-2 leading-relaxed px-3 mt-3">{children}</h2>
    )
}


export function Content({ children }) {
    return (
        <p className="my-3 line-clamp-3 leading-relaxed px-3">
            {children}
        </p>
    )
}

export function Skill({ children }) {
    return (
        <span className='mb-3 line-clamp-2 leading-relaxed px-3 flex gap-2'>
            <p className='text-dark-orange-color'>Skill : </p>
            {children}
        </span>
    )
}