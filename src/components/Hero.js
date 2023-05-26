'use client'
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { FaConciergeBell } from "react-icons/fa";

export default function Hero() {
  return (
    <div className='mt-26 h-[70vh] w-full'>
      <Carousel slide={false} leftControl=" " rightControl=" " className="scale-105" indicators={false}>
        <div className='h-full z-20 w-full flex items-end'>
          <div className='font-cormorant z-30 ml-64'>
            <p className='text-7xl'>Vinicola</p>
            <p className='text-4xl pl-2.5 pt-4'>Lo tiene todo</p>
            <p className="pl-3 pt-4 text-lg font-karla">La espectacularidad de <span className='font-cormorant'>La Vinícola Residencial</span> se ve reflejada en cada espacio.</p>
            <div className='flex w-4/5 h-32 pl-4 py-4'>
              <div className='border-r-2 my-6 flex justify-end pr-4 text-xl items-center'>
                <FaConciergeBell />
                <p className='pl-4'>Concierge</p>
              </div>
              <div className='border-r-2 ml-6 my-6 flex justify-end pr-4 text-xl items-center'>
                <FaConciergeBell />
                <p className='pl-4'>Concierge</p>
              </div>
              <div className='ml-6 my-6 flex justify-end pr-4 text-xl items-center'>
                <FaConciergeBell />
                <p className='pl-4'>Concierge</p>
              </div>
            </div>
          </div>
          <div className='z-10 blur-[80px] bg-slate-800 rounded-[50%] absolute top-96 left-4 h-[40vh] w-[60vw]'></div>
          <div className='z-10 blur-[80px] bg-slate-800 rounded-[50%] absolute top-96 h-[40vh] -left-4 w-[40vw]'>
          </div>
          <Image src='/hero1.jpg' fill className="object-cover z-0"/>
        </div>
        <div className='h-full w-full flex items-end'>
          <div className='z-10 blur-[80px] bg-secondary-blue rounded-[50%] absolute top-96 left-4 h-[40vh] w-[60vw]'></div>
          <div className='z-10 blur-[80px] bg-secondary-blue rounded-[50%] absolute top-96 h-[40vh] -left-4 w-[40vw]'></div>
          <Image src='/hero2.jpg' fill className="object-cover z-0"/>
        </div>
      </Carousel>
    </div>
  )
}