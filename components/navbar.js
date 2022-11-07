export default function NavBar() {

    return (
        <div className="grid grid-cols-12 h-[10vh] w-full justify-items-center content-center shadow-lg">
            <div className="col-span-2">
                <img src='/bookLogo.png' alt="logo" className=" img-responsive h-[6vh] object-contain justify-center align-center" />
            </div>
            <div className="col-start-10 col-span-3">
                <button className="bg-[#D9D9D9] py-[2vw] px-[2vh] lg:py-[1rem] lg:px-[2rem] rounded-lg text-[2vw] lg:text-lg">Language</button>
            </div>
        </div>
    )
}