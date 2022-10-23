import { useRouter } from "next/router"
import { useEffect } from "react"
import { relationship } from "../../data/data"
import * as _ from "lodash"

export default function InformationPage({ res }) {
    const router = useRouter()
    const { nationality, destination, stayDuration, jobType } = router.query

    const records = []

    useEffect(() => {
        console.log(res)
    }, [])

    return (
        <div className="flex flex-col">
            <p>{nationality}</p>
            <p>{destination}</p>
            <p>{stayDuration}</p>
            <p>{jobType}</p>
        </div>
    )
}

export async function getServerSideProps() {
    const res = relationship.filter(rel => rel["Country A"] === "Sweden")

    return {
        props: { res }
    }
}