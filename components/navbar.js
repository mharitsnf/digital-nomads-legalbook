export default function NavBar() {

    return (
        <div className="grid grid-cols-12 h-[10vh] w-full justify-items-center content-center shadow-lg">
            <div className="col-span-3 flex flex-row">
                <img src='/bookLogo.png' alt="logo" className=" img-responsive h-[6vh] object-contain justify-center self-center" />
                <a href="/" className="pl-3 self-center font-semibold text-[2vh]">Digital Nomad Legalbook</a>
            </div>
            <div className="col-start-10 col-span-3">
                <button className="bg-[#D9D9D9] py-[2vw] px-[2vh] lg:py-[1rem] lg:px-[2rem] rounded-lg text-[2vw] lg:text-lg">Language</button>
            </div>
        </div>
    )
}