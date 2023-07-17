import React, { useEffect } from 'react'
import './footer.css'
import video2 from"../../Assets/video2"
import {FiSend} from 'react-icons/fi'
import{MdOutlineTravelExplore} from 'react-icons/md'
import{AiOutlineTwitter} from 'react-icons/ai'
import{AiFillYoutube} from 'react-icons/ai'
import{AiFillInstagram} from 'react-icons/ai'
import{FaTripadvisor} from 'react-icons/fa'
import{FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import"aos/dist/aos.css"

const Footer = () => {

  useEffect(()=>{

    Aos.init({duration:2000})
    },[])
    



  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2}loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">

<div className="contactDiv flex ">
  <div  data-aos ="fade-up"    className="text">
    <small>KEEP IN TOUCH</small>
    <h2>Travel With Us </h2>
  </div>

  <div data-aos ="fade-up" className="inputDiv flex">
    <input type="text" placeholder="Enter Email Address" />
    <button className="btn flex"  type='submit' >
    SEND<FiSend className="icon"/>
    </button>
  </div>

</div>

<div className="footerCard flex">
  <div className="footerIntro flex">
    <div className="logoDiv">
      <a href="#" className="logo flex">
        <MdOutlineTravelExplore  className='icon' /> Travel.
      </a>
      
    </div>

<div  data-aos ="fade-up" className="footerParagraph">
  lorem Ipsum dolor sir amet ,consecture adipiscing elit, sed diamsajdsdescription ullamcorper
  fugaa hic cum volutatem ullam inventore eos fuga 
</div>
<div    data-aos ="fade-up" className="footerSocials flex">
  <AiOutlineTwitter className="icon" />
  <AiFillYoutube  className="icon" />
  <AiFillInstagram className="icon" />
  <FaTripadvisor className="icon" />


</div>


  </div>
  <div data-aos ="fade-up" className="footerlinks grid">
    <div data-aos ="fade-up"className="linkGroup">
      <span className="groupTitle">
        OUR Agency 
      </span>

      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Services

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Insurance

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Agency

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Tourism 

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Payment 

      </li>
    </div>
    <div data-aos ="fade-up" className="linkGroup">
      <span className="groupTitle">
        PARTNERS
      </span>

      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Bookings

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Rentcars

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        HostelWorld

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Trivago

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        TripAdvisor

      </li>
    </div>
    <div data-aos ="fade-up" className="linkGroup">
      <span className="groupTitle">
        LAST MINUTE
      </span>

      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        London

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        California

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Indonesia

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Europe

      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"  />
        Ocenia

      </li>
    </div>
  </div>
  <div data-aos ="fade-up" className="footerDiv flex ">

    <small> BEST TRAVEL WEBSITE THEME</small>
    <small>COPYRIGHTS RESERVED-ISRATECH</small>
  </div>

</div>
      </div>

    </section>
  )
}

export default Footer