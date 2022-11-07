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

export default function Home({ countryOptions, jobOptions }) {
  const router = useRouter()
  const [nationality, setNationality] = useState('')
  const [destination, setDestination] = useState('')
  const [jobType, setJobType] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    if (!nationality || !destination || !jobType) {
      toast.error("Please fill all the forms!")
      return
    }

    const relationshipData = relationship.find(rel => rel["Country A"] === nationality && rel["Country B"] === destination)
    if (!relationshipData) {
      router.push(`/404/`)
      return
    }

    router.push(`/info/${nationality}?destination=${destination}&jobType=${jobType}`)
  }

  const onCountryOriginsChange = (newVal) => {
    setNationality(newVal.value)
  }

  const onCountryDestinationChange = (newVal) => {
    setDestination(newVal.value)
  }

  const onJobtypeChange = (newVal) => {
    setJobType(newVal.value)
  }

  return (
    <div className=''>
      <Toaster />

      <NavBar />

      <div className='h-[80vh] w-full flex justify-center flex-col bg-[url("/home-wallpaper.png")] bg-no-repeat bg-cover bg-center'>

        <div className='flex flex-col gap-[2vw] self-center w-[80%]'>
          <h1 className='text-[4vh] font-semibold lg:text-[3rem] lg:w-[60%] text-white'>Set off your nomad life at minimal cost with our legal support.</h1>

          <form onSubmit={onSubmit} className='relative hidden lg:flex justify-evenly bg-[#13334C] h-[25vh] p-[2rem] gap-[4rem] rounded-lg'>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label className='text-white'>Nationality</label>
              <Select onChange={onCountryOriginsChange} className='w-[12.5vw]' options={countryOptions} />
            </div>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label className='text-white'>Destination</label>
              <Select onChange={onCountryDestinationChange} className='w-[12.5vw]' options={countryOptions} />
            </div>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label className='text-white'>Job type</label>
              <Select onChange={onJobtypeChange} className='w-[12.5vw]' options={jobOptions} />
            </div>
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

  const jobOptions = [
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Freelancer", label: "Freelancer" },
    { value: "UI/UX", label: "UI/UX" },
    { value: "Data Scientist", label: "Data Scientist" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "Data Analyst", label: "Data Analyst" },
    { value: "Consultant", label: "Consultant" },
  ]

  return {
    props: {
      countryOptions,
      jobOptions
    }
  }
}