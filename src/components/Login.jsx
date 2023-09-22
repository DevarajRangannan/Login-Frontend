import React from 'react'
import { Link } from 'react-router-dom'

var EmailvalidRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Login() {

    const validation = (e)=>{

        const email = document.getElementById("email").value.match(EmailvalidRegex)
        const pwd = document.getElementById("password").value
        
        if(email){
            if(pwd){
                console.log(email);
                e.preventDefault()
            } 
        }

    }


    return (
        <>
            <div className=' w-[90%] md:w-[40%] '>
                <div className='bg-[#DEDBDB] p-5 rounded-lg'>
                    <div className='font-bold text-center mb-2 text-xl'>Login Form</div>
                    <form method='get' target='#' className='flex flex-col'>

                        <label htmlFor="email" className='font-semibold'>Email Address</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email address...' className='p-3  rounded-lg bg-[#C9C8C8] placeholder:text-gray-800' required/>
                        <p className='text-right text-sm text-red-600 mr-2  invisible'>*invalid email address</p>

                        <div className='flex justify-between'>
                            <label htmlFor="password" className='font-semibold '>Password</label>
                            <Link className='text-right italic text-gray-700 hover:text-black'>forget password?</Link>
                        </div>
                        
                        <input type="password" name="password" id="password" placeholder='Enter your Password...' className='p-3 rounded-lg bg-[#C9C8C8] placeholder:text-gray-800' required/>
                        <p className='text-right text-sm text-red-600 mr-2  invisible'>*invalid password</p>

                        <button type="submit" className='m-auto w-[50%] py-3 px-5 rounded-lg bg-[#C9C8C8] font-semibold hover:bg-[#a6a4a4] mt-4' onClick={(e)=>{validation(e)}}>Login</button>

                    </form>
                </div>

                <Link to={"/signup"} className='block mt-5 bg-[#472DAF] p-3 rounded-lg text-white text-center hover:bg-[#331a96]'>CREATE AN ACCOUNT</Link>
            </div>
        </>
    )
}
