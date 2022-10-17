import React,{useState,useEffect,useRef} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link,Route, Routes} from 'react-router-dom'
import {Sidebar,UserProfile} from '../components'
import { client } from '../client'
import logo from '../assets/Frame-1.png'
import Pins from './Pins'

const Home = () => {

  const [toggleSidebar  , setToggleSidebar] = useState(false)

  const userInfo=localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duratio-75 ease-out'>
      
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar />
      </div>
      <div className='flex md:hidden flex-row'>
        <GiHamburgerMenu className='cursor-pointer' fontSize={40} onClick={()=>setToggleSidebar(false)} />

        <Link to ="/">

          <img src={logo} alt="logo" width='80px' className='top-0' />
        </Link>

        <Link to ={`user-profile/${user?._id}`}>

          <img src={logo} alt="logo" width='80px' className='top-0' />
        </Link>


      </div>
    </div>
  )
}

export default Home