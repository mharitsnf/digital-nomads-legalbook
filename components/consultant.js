export default function Consultant({ img, name, job, rate, reviewsCount, cost, language, description }) {

    return (
        <div className="grid grid-rows-12 h-full w-[8.7vw] flex gap-1 justify-center drop-shadow-lg self-center">
            <div className="row-span-4 flex bg-local bg-clip-border bg-slate-200 rounded-full self-center justify-self-center">
                <img src={img} alt="Photo" className="rounded-full img-responsive h-[7.5vh] object-contain justify-center align-center" />
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[1.5vh] w-auto font-bold">{name}</p>
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <p className="text-[0.5vh] w-auto font-normal">{job}</p>
                <img src='/verify.png' alt="verified" className="pl-2 img-responsive h-[1.5vh] object-contain self-center" />
            </div>
            <div className="row-span-1 w-full flex flex-row justify-between items-center">
                <div className="flex flex-row">
                    <img src='/star.png' alt="star" className="img-responsive h-[1vh] object-contain pl-1 justify-center self-center" />
                    <p className="text-[1vh] pl-2 w-auto">{rate}</p>
                    <p className="text-[1vh] pl-1 w-auto text-gray-400">({reviewsCount})</p>
                </div>
                <img src='/line.png' alt="line" className=" img-responsive h-[1.5vh] object-contain self-center" />
                <p className="text-[1vh] w-auto justify-self-end">{cost}sek/h</p>

            </div>
            <div className="row-span-1 w-full flex align-items-center">
                <p className="text-[1vh] w-auto text-gray-400">Speaks: {language}</p>
            </div>
            <div className="row-span-3 w-full flex align-items-center justify-center">
                <p className="text-[1vh] w-auto">{description} <span className="text-blue-600 underline">Read more</span></p>
            </div>
            <div className="row-span-1 w-full flex align-items-center justify-center">
                <button className='w-full bg-[#FD5F00] text-white text-[1.5vh] font-normal h-[2.8vh] mt-2 rounded-md'>Message</button>
            </div>
        </div>

    )
}