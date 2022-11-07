export default function Recommendation({ img, name, description}) {

    return (
        <div className="grid grid-rows-6 h-full w-auto flex justify-center drop-shadow-lg self-center">
            <div className="row-span-4 flex bg-local bg-clip-border bg-slate-200 rounded-full self-center justify-self-center">
                <img src={img} alt="Country" className="rounded-md img-responsive h-[12vh] object-contain justify-center align-center" />
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto font-bold self-center">{name}</p>
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] text-gray-400">{description}</p>
            </div>
        </div>

    )
}