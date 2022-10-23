export default function Comment({name, time}) {

    return (
        <div className="grid col-span-4 grid-cols-4 w-[70%] justify-items-center content-center drop-shadow-lg self-center">
           <div className="col-span-1 flex ">
            <img src={'/next.png'} alt="to" className="img-responsive w-full justify-center align-center" />
            </div> 
            <div className="col-span-3 grid grid-rows-3 w-full">
                <div className="row-span-1 grid grid-col-3">
                    <div className="col-span-1 h-full flex self-center content-center items-center">
                        <p className="text-[2vh]">{name}</p>
                    </div>
                    <div className="col-start-3 col-span-1 h-full flex justify-self-end h-full self-center content-center items-center">
                        <p className="text-[1vh]">{time}</p>
                    </div>
                </div>
                <div className="row-span-2">
                    <p className="text-[1vh] align-center">It is really cool</p>
                </div>
            </div>
        </div>
    )
}