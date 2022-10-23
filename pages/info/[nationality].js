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