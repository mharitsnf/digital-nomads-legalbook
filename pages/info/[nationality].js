import { useRouter } from "next/router"

export default function InformationPage() {
    const router = useRouter()
    const { nationality, destination, stayDuration, jobType } = router.query

    return (
        <div className="flex flex-col">
            <p>{nationality}</p>
            <p>{destination}</p>
            <p>{stayDuration}</p>
            <p>{jobType}</p>
        </div>
    )
}