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

    useEffect(() => {
        console.log(relationshipData)
    }, [])

    return (
        <div>
            <NavBar />
            <div className='h-[25vh] w-full flex justify-center flex-col bg-[url("/infoPage.png")] bg-no-repeat bg-cover bg-center'></div>
            <div className='flex flex-row gap-[2vw] self-center w-[50%] text-black'>
                <h1 className='text-[4vh] lg:text-[3rem] lg:w-[20%]'>{nationality}</h1>
                <div ><img src={'/next.png'} alt="to" className="img-responsive w-[4vh] justify-center align-center"/></div>
                <h1 className='text-[4vh] lg:text-[3rem] lg:w-[20%]'>{destination}</h1>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { nationality, destination, jobType } = context.query
    console.log(nationality, destination, jobType)

    const relationshipData = relationship.find(rel => rel["Country A"] === nationality && rel["Country B"] === destination)
    
    return {
        props: { relationshipData }
    }
}