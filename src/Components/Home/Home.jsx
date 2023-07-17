import React, { useEffect } from 'react'
import './home.css'
import video from "../../Assets/video"
import{GrLocation} from "react-icons/gr"
import{HiFilter} from "react-icons/hi"
import{LuFacebook} from "react-icons/lu"
import{AiOutlineInstagram} from "react-icons/ai"
import{FaTripadvisor} from "react-icons/fa"
import{BsListUl} from "react-icons/bs"
import{TbApps} from "react-icons/tb"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

useEffect(()=>{

Aos.init({duration:2000})
},[])

  return (
    <section className="home">
<div className="overlay"></div>
<video src={video} muted autoplay loop type='video/mp4'></video>
<div className="homeContent container">
  <div className="textDiv">

    <span data-aos ="fade-up" className="smallText">
      Our Packages 
      </span>

      <h1  data-aos ="fade-up" className="homeTitle">
        Search your Holiday
      </h1>
      
  </div>
<div data-aos ="fade-up"    className="cardDiv  grid ">

  <div className="destinationInput">
    <label htmlFor="city">Search your destination</label>
    <div className="input flex">


      <input type="text" placeholder="Enter Name here......." />
      <GrLocation className="icon" />

    </div>
  </div>

  <div className="dateInput">
    <label htmlFor="date">Search your date:</label>
    <div className="input flex">


      <input type="date"  />
      

    </div>
  </div>


  <div className="priceInput">
    <div className='label_total flex'>
      <label htmlFor="price">Max Price:</label>

      <h3 className="total">$5000 </h3>

    </div>
    <div className="inpput flex">
      <input type="range" max="5000" min="1000" />
    </div>
   


  </div>

<div className="searchOptions flex">
<HiFilter className='icon'/>
<span>More Filters</span>


</div>

<div className="homeFooterIcons"></div>
<div className="rightIcons" >
  <LuFacebook  className='icon' />
  <AiOutlineInstagram  className='icon' />
  <FaTripadvisor  className='icon' />


</div>
<div className="leftIcons" >
< BsListUl className='icon' />
< TbApps className='icon' />

  
</div>

</div>



</div>
    </section>
  )
}

export default Home