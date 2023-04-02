export function Number(props) {
    const {children} = props
    return (
        <div href="" className="relative w-fit pr-4 pb-4">
            <h1 className="text-6xl text-dark-green-color font-bold relative z-[2]">{children}.</h1>
            <div className="bg-orange-color w-full h-1/2 absolute bottom-0 left-0 right-0 z-[1]"></div>
        </div>
    )
}