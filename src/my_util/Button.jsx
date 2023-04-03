export function PrimaryButton(props) {
    const { size = 'lg', children, additional = null } = props
    if (size == 'lg') {
        return (
            <a href="" className={"block max-w-[320px] font-semibold text-light-orange-color bg-orange-color py-2 text-center uppercase text-xl " + additional}>
                {children}
            </a>
        )
    }
    else if (size == 'sm') {
        return (
            <a href="" className={"block max-w-[100px] text-sm font-semibold text-light-orange-color bg-orange-color py-2 text-center uppercase " + additional}>
                {children}
            </a>
        )
    }
}

export function SecondaryButton(props) {
    const { size = 'lg', children, additional = null } = props
    if (size == 'lg') {
        return (
            <a href="" className={"block max-w-[320px] font-semibold text-light-orange-color bg-light-green-color py-2 text-center uppercase text-xl " + additional}>
                {children}
            </a>
        )
    }
    else if (size == 'sm') {
        return (
            <a href="" className={"block max-w-[100px] font-semibold text-dark-green-color bg-light-green-color py-2 text-center uppercase " + additional}>
                {children}
            </a>
        )
    }
}