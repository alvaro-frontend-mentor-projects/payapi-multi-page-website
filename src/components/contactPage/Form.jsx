import React from 'react'
import { useState } from 'react'





const Form = () => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [company, setCompany] = useState("")
const [title, setTitle] = useState("")
const [message, setMessage] = useState("")

console.log(name)

const handleSubmit = () => {
    console.log("submit works")
}


  return (
    <main className=''>
        <form className='flex flex-col md:items-center gap-[24px]' onSubmit={handleSubmit} action="">
            <input
                className='w-[327px] md:w-[445px] h-[42px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ' 
                type="text"
                placeholder='Name'
                onChange={(e) => setName(e.target.value)} 
            />
            <input
                className='w-[327px] md:w-[445px] h-[42px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ' 
                type="text"
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input
                className='w-[327px] md:w-[445px] h-[42px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ' 
                type="text"
                placeholder='Company Name'
                onChange={(e) => setCompany(e.target.value)} 
            />
            <input
                className='w-[327px] md:w-[445px] h-[42px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ' 
                type="text"
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='w-[327px] md:w-[445px] h-[89px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px]'
                placeholder='Message'
                onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            
            <div className='flex flex-row justify-between items-center md:w-[445px]'>
                <input
                    type="checkbox"
                    className='w-[24px] h-[24px] form-checkbox text-fmDarkPink focus:ring-0 border-0 ' 
                     
                />
                <p className='text-[15px] text-fmSanJuanBlue font-PublicSans  leading-[25px] w-[277px] md:w-[395px] text-left'>
                    Stay up-to-date with company announcements and updates to our API
                </p>
                

            </div>
            <div className='flex flex-row md:w-[445px]'>
                <button 
                    className=' h-[48px] w-[152px] border rounded-[50px] border-fmSanJuanBlue text-[15px] font-PublicSans text-fmSanJuanBlue font-[700]'
                    type='submit'>
                    Submit
                </button>
            </div>
            
        </form>

    </main>
  )
}

export default Form