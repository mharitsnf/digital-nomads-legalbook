import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'
import { countries, relationship } from "../data/data"
import Select from 'react-select'
import toast, { Toaster } from 'react-hot-toast';

export default function Home({ countryOptions }) {
  const router = useRouter()
  const destinationInputRef = useRef()
  const [nationality, setNationality] = useState('')
  const [destination, setDestination] = useState('')
  // const [stayDuration, setStayDuration] = useState('')
  const [jobType, setJobType] = useState('')
  const [countryOrigins, setCountryOrigins] = useState(countryOptions)
  const [countryDestinations, setCountryDestinations] = useState([])

  const onSubmit = (event) => {
    event.preventDefault()

    if (!nationality || !destination) {
      toast.error("Please fill all the forms!")
      return
    }

    router.push(`/info/${nationality}?destination=${destination}&jobType=${jobType}`)
  }

  const onCountryOriginsChange = (newVal) => {
    setNationality(newVal.value)

    destinationInputRef.current.clearValue()
    let newCDests = relationship.filter(item => item['Country A'] === newVal.value)
    newCDests = newCDests.map(item => {
      return { value: item['Country B'], label: item['Country B'] }
    })
    setCountryDestinations(newCDests)

    console.log(nationality, destination)
  }

  const onCountryDestinationChange = (newVal) => {
    if (newVal) {
      setDestination(newVal.value)
    }

  }

  return (
    <div className=''>
      <Toaster />

      <NavBar />

      <div className='h-[80vh] w-full flex justify-center flex-col bg-[url("/home-wallpaper.png")] bg-no-repeat bg-cover bg-center'>

        <div className='flex flex-col gap-[2vw] self-center w-[80%]'>
          <h1 className='text-[4vh] lg:text-[3rem] lg:w-[60%] text-white'>Set off your nomad life at minimal cost with our legal support.</h1>

          <form onSubmit={onSubmit} className='relative hidden lg:flex justify-evenly bg-[#13334C] h-[25vh] p-[2rem] gap-[4rem] rounded-lg'>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label className='text-white'>Nationality</label>
              <Select onChange={onCountryOriginsChange} className='w-[20vw]' options={countryOrigins} />
            </div>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label className='text-white'>Destination</label>
              <Select ref={destinationInputRef} onChange={onCountryDestinationChange} className='w-[20vw]' options={countryDestinations} />
            </div>
            {/* <div className='flex flex-col justify-center gap-[.5rem]'>
              <label>Stay duration</label>
              <input className='w-full bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' onChange={event => setStayDuration(event.target.value)} type="text" />
            </div> */}
            {/* <div className='flex flex-col justify-center gap-[.5rem] text-white'>
              <label className=''>Job type</label>
              <input className='w-[12.5vw] bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' onChange={event => setJobType(event.target.value)} type="text" />
            </div> */}
            <div className='flex flex-col justify-center gap-[.5rem] text-white'>
              <button className='w-full bg-[#FD5F00] py-[1vw] px-[3vw] rounded-lg'>Search</button>
            </div>
          </form>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const uniqueCountries = [...new Set(relationship.map(item => item['Country A']))]
  const countryOptions = uniqueCountries.map(item => {
    return { value: item, label: item }
  })

  return {
    props: {
      countryOptions
    }
  }
}