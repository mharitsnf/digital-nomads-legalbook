export default function Comment({ name, time }) {

    return (
        <div className="grid col-span-4 grid-cols-4 w-[70%] justify-items-center content-center drop-shadow-lg self-center">
            <div className="col-span-1">
                <img src={'/next.png'} alt="to" className="img-responsive h-[50%] w-auto justify-center align-center" />
            </div>
            <div className="col-span-3 grid grid-rows-4 w-full">
                <div className="row-span-1 grid grid-col-3">
                    <div className="col-span-1 h-full">
                        <p className="text-[2vh] lg:text-lg ">{name}</p>
                    </div>
                    <div className="col-start-2 col-span-1 h-full">
                        <p className="text-[1vh]">{time}</p>
                    </div>
                </div>
                <div className="row-span-3 h-min">
                    <p className="text-[1vh] lg:text-lg align-center">It is really cool</p>
                </div>
            </div>
        </div>
    )
}