import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {rightImg, watchImg} from '../utils'
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title' , {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#highlights", // Trigger animation when this section is scrolled into view
        start: "top center", // Start animation when top of section hits the center of the viewport
        toggleActions: "play none none none", // Play the animation on scroll, don't replay or reverse
      }
    } )
    gsap.to('.link' , {
      opacity: 1,
      y: 0 ,
      duration : 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#highlights",
        start: "top center",
        toggleActions: "play none none none"
      }
    })
  },[])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      {/* overflow hidden so that we dont see any scroll bars */}
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
        <h1 id="title" className="section-heading">Get the highlights.</h1>
        <div className="flex flex-wrap items-end gap-5">
          <p className="link">
            Watch the film
            <img src={watchImg} alt="watch" className="ml-2"/>
          </p>
          <p className="link">
            Watch the event
            <img src={rightImg} alt="right" className="ml-2"/>
          </p>
        </div>
        </div>
          
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights