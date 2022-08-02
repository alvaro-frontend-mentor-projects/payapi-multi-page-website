import React, { useRef } from 'react'
import { useState } from 'react'





const Form = () => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [company, setCompany] = useState("")
const [title, setTitle] = useState("")
const [message, setMessage] = useState("")
const [error,   setError] = useState("")
const [empty, setEmpty] = useState("border-fmSanJuanBlue placeholder:text-fmSanJuanBlue")

console.log(name)

const inputs = useRef()

// States to add class
const [nameClass, setNameClass] = useState("border-fmSanJuanBlue placeholder:text-fmSanJuanBlue")
const [emailClass, setEmailClass] = useState("border-fmSanJuanBlue placeholder:text-fmSanJuanBlue")
const [companyClass, setCompanyClass] = useState("border-fmSanJuanBlue placeholder:text-fmSanJuanBlue")
const [titleClass, setTitleClass] = useState("border-fmSanJuanBlue placeholder:text-fmSanJuanBlue")
const [messageClass, setMessageClass] = useState("border-fmSanJuanBlue placeholder:text-fmSanJuanBlue")

// States to add error
const [nameErr, setNameErr] = useState("")
const [emailErr, setEmailErr] = useState("")
const [companyErr, setCompanyErr] = useState("")
const [titleErr, setTitleErr] = useState("")
const [messageErr, setMessageErr] = useState("")



const handleSubmit = () => {

    let emptyElements = [...inputs.current.children].slice(0, -2)

    emptyElements.forEach(element => {
        if(element.children[0].value === "") {
            console.log(element.children[0].id)

            switch(true) {
                case element.children[0].id === "name":
                    setNameClass("border-red-600 placeholder:text-red-600")
                    setNameErr("This field can't be empty!")
                    break;
                case element.children[0].id === "email":
                    setEmailClass("border-red-600 placeholder:text-red-600")
                    setEmailErr("This field can't be empty!")
                    break;
                case element.children[0].id === "company":
                    setCompanyClass("border-red-600 placeholder:text-red-600")
                    setCompanyErr("This field can't be empty!")
                    break;
                case element.children[0].id === "title":
                    setTitleClass("border-red-600 placeholder:text-red-600")
                    setTitleErr("This field can't be empty!")
                    break;
                case element.children[0].id === "message":
                    setMessageClass("border-red-600 placeholder:text-red-600")
                    setMessageErr("This field can't be empty!")
                    break;
            }

        
        }
    })



}


  return (
    <main className=''>
        <form className='flex flex-col md:items-center gap-[24px]' onSubmit={handleSubmit} action="" ref={inputs}>
            <div>
                <input
                id="name"
                className={`w-[327px] md:w-[445px] h-[42px] bg-transparent border-0 border-b-2 placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ${nameClass}`}
                type="text"
                placeholder='Name'
                onChange={(e) => setName(e.target.value)} 
                />
                <p className='text-[11px] text-red-600 mt-[4px] mb-[-6px] mr-auto ml-4'>{nameErr}</p>
            </div>
            <div>
                <input
                id='email'
                className={`w-[327px] md:w-[445px] h-[42px] bg-transparent border-0 border-b-2 placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ${emailClass}`}
                type="text"
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)} 
                />
                <p className='text-[11px] text-red-600 mt-[4px] mb-[-6px] mr-auto ml-4'>{emailErr}</p>
            </div>
            <div>
                <input
                id='company'
                className={`w-[327px] md:w-[445px] h-[42px] bg-transparent border-0 border-b-2 placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ${companyClass}`}
                type="text"
                placeholder='Company Name'
                onChange={(e) => setCompany(e.target.value)} 
                />
                <p className='text-[11px] text-red-600 mt-[4px] mb-[-6px] mr-auto ml-4'>{companyErr}</p>
            </div>
            <div>
                <input
                id='title'
                className={`w-[327px] md:w-[445px] h-[42px] bg-transparent border-0 border-b-2 placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ${titleClass}`} 
                type="text"
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
                />
                <p className='text-[11px] text-red-600 mt-[4px] mb-[-6px] mr-auto ml-4'>{titleErr}</p>
            </div>
            <div>
                <textarea
                id='message'
                className={`w-[327px] md:w-[445px] h-[89px] bg-transparent border-0 border-b-2 border-fmSanJuanBlue placeholder:text-fmSanJuanBlue placeholder:text-[15px] opacity-[50%] pl-[20px] pb-[16px] ${messageClass}`}
                placeholder='Message'
                onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <p className='text-[11px] text-red-600 mt-[4px] mb-[-6px] mr-auto ml-4'>{messageErr}</p>
            </div>
            
            
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