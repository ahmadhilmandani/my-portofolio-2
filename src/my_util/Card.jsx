import { PrimaryButton } from "./Button"

export function Card(props) {
    const { href, children, additioanl = null } = props
    return (
        <a className={"max-w-[240px] w-full h-[400px] block border bg-light-green-color "+additioanl}>
            {children}
            <PrimaryButton size='sm' href={href}>DETAIL</PrimaryButton>
        </a>
    )
}

export function Header({ children }) {
    return (
        <h2 className="font-semibold line-clamp-2 leading-relaxed px-3 mt-3">{children}</h2>
    )
}

export function Image({ src }) {
    return (
        <div className="w-full h-full min-h-[100px] max-h-[160px] bg-cover bg-center" style={{ backgroundImage: `url(${src})`}}></div>
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
        <span className='block mb-3 line-clamp-2 leading-relaxed px-3'>
            <b className='font-medium'>Skill : </b>
            {children}
        </span>
    )
}


// Card.Header = Header
// Card.Image = Image
// Card.Content = Content
// Card.Skill = Skill