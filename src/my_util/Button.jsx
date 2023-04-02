export function Button(props) {
    const { size = 'lg', children } = props
    if (size == 'lg') {
        return (
            <a href="" className="font-bold text-light-orange-color bg-orange-color px-8 py-2 text-center uppercase text-xl">
                {children}
            </a>
        )
    }
    else if (size == 'sm') {
        return (
            <a href="" className="font-bold text-dark-green-color bg-light-green-color px-4 py-2 text-center uppercase">
                {children}
            </a>
        )
    }
}