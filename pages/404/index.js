import Footer from "../../components/footer"
import NavBar from "../../components/navbar"

export default function NotFoundPage() {

    return(
        <div>
            <NavBar />

            <div className='h-[80vh] w-full flex flex-col justify-center items-center'>
                <img src="/404.jpg" className="h-auto w-[33%]" />
                <p className="h-min">Relationship between countries not found!</p>
            </div>

            <Footer />
        </div>
    )
}