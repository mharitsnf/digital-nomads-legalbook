export default function Consultant({ img, name,job,rate, reviewsCount,cost,language,description}) {

    return (
        <div className="grid grid-rows-12 h-full w-auto flex justify-center drop-shadow-lg self-center">
            <div className="row-span-4 flex bg-local bg-clip-border bg-slate-200 rounded-full self-center justify-self-center">
                <img src={img} alt="Photo" className=" img-responsive h-[7vh] object-contain justify-center align-center" />
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto font-bold">{name}</p>
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto font-bold">{job}</p>
                <img src='/verify.png' alt="verified" className=" img-responsive h-[1.5vh] object-contain justify-center align-center" />
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto font-bold">{rate}</p>
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto font-bold">{name}</p>
            </div>
            <div className="row-span-3 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto font-bold">{name}</p>
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto font-bold">{name}</p>
            </div>
        </div>

    )
}