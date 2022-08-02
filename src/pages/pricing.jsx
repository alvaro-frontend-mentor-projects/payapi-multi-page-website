import React from 'react'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import checks from '../assets/shared/desktop/icon-check.svg'
import Footer from '../components/shared/Footer'

const Pricing = () => {

    const addEmployee2 = (e) => {
        e.preventDefault();
        console.log("it works!")
      };


  return (
    <div className='flex flex-col justify-center mt-[40px]'>

      <img className=' absolute max-w-[1500px] w-[780px] md:w-[1000px] right-[-470px] top-[-650px] md:left-[-120px] md:top-[-720px] lg:w-[780px] lg:left-[850px] lg:top-[-180px] z-0' src={bgCircle} alt="" />

      {/* Title */}
      <h1 className='text-[32px] text-fmSanJuanBlue font-SerifDisplay text-center '>
        Pricing
      </h1>

      {/* Free Plan */}
      <div className='flex flex-col items-center gap-6'>
        {/* plan */}
        <h3 className='text-[24px] text-fmDarkPink font-SerifDisplay text-center mt-[40px] mb-[40px]'>
          Free Plan
        </h3>
        {/* price */}
        <h1 className='text-[56px] text-fmSanJuanBlue font-SerifDisplay text-center'>
          $0.00
        </h1>
        <hr className='border w-[100%] border-fmLightSanJuanBlue opacity-[25%]' />
        {/* features container */}
        <div className='flex flex-row justify-center gap-6'>
          {/* checks */}
          <div className='flex flex-col mt-[6px] gap-6'>
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
          </div>
          {/* features */}
          <div className='flex flex-col gap-3'>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Transactions</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Auth</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Identity</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans opacity-[35%]'>Investments</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans opacity-[35%]'>Assets</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans opacity-[35%]'>Liabilities</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans opacity-[35%]'>Income</p>
          </div>
        </div>
        <hr className='border w-[100%] border-fmLightSanJuanBlue opacity-[25%]' />
        {/* button */}
        <button className='border rounded-[50px] h-[48px] w-[168px] border-fmSanJuanBlue text-fmSanJuanBlue text-[15px] font-[700]'>
          Request Access
        </button>
      </div>

      {/* Basic Plan */}
      <div className='flex flex-col items-center gap-6'>
        {/* plan */}
        <h3 className='text-[24px] text-fmDarkPink font-SerifDisplay text-center mt-[40px] mb-[40px]'>
          Basic Plan
        </h3>
        {/* price */}
        <h1 className='text-[56px] text-fmSanJuanBlue font-SerifDisplay text-center'>
          $249.00
        </h1>
        <hr className='border w-[100%] border-fmLightSanJuanBlue opacity-[25%]' />
        {/* features container */}
        <div className='flex flex-row justify-center gap-6'>
          {/* checks */}
          <div className='flex flex-col mt-[6px] gap-6'>
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
          </div>
          {/* features */}
          <div className='flex flex-col gap-3'>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Transactions</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Auth</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Identity</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Investments</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Assets</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans opacity-[35%]'>Liabilities</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans opacity-[35%]'>Income</p>
          </div>
        </div>
        <hr className='border w-[100%] border-fmLightSanJuanBlue opacity-[25%]' />
        {/* button */}
        <button className='border rounded-[50px] h-[48px] w-[168px] border-fmSanJuanBlue text-fmSanJuanBlue text-[15px] font-[700]'>
          Request Access
        </button>
      </div>

      {/* Premium Plan */}
      <div className='flex flex-col items-center gap-6'>
        {/* plan */}
        <h3 className='text-[24px] text-fmDarkPink font-SerifDisplay text-center mt-[40px] mb-[40px]'>
          Premium Plan
        </h3>
        {/* price */}
        <h1 className='text-[56px] text-fmSanJuanBlue font-SerifDisplay text-center'>
          $499.00
        </h1>
        <hr className='border w-[100%] border-fmLightSanJuanBlue opacity-[25%]' />
        {/* features container */}
        <div className='flex flex-row justify-center gap-6'>
          {/* checks */}
          <div className='flex flex-col mt-[6px] gap-6'>
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
            <img className='w-[15px]' src={checks} alt="check" />
          </div>
          {/* features */}
          <div className='flex flex-col gap-3'>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Transactions</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Auth</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Identity</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Investments</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Assets</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Liabilities</p>
            <p className='text-[16px] text-fmSanJuanBlue font-PublicSans'>Income</p>
          </div>
        </div>
        <hr className='border w-[100%] border-fmLightSanJuanBlue opacity-[25%]' />
        {/* button */}
        <button className='border rounded-[50px] h-[48px] w-[168px] border-fmSanJuanBlue text-fmSanJuanBlue text-[15px] font-[700]'>
          Request Access
        </button>
      </div>

      {/* Call to action */}
      <div className='flex flex-col items-center gap-6 mt-[80px] mb-[80px]'>
                <h1 className='text-[32px] md:text-[48px] font-SerifDisplay text-fmSanJuanBlue'>
                    Ready to start?
                </h1>
                <div className="flex flex-col md:flex-row items-center item gap-[15px] ">
					{/* Email */}
					<input
						className="rounded-[50px] pl-5 pr-20 sm:mr-0 md:mr-[-35px] w-[327px] h-[48px] text-fmSanJuanBlue font-PublicSans font-[500] focus:outline-none z-10"
						type="text"
						placeholder="Enter email address"
					/>
					{/* Button */}
					<button className=" bg-fmDarkPink hover:bg-fmCharmPink text-[15px] font-PublicSans font-[700] text-fmWaterWhite sm:w-[327px] md:w-[173px] h-[48px] md:ml-[-30px] rounded-[50px] z-10">
						Schedule a Demo
					</button>
				</div>
      </div>

      {/* Footer */}
      <Footer/>

      
    </div>

    


  )
}

export default Pricing

