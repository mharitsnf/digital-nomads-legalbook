

export default function NavBar() {

    return (
        <div className="grid grid-cols-12 h-[10vh] w-full justify-items-center content-center shadow-lg">
            <div className="col-span-2">
                <p className="text-lg align-top">Logo</p>
            </div>
            <div className="col-start-10 col-span-3">
                <button className="bg-[#D9D9D9] py-[1rem] px-[2rem] rounded-lg">Language</button>
            </div>
        </div>
    )
}