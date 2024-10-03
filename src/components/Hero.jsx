import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {heroVideo , smallHeroVideo} from '../utils';
import { useState } from "react";
import { useEffect } from "react";
// different videos for different device sizes

const Hero = () => {
    const [videoSrc , setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    // looks into the innerwidth of the window 
    const handleVideoSrcSet =()=>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo);
        }else{
            setVideoSrc(heroVideo);
        }
    }
    useEffect(()=>{
        window.addEventListener('resize' , handleVideoSrcSet);
        return() => {
            window.removeEventListener('resize' , handleVideoSrcSet);
        }
    },[])
    useGSAP(() => {
        gsap.to('#hero' , {
            opacity: 1 ,
            delay : 2
        })
        gsap.to('#cta' ,{
            opacity: 1,
            delay:2,
            y: -50
        })
    } ,[])
    // empty dependency array
  return (
    <section className="w-full nav-height bg-black relative pt-16">
        {/*come below Navbar*/}
        <div className="h-5/6 w-full flex-center flex-col">
        {/*h-5/6 => 83.3333 % height and appear one above another*/}
            <p id="hero" className="hero-title">iPhone 15 Pro</p>
            {/*hide it initially then animate it to appear*/}
            <div className="md:w-10/12 w-9/12 h-full">
                <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            {/* call to action */}
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero