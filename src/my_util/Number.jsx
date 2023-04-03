export function Number(props) {
    const {children} = props
    return (
        <div href="" className="relative w-fit pb-4 pr-4">
            <h1 className="lg:text-5xl text-4xl text-dark-green-color font-semibold relative z-[2]">{children}.</h1>
            <div className="bg-orange-color w-full h-2/3 absolute bottom-0 left-0 right-0 z-[1]"></div>
        </div>
    )
}