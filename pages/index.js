import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const[nationality, setNationality] = useState('')
  const[destination, setDestination] = useState('')
  const[stayDuration, setStayDuration] = useState('')
  const[jobType, setJobType] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    router.push(`/info/${nationality}?destination=${destination}&stayDuration=${stayDuration}&jobType=${jobType}`)
  }

  return (
    <div className=''>
      <NavBar />

      <div className='h-[80vh] w-full flex justify-center flex-col bg-[url("/home-wallpaper.png")] bg-no-repeat bg-cover bg-center'>

        <div className='flex flex-col gap-[2vw] self-center w-[80%] text-white'>
          <h1 className='text-[4vh] lg:text-[3rem] lg:w-[60%]'>Set off your nomad life at minimal cost with our legal support.</h1>

          <form onSubmit={onSubmit} className='relative hidden lg:flex justify-center bg-[#13334C] h-[25vh] p-[2rem] gap-[4rem] rounded-md'>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label>Nationality</label>
              <input className='w-full bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' onChange={event => setNationality(event.target.value)} type="text" />
            </div>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label>Destination</label>
              <input className='w-full bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' onChange={event => setDestination(event.target.value)} type="text" />
            </div>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label>Stay duration</label>
              <input className='w-full bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' onChange={event => setStayDuration(event.target.value)} type="text" />
            </div>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <label>Job type</label>
              <input className='w-full bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' onChange={event => setJobType(event.target.value)} type="text" />
            </div>
            <div className='flex flex-col justify-center gap-[.5rem]'>
              <button className='w-full bg-[#FD5F00] py-[1.5vw] px-[3vw] rounded-lg'>Search</button>
            </div>
          </form>
        </div>

      </div>

      <Footer />
    </div>
  )
}