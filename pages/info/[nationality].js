import { useRouter } from "next/router"
import { useEffect } from "react"
import { relationship } from "../../data/data"
import * as _ from "lodash"
import NavBar from "../../components/navbar"
import Footer from "../../components/footer"
import Comment from "../../components/comment"
import Consultant from "../../components/consultant"
import Recommendation from "../../components/recommendation"

export default function InformationPage({ relationshipData }) {
    const router = useRouter()
    const { nationality, destination, jobType } = router.query
    const styles = {
        rectangle: {
            width: '50px',
            height: '50px',
        }
    }

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
            <div className="px-[10vw] py-[2vw] min-h-[35vw] w-full w-full grid grid-cols-12 gap-[5vw]">
                <div className="col-span-9 flex flex-col gap-[5vh]">
                    <div className="flex flex-col">
                        <h1 className="lg:text-[1.5vw] font-semibold">{destination}</h1>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet L ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsumorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="lg:text-[1.5vw] font-semibold">Digital Nomad Visa</h1>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="flex flex-col gap-[5vh]">
                        <div>
                            <h1 className="lg:text-[1.5vw] font-semibold">Taxation</h1>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="h-[30vh] w-auto flex flex-col w-full rounded-md border-2 m-5">
                            <div className="flex flex-row my-2 mx-4 justify-between">
                                <p className="font-semibold">Consultants</p>
                                <p className="font-semibold underline text-blue-500">more</p>
                            </div>
                            <div className="flex flex-row justify-between pl-10 pr-10 pb-3 h-full">
                                <Consultant className="h-full" img='/profile.png' name="mike" phone="+46705555" email="mikess2@gmail.com" />
                                <Consultant img='/profile.png' name="mike" phone="+46705555" email="mikess2@gmail.com" />
                                <Consultant img='/profile.png' name="mike" phone="+46705555" email="mikess2@gmail.com" />
                                <Consultant img='/profile.png' name="mike" phone="+46705555" email="mikess2@gmail.com" />
                                <Consultant img='/profile.png' name="mike" phone="+46705555" email="mikess2@gmail.com" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="lg:text-[1.5vw] font-semibold">Other countries recommended to you</h1>
                        <div className="grid grid-cols-4 gap-4 mt-5 px-10">
                            <Recommendation img='/Denmark.jpg' name="Denmark" description="Also nordic country" />
                            <Recommendation img='/Denmark.jpg' name="Norway" description="sss" />
                            <Recommendation img='/Denmark.jpg' name="Finland" description="sss" />
                            <Recommendation img='/Denmark.jpg' name="Estonia" description="sss" />
                            <Recommendation img='/Denmark.jpg' name="Hungary" description="sss" />

                        </div>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 flex flex-col w-full rounded-md border-2 gap-[1vh]" >
                    <p className="pl-3 pt-1.5 font-semibold">Comments</p>
                    <Comment className="w-full" img='/next.png' name="ss" time="ssss" />
                    <Comment className="w-full" img='/next.png' name="ss" time="ssss" />
                    <Comment className="w-full" img='/next.png' name="ss" time="ssss" />
                    <Comment className="w-full" img='/next.png' name="ss" time="ssss" />
                    <div className="grid grid-cols-4 mt-auto  h-[5vh] w-full">
                        <div className="col-span-3 m-1">
                            <input className='w-full border-2 rounded-md h-full pl-2' placeholder="Leave a comment..." type="text" />
                        </div>
                        <div className="col-span-1 m-1">
                            <button className='w-full bg-[#FD5F00] text-white font-medium h-full rounded-md border-2 border-black'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const { nationality, destination, jobType } = context.query

    let relationshipData = relationship.find(rel => rel["Country A"] === nationality && rel["Country B"] === destination)

    if (!relationshipData) relationshipData = relationship.find(rel => rel["Country A"] === destination && rel["Country B"] === nationality)

    return {
        props: { relationshipData }
    }
}