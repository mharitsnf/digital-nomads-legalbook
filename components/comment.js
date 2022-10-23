export default function Comment({img, name, time, comment}) {

    return (
        <div className="grid grid-cols-4 w-[90%] justify-items-center content-center drop-shadow-lg self-center">
           <div className="col-span-1 flex bg-local bg-clip-border bg-slate-200 w-[6vh] h-[6vh] rounded-full self-center justify-self-center">
            <img src={img} alt="Avatar" className="rounded-full img-responsive object-contain justify-center align-center" />
            </div> 
            <div className="col-span-3 grid grid-rows-4 w-full">
                <div className="pl-2 row-span-1 grid grid-col-3">
                    <div className="col-span-1 h-full flex self-center content-center items-center">
                        <p className="text-[1vh] font-bold">{name}</p>
                    </div>
                    <div className="col-start-3 col-span-1 h-full flex justify-self-end self-center content-center items-center">
                        <p className="text-[1vh]">{time}</p>
                    </div>
                </div>
                <div className="pl-2 row-span-3">
                    <p className="text-[1vh] align-center">{comment}</p>
                </div>
            </div>
        </div>
    )
}