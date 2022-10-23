export default function Consultant({ img, name, phone, email }) {

    return (
        <div className="grid grid-rows-7 h-full w-auto flex justify-center drop-shadow-lg self-center">
            <div className="row-span-4 flex bg-local bg-clip-border bg-slate-200 rounded-full self-center justify-self-center">
                <img src={img} alt="Avatar" className=" img-responsive h-[8vh] object-contain justify-center align-center" />
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto font-bold">{name}</p>
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] text-gray-500">{phone}</p>
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1vh] text-gray-500">{email}</p>
            </div>
        </div>

    )
}