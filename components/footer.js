export default function Footer() {

    return (
        <div className="grid grid-cols-12 h-[10vh] w-full justify-items-center content-center drop-shadow-lg">
            <div className="col-span-2">
                <div className="flex flex-col self-center">
                    <img src='/bookLogo.png' alt="logo" className="img-responsive h-[6vh] object-contain" />
                    <p className="font-semibold">© 2022 Digital Nomad Legalbook</p>
                </div>

            </div>
            <div className="col-start-10 col-span-3">
                <button className="bg-[#D9D9D9] py-[2vw] px-[2vh] lg:py-[1rem] lg:px-[2rem] rounded-lg text-[2vw] lg:text-lg">Contact</button>
            </div>
        </div>
    )
}