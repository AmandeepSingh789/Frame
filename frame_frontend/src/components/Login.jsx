import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import logo from '../assets/Frame-1.png'
import video from '../assets/video_login.mp4'


const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video src={video} 
        type="video/mp4"
        Loop
        controls={false}
        muted
        autoPlay
        
        className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width='300px' alt="logo" />
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Login