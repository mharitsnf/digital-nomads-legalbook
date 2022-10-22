import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <NavBar />

      <div className='h-[80vh] w-full flex justify-center flex-col bg-[url("/home-wallpaper.png")] bg-no-repeat bg-cover'>

        <div className='flex flex-col self-center w-[80%] text-white'>
          <h1 className='text-[3rem] w-[60%]'>Set off your nomad life at minimal cost with our legal support.</h1>

          <form className='relative bg-[#13334C] h-[25vh] p-[2rem] flex justify-center gap-[4rem] rounded-md'>
            <div className='h-full flex flex-col justify-center gap-[.5rem]'>
              <label>Nationality</label>
              <input className='bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' type="text" />
            </div>
            <div className='h-full flex flex-col justify-center gap-[.5rem]'>
              <label>Destination</label>
              <input className='bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' type="text" />
            </div>
            <div className='h-full flex flex-col justify-center gap-[.5rem]'>
              <label>Stay duration</label>
              <input className='bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' type="text" />
            </div>
            <div className='h-full flex flex-col justify-center gap-[.5rem]'>
              <label>Job type</label>
              <input className='bg-[#13334C] border-2 rounded-md py-[.2rem] px-[.6rem]' type="text" />
            </div>
            <div className='h-full flex flex-col justify-center gap-[.5rem]'>
              <button className='bg-[#FD5F00] py-[1rem] px-[4rem] rounded-lg'>Search</button>
            </div>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  )
}