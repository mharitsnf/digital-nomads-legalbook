export default function Footer() {

    return (
        <div className="grid grid-cols-12 h-[10vh] w-full justify-items-center content-center drop-shadow-lg">
            <div className="col-span-2">
                <p className="text-lg align-top">Logo</p>
            </div>
            <div className="col-start-10 col-span-3">
                <button className="bg-slate-500 py-[1rem] px-[2rem] rounded-lg text-white">Contact</button>
            </div>
        </div>
    )
}