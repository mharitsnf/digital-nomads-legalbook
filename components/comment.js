export default function Comment() {

    return (
        <div className="grid col-span-4 grid-cols-4 h-[8vh] w-[70%] justify-items-center content-center drop-shadow-lg self-center">
            {/* <div className="col-span-1">
            {<img src={'/next.png'} alt="to" className="img-responsive w-full justify-center align-center" />}
            </div> */}
            <div className="flex flex-col">
                <div className="flex">
                    <div className="col-span-1 h-full">
                        <p className="text-[2vh] lg:text-lg ">Name</p>
                    </div>
                    <div className="col-start-2 col-span-1 h-full ">
                        <p className="text-[1vh] ">Just now</p>
                    </div>
                </div>
                <div className="">
                    <p className="text-[1vh] lg:text-lg align-center">It is really cool</p>
                </div>
            </div>
        </div>
    )
}