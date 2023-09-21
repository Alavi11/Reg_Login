import React, { useState } from 'react'
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Reg = () => {

  const [showPass,setShowPass] = useState(false)
  const [showRepeatPass,setShowRepeatPass] = useState(false)



  return <>
        <div className='w-[400px] h-[600px] test rounded-lg flex items-center justify-center flex-col'>
                <h1 className='mb-5 text-3xl'>Register</h1>
                <div className='w-full h-[70%] flex flex-col items-center justify-around'>
                      <div className='w-4/5 h-8 border-b-[1px] relative flex'>
                          <input className='outline-0 w-full h-full bg-transparent text-white' type='text'></input>
                          <label className='absolute -top-5'>First Name</label>
                      </div>
                      <div className='flex w-4/5 border-b-[1px] relative'>
                          <input className='outline-0 w-full h-full bg-transparent text-white' type='text'></input>
                          <label className='absolute -top-5'>Last Name</label>
                      </div>
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
                      <div className='flex w-4/5 border-b-[1px] relative'>
                          {
                            showRepeatPass ? <AiFillEyeInvisible className='absolute right-0 text-xl text-white' onClick={()=>setShowRepeatPass(!showRepeatPass)}/> : <AiFillEye className='absolute right-0 text-xl text-white' onClick={()=>setShowRepeatPass(!showRepeatPass)}/>
                          }
                          <input className='outline-0 w-full h-full bg-transparent text-white' type={showRepeatPass ? 'text':'password'}></input>
                          <label className='absolute -top-5'>Repeat password</label>
                      </div>
                </div>
                <button className='w-4/5 mt-5 h-10 border-[1px] text-white rounded-md hover:bg-white hover:text-[#31465C]'>Submit</button>
                <Link to={"Login"}><p className='mt-5 text-white cursor-pointer'>Have you already registered?</p></Link>
        </div>
  </>
}

export default Reg