import { useRouter } from "next/router"
import { useEffect } from "react"
import { relationship } from "../../data/data"
import * as _ from "lodash"
import NavBar from "../../components/navbar"
import Footer from "../../components/footer"
import Comment from "../../components/comment"
import Consultant from "../../components/consultant"
import Recommendation from "../../components/recommendation"


function LoremIpsum({ relationshipData }) {
    return (
        <p>There is a taxtion treaty between {relationshipData["Country A"]} and {relationshipData["Country B"]} that was established in {relationshipData["Effective"]}.</p>
    )
}

function NotFound({ countryA, countryB }) {
    return (
        <p>There is no taxation treaty between {countryA} and {countryB}.</p>
    )
}

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
                        <div className="grid grid-cols-5">
                            <div className="col-span-4 ">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet gravida mauris sit amet cursus. Curabitur rhoncus convallis dolor sit amet aliquet. Aenean nec blandit dolor. Aenean interdum arcu leo, ut elementum nibh suscipit eleifend. Donec egestas vel nisi ut varius. Aliquam nec purus sed felis dapibus efficitur vel cursus justo. Nam eleifend dignissim fringilla. Quisque non finibus ligula. Ut eget dictum nisi, eget vestibulum purus. Curabitur aliquam est justo, nec venenatis mi tempus sit amet.</p>
                                <p className="pt-5">Aliquam sollicitudin ipsum ut velit interdum tempus. Duis tempor, ex vel consequat mattis, felis neque iaculis sapien, sit amet venenatis diam urna quis mauris. Donec gravida pharetra tellus eu bibendum. Nullam dictum mi vel accumsan gravida. Phasellus mollis nisi at ultrices congue. Aliquam sit amet nibh vel sem euismod ornare. Cras sollicitudin dapibus erat in finibus.</p>
                            </div>
                            <div className="pl-5 col-span-1 flex">
                                 <img src='/Denmark.jpg' alt="star" className="img-responsive h-[25vh] object-contain pl-1 justify-self-center self-center" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="lg:text-[1.5vw] font-semibold">Digital Nomad Visa</h1>
                        <div className="col-span-4 ">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet gravida mauris sit amet cursus. Curabitur rhoncus convallis dolor sit amet aliquet. Aenean nec blandit dolor. Aenean interdum arcu leo, ut elementum nibh suscipit eleifend. Donec egestas vel nisi ut varius. Aliquam nec purus sed felis dapibus efficitur vel cursus justo. Nam eleifend dignissim fringilla. Quisque non finibus ligula. Ut eget dictum nisi, eget vestibulum purus. Curabitur aliquam est justo, nec venenatis mi tempus sit amet.</p>
                                <p className="pt-5">Aliquam sollicitudin ipsum ut velit interdum tempus. Duis tempor, ex vel consequat mattis, felis neque iaculis sapien, sit amet venenatis diam urna quis mauris. Donec gravida pharetra tellus eu bibendum. Nullam dictum mi vel accumsan gravida. Phasellus mollis nisi at ultrices congue. Aliquam sit amet nibh vel sem euismod ornare. Cras sollicitudin dapibus erat in finibus.</p>
                            </div>

                    </div>
                    <div className="flex flex-col gap-[5vh]">
                        <div>
                            <h1 className="lg:text-[1.5vw] font-semibold">Taxation</h1>
                            {
                                !relationshipData ?
                                    <NotFound countryA={nationality} countryB={destination} /> :
                                    <LoremIpsum relationshipData={relationshipData} />
                            }
                            <p>Nunc aliquam fringilla massa. Fusce cursus lobortis felis ac eleifend. Curabitur sit amet nisi quis lacus luctus semper at quis ex. Proin ac ante efficitur ex hendrerit feugiat non ut lacus. Nunc porta enim sit amet dolor dictum, id lobortis diam ultrices. Suspendisse tellus nulla, placerat eget mi vitae, volutpat maximus massa. Praesent posuere tristique leo vel mollis. Nullam nec fringilla ipsum, nec sollicitudin tortor. Vivamus fringilla lacinia elit in vestibulum. Aliquam ac arcu congue ipsum laoreet venenatis. Nullam dignissim dictum metus. Integer vitae dignissim metus. Mauris quis pellentesque enim. Cras ut ultricies sem, vulputate ultricies turpis. Aenean sit amet sem ex. Nulla sed pretium ante.</p>
                            <p className="pt-5">Suspendisse sodales, erat sit amet bibendum scelerisque, nibh urna volutpat lorem, at luctus metus mauris eget lacus. Mauris condimentum congue sagittis. Nulla dapibus mi eget lorem ultricies, id ultricies odio pulvinar. Phasellus et tincidunt mi, non luctus ex. Maecenas in aliquet leo. Duis pulvinar nulla quis dui porttitor, at placerat augue bibendum. In aliquet massa in urna imperdiet, id dictum ante euismod. Nulla finibus risus ut eros varius varius. Suspendisse pretium diam eu mi auctor, sit amet faucibus neque condimentum. Integer ac nisi diam. Phasellus porttitor, diam id convallis ornare, urna ligula venenatis nulla, ac dapibus magna est laoreet velit. Nam ipsum purus, lobortis ut sagittis et, pretium non tortor. Ut tristique enim at enim ultrices elementum. Ut ullamcorper nisl in gravida consectetur. Sed eu porttitor augue.</p>
                        </div>
                        <div className=" w-auto flex flex-col w-full rounded-md border-2">
                            <div className="flex flex-row my-2 mx-4 justify-between">
                                <p className="font-bold text-[1.8vh]">Consultants</p>
                                <p className="font-semibold underline text-blue-500">more</p>
                            </div>
                            <div className="flex flex-row justify-between pl-3 pr-3 pb-5 h-full">
                                <img src='/left-arrow.png' alt="left" className="img-responsive h-[2.5vh] object-contain pl-1 self-center" />
                                <Consultant className="h-full" img='/Ellipse 3.png' name="Lars Nilsson, Sweden" job="Immigration Lawyer"
                                    rate="4.0" reviewsCount="10" cost="400" language="Swedish, English" description='"Specialised at immigration laws, taxation issues in Sweden."' />
                                <Consultant className="h-full" img='/Ellipse 2.png' name="Jason Chen, China" job="Certified Public Accountant"
                                    rate="4.2" reviewsCount="6" cost="400" language="Chinese, English" description='"Specialised at taxation, social security and insurance issues of East Asia."' />
                                <Consultant className="h-full" img='/Ellipse 5.jpg' name="Rob Brown, USA" job="Relocation Consultant"
                                    rate="4.5" reviewsCount="12" cost="600" language="English" description='"Specialised at immigration laws, taxation issues in North America."' />
                                <Consultant className="h-full" img='/Ellipse 4.png' name="Olivia Smith, Canada" job="Immigration Lawyer"
                                    rate="4.1" reviewsCount="7" cost="350" language="English, Spanish" description='"Specialised at immigration laws and regulations in Canada."' />
                                <Consultant className="h-full" img='/Ellipse 1.jpg' name="Auður Jónsdóttir, Iceland" job="Certified Public Accountant"
                                    rate="4.5" reviewsCount="8" cost="300" language="Icelandic, English" description='"Specialised at taxation issues in Nordic countries."' />
                                <img src='/right-arrow.png' alt="right" className="img-responsive h-[2.5vh] object-contain pl-1 self-center" />
                            </div>
                        </div>
                    </div>
                    {/*<div className="flex flex-col">
                        <h1 className="lg:text-[1.5vw] font-semibold">Other countries recommended to you</h1>
                        <div className="grid grid-cols-4 gap-4 mt-5 px-10">
                            <Recommendation img='/Denmark.jpg' name="Denmark" description="Also nordic country" />
                            <Recommendation img='/Denmark.jpg' name="Norway" description="sss" />
                            <Recommendation img='/Denmark.jpg' name="Finland" description="sss" />
                            <Recommendation img='/Denmark.jpg' name="Estonia" description="sss" />
                            <Recommendation img='/Denmark.jpg' name="Hungary" description="sss" />

                        </div>
                        
    </div>*/}
                    <div className="flex flex-col gap-[5vh]">
                        <div>
                            <h1 className="lg:text-[1.5vw] font-semibold">Insurance</h1>
                            <p>Nunc aliquam fringilla massa. Fusce cursus lobortis felis ac eleifend. Curabitur sit amet nisi quis lacus luctus semper at quis ex. Proin ac ante efficitur ex hendrerit feugiat non ut lacus. Nunc porta enim sit amet dolor dictum, id lobortis diam ultrices. Suspendisse tellus nulla, placerat eget mi vitae, volutpat maximus massa. Praesent posuere tristique leo vel mollis. Nullam nec fringilla ipsum, nec sollicitudin tortor. Vivamus fringilla lacinia elit in vestibulum. Aliquam ac arcu congue ipsum laoreet venenatis. Nullam dignissim dictum metus. Integer vitae dignissim metus. Mauris quis pellentesque enim. Cras ut ultricies sem, vulputate ultricies turpis. Aenean sit amet sem ex. Nulla sed pretium ante.</p>
                            <p className="pt-5">Suspendisse sodales, erat sit amet bibendum scelerisque, nibh urna volutpat lorem, at luctus metus mauris eget lacus. Mauris condimentum congue sagittis. Nulla dapibus mi eget lorem ultricies, id ultricies odio pulvinar. Phasellus et tincidunt mi, non luctus ex. Maecenas in aliquet leo. Duis pulvinar nulla quis dui porttitor, at placerat augue bibendum. In aliquet massa in urna imperdiet, id dictum ante euismod. Nulla finibus risus ut eros varius varius. Suspendisse pretium diam eu mi auctor, sit amet faucibus neque condimentum. Integer ac nisi diam. Phasellus porttitor, diam id convallis ornare, urna ligula venenatis nulla, ac dapibus magna est laoreet velit. Nam ipsum purus, lobortis ut sagittis et, pretium non tortor. Ut tristique enim at enim ultrices elementum. Ut ullamcorper nisl in gravida consectetur. Sed eu porttitor augue.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 flex flex-col w-full h-[100vh] rounded-md border-2 gap-[1vh]" >
                    <p className="pl-3 pt-1.5 font-semibold">Comments</p>
                    <Comment className="w-full" img='/icon1.jpg' name="Lisa" time="2 days ago" comment='Fusce cursus lobortis felis ac eleifend. Curabitur sit amet nisi quis lacus luctus semper at quis ex. '/>
                    <Comment className="w-full" img='/icon2.jpg' name="Mike" time="one month ago" comment='Suspendisse sodales, erat sit amet bibendum scelerisque, nibh urna volutpat lorem, at luctus metus mauris eget lacus. ' />
                    <Comment className="w-full" img='/icon3.jpg' name="John" time="a year ago" comment='Ut tristique enim at enim ultrices elementum. Ut ullamcorper nisl in gravida consectetur. Sed eu porttitor augue!'/>
                    <Comment className="w-full" img='/icon4.jpg' name="Guest" time="2020.5.30" comment='Nec sollicitudin tortor?'/>
                    <Comment className="w-full" img='/icon4.jpg' name="Guest" time="2019.10.12" comment='Aliquam sollicitudin ipsum ut velit interdum tempus.'/>
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
    if (!relationshipData) relationshipData = null

    return {
        props: { relationshipData }
    }
}