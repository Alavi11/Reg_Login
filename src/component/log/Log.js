import React, { useState } from 'react'
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Log = () => {

  const [showPass,setShowPass] = useState(false)



  return <>
        <div className='w-[400px] h-[400px] test rounded-lg flex items-center justify-center flex-col'>
                <h1 className='mb-5 text-3xl'>Login</h1>
                <div className='w-full h-[50%] flex flex-col items-center justify-around'>
                      <div className='flex w-4/5 border-b-[1px] relative'>
                          <HiOutlineMail className='absolute right-0 text-xl text-white'/>
                          <input className=' outline-0 w-full h-full bg-transparent text-white' type='email'></input>
                          <label className='absolute -top-5'>Email</label>
                      </div>
                      <div className='flex w-4/5 border-b-[1px] relative'>
                          {
                            showPass ? <AiFillEyeInvisible className='absolute right-0 text-xl text-white' onClick={()=>setShowPass(!showPass)}/> : <AiFillEye className='absolute right-0 text-xl text-white' onClick={()=>setShowPass(!showPass)}/>
                          }
                          <input className=' outline-0 w-full h-full bg-transparent text-white' type={showPass ? 'text':'password'}></input>
                          <label className='absolute -top-5'>Password</label>
                      </div>
                </div>
                <button className='w-4/5 mt-5 h-10 border-[1px] text-white rounded-md hover:bg-white hover:text-[#31465C]'>Submit</button>
                <Link to={"/"}><p className='mt-5 text-white cursor-pointer'>You have not registered before?</p></Link>
        </div>
  </>
}

export default Log