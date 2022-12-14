import React from 'react'
import { GoogleOAuthProvider  } from '@react-oauth/google'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import logo from '../assets/Frame-1.png'
import video from '../assets/video_login.mp4'
import jwt_decode from 'jwt-decode'
import { client } from '../client'

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {

    const userResponse = jwt_decode(response.credential);

    localStorage.setItem('user', JSON.stringify(userResponse));
    const { name, sub, picture } = userResponse;

    const doc = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture
    }
    
    client.createIfNotExists(doc).then(()=>{
        navigate('/', {replace: true})
    });

};
  return (
    
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video src={video} 
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        
        className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width='300px' alt="logo" />
          </div>
          <div className='shadow-2xl'> 
          {/* <div
          render={(renderProps)=>(
            <button type='button'
            className='bg-mainColor flex justify-center items-center p-3 rounded-xl cursor-pointer outline-none'
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            >
              <FcGoogle className='mr-4'/>Sign in With Google
              </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
          /> */}

          <GoogleOAuthProvider
          clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
          className="shadow-2xl">
            <GoogleLogin 
            onSuccess={responseGoogle}
            onError={responseGoogle}
            />
          </GoogleOAuthProvider>
            
          
          
          </div>
          
        </div>

      </div>
    </div>
    
  )
}

export default Login