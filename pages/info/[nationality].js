import { useRouter } from "next/router"
import { useEffect } from "react"
import { relationship } from "../../data/data"
import * as _ from "lodash"
import NavBar from "../../components/navbar"
import Footer from "../../components/footer"

export default function InformationPage({ relationshipData }) {
    const router = useRouter()
    const { nationality, destination, jobType } = router.query

    const records = []

    return (
        <div>
            <NavBar />
            <div className='h-[35vh] w-full bg-[url("/infoPage.png")] bg-no-repeat bg-cover bg-center'></div>
            <div className='flex flex-row items-center justify-center gap-[2vw] w-full text-black py-[2vw]'>
                <h1 className='text-[4vh] text-center lg:text-[3rem] lg:w-[20%]'>{nationality}</h1>
                <div>
                    <img src={'/next.png'} alt="to" className="img-responsive w-[4vh] justify-center align-center" />
                </div>
                <h1 className='text-[4vh] text-center lg:text-[3rem] lg:w-[20%]'>{destination}</h1>
            </div>
            <div className="px-[2vw] py-[2vw] min-h-screen w-full">
                
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { nationality, destination, jobType } = context.query
    // console.log(nationality, destination, jobType)

    const relationshipData = relationship.find(rel => rel["Country A"] === nationality && rel["Country B"] === destination)

    return {
        props: { relationshipData }
    }
}