import React from 'react'

//Images
import codeImg from '../../assets/home/desktop/illustration-easy-to-implement.svg'
import twoPhone from '../../assets/home/desktop/illustration-simple-ui.svg'
import personalFinance from '../../assets/home/desktop/icon-personal-finances.svg'
import consumerPayment from '../../assets/home/desktop/icon-consumer-payments.svg'
import banking from '../../assets/home/desktop/icon-banking-and-coverage.svg'
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'


const HomeBody = () => {
  return (
    <main className='flex flex-col mt-[40px] mx-[0px] gap-10 items-center relative'>
        <img className='hidden lg:block absolute max-w-[1500px] lg:w-[780px] lg:left-[850px] lg:top-[340px] z-0' src={bgCircle} alt="" />


        {/* Code Image */}
        <div className='flex flex-col lg:flex-row items-center gap-10  '>
            <div>
                <img 
                    className='max-w-[600px] w-[444px] md:w-[530px] lg:w-[590px] ml-[36px] md:ml-[38px]'
                    src={codeImg} 
                    alt="code image" />
            </div>
            {/* Easy to implement */}
            <div className='flex flex-col  gap-6 items-center lg:items-start mt-[-80px] md:mt-[-90px] lg:mt-[-60px] lg:w-[445px] '>
                <h1 className='text-[36px] md:text-[48px] font-SerifDisplay text-fmSanJuanBlue'>
                    Easy to implement
                </h1>
                <p className='text-center lg:text-left text-[15px] text-fmLightSanJuanBlue w-[327px] md:w-[600px] lg:w-[440px] md:leading-[28px]'>
                Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
                </p>
            </div>
        </div>

        {/* Two Phone image */}
        <div className='flex flex-col lg:flex-row-reverse items-center gap-10  '>
            <div>
                <img 
                    className='max-w-[800px] w-[415px] md:w-[465px] lg:w-[680px] ml-[30px] lg:mr-[-80px]'
                    src={twoPhone} 
                    alt="two phone showcasing ui" />
            </div>
            {/* Simple UI & UX */}
            <div className='flex flex-col  gap-6 items-center lg:items-start  mt-[-60px] md:mt-[-70px]'>
                <h1 className='text-[36px] md:text-[48px]  font-SerifDisplay text-fmSanJuanBlue'>
                    Simple UI & UX
                </h1>
                <p className='text-center lg:text-left text-[15px] text-fmLightSanJuanBlue w-[327px] md:w-[600px] lg:w-[440px] md:leading-[28px]'>
                Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. 
                </p>
            </div>
        </div>
        {/* Features Container */}
        <div className='flex flex-col justify-center items-center mt-[40px] lg:mt-[20px]  gap-14'>

            <div className='flex flex-col md:flex-row  md:justify-between md:align-stretch gap-14 md:gap-2 lg:gap-8 '>
                {/* Personal Finance */}
                <div className='flex flex-col  justify-center md:justify-start items-center gap-8 lg:gap-6  '>
                    <img 
                        className='max-w-[400px] w-[106px] md:w-[88px] lg:w-[106px]'
                        src={personalFinance} 
                        alt="finances logo" 
                    />
                    <h3 className='font-[18px] font-PublicSans font-[700] text-fmSanJuanBlue'>
                        Personal Finances
                    </h3>
                    <p className='text-center text-[15px] text-fmLightSanJuanBlue md:leading-[25px] md:w-[223px] lg:w-[350px]'>
                    Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. 
                    </p>
                </div>
                {/* Banking & Coverage */}
                <div className='flex flex-col justify-center md:justify-start items-center gap-8 lg:gap-6'>
                    <img 
                        className='max-w-[400px] w-[106px] md:w-[88px] lg:w-[106px]'
                        src={banking} 
                        alt="finances logo" 
                    />
                    <h3 className='font-[18px] font-PublicSans font-[700] text-fmSanJuanBlue'>
                        Banking & Coverage
                    </h3>
                    <p className='text-center text-[15px] text-fmLightSanJuanBlue md:leading-[25px]  md:w-[223px] lg:w-[350px]'>
                    With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.
                    </p>
                </div>
                {/* Consumer Payments */}
                <div className='flex flex-col justify-center md:justify-start items-center gap-8 lg:gap-6'>
                    <img 
                        className='max-w-[400px] w-[106px] md:w-[88px] lg:w-[106px]'
                        src={consumerPayment} 
                        alt="finances logo" 
                    />
                    <h3 className='font-[18px] font-PublicSans font-[700] text-fmSanJuanBlue'>
                        Consumer Payments
                    </h3>
                    <p className='text-center text-[15px] text-fmLightSanJuanBlue md:leading-[25px]  md:w-[223px] lg:w-[350px]'>
                    It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.
                    </p>
                </div>
            </div>
            
            {/* Call to action */}
            <div className='flex flex-col lg:flex-row lg:justify-between lg:w-[100%] items-center gap-6 mb-[80px] lg:mt-[40px]'>
                <h1 className='text-[32px] md:text-[48px] font-SerifDisplay text-fmSanJuanBlue'>
                    Ready to start?
                </h1>
                <div className="flex flex-col md:flex-row items-center item gap-[15px] ">
					{/* Email */}
					<input
						className="border-0 rounded-[50px] pl-5 pr-20 sm:mr-0 md:mr-[-35px] w-[327px] h-[48px] text-fmSanJuanBlue font-PublicSans font-[500] focus:outline-none z-10"
						type="text"
						placeholder="Enter email address"
					/>
					{/* Button */}
					<button className=" bg-fmDarkPink hover:bg-fmCharmPink text-[15px] font-PublicSans font-[700] text-fmWaterWhite sm:w-[327px] md:w-[173px] h-[48px] md:ml-[-30px] rounded-[50px] z-10">
						Schedule a Demo
					</button>
				</div>

            </div>

        </div>
        

    </main>
  )
}

export default HomeBody