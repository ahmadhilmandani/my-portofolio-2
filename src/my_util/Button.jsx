export function PrimaryButton(props) {
    const { size = 'lg', href='#', children, additional = null } = props
    if (size == 'lg') {
        return (
            <a href={href} className={"block max-w-[320px] lg:w-[320px] font-semibold text-light-orange-color bg-orange-color py-2 text-center uppercase text-xl " + additional} target="_blank">
                {children}
            </a>
        )
    }
    else if (size == 'sm') {
        return (
            <a href={href} className={"block max-w-[120px] lg:w-[120px] text-sm font-semibold text-light-orange-color bg-orange-color py-2 text-center uppercase " + additional} target="_blank">
                {children}
            </a>
        )
    }
}

export function SecondaryButton(props) {
    const { size = 'lg', href='#', children, additional = null } = props
    if (size == 'lg') {
        return (
            <a href={href} className={"block max-w-[320px] lg:w-[320px] font-semibold text-light-orange-color bg-light-green-color py-2 text-center uppercase text-xl " + additional} target="_blank">
                {children}
            </a>
        )
    }
    else if (size == 'sm') {
        return (
            <a href={href} className={"block max-w-[120px] lg:w-[120px] font-semibold text-dark-green-color bg-light-green-color py-2 text-center uppercase " + additional} target="_blank">
                {children}
            </a>
        )
    }
}