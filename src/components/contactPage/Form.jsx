import React from 'react'

const Form = () => {
  return (
    <main className=''>
        <form className='flex flex-col gap-[24px]' action="">
            <input
                className='w-[327px] h-[42px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ' 
                type="text"
                placeholder='Name' 
            />
            <input
                className='w-[327px] h-[42px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ' 
                type="text"
                placeholder='Email Address' 
            />
            <input
                className='w-[327px] h-[42px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ' 
                type="text"
                placeholder='Company Name' 
            />
            <input
                className='w-[327px] h-[42px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ' 
                type="text"
                placeholder='Title' 
            />
            <textarea
                className='w-[327px] h-[89px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px]'
                placeholder='Message'
            >
            </textarea>
            
            <div className='flex flex-row justify-between items-center'>
                <input
                    type="checkbox"
                    className='w-[24px] h-[24px] form-checkbox text-fmDarkPink focus:ring-0 border-0 ' 
                     
                />
                <p className='text-[15px] text-fmSanJuanBlue font-PublicSans  leading-[25px] w-[277px] text-left'>
                    Stay up-to-date with company announcements and updates to our API
                </p>
                

            </div>
            <button 
                className=' h-[48px] w-[152px] border rounded-[50px] border-fmSanJuanBlue text-[15px] font-PublicSans text-fmSanJuanBlue font-[700] '
                type='submit'>
                Submit
            </button>
        </form>

    </main>
  )
}

export default Form