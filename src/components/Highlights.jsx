import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {

  useGSAP(() => {
    gsap.to("#title",{
      opacity:1,
      y:0,
    })
    gsap.to(".link",{
      opacity:1,
      y:0,
      duration:1,
      stagger:0.25
    })

  }, [])

  return (
    <section id="highligts" className='w-=screen overflow-hidden h-full common-padding bg-zinc'>
      <div>
        <div className='mb-12 md:flex w-full items-end justify-between '>
          <h1 id="title" className='section-heading'>Get the highlits</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className='link'>Watch the film</p>
            <img src={watchImg} alt="wat" className='ml-2' />
            <p className='link'>Watch the event</p>
            <img src={rightImg} alt="right" className='ml-2' />
          </div>
        </div>

        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights
