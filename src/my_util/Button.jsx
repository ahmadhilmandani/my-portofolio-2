export function Button(props) {
    // const {childern} = props
    return (
        <a href="" className="font-bold bg-red-400 px-6 py-2 text-center mx-auto block w-fit">{props.children}</a>
    )
}