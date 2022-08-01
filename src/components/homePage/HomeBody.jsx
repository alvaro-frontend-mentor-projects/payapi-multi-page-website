import React from 'react'

//Images
import codeImg from '../../assets/home/desktop/illustration-easy-to-implement.svg'
import twoPhone from '../../assets/home/desktop/illustration-simple-ui.svg'
import personalFinance from '../../assets/home/desktop/icon-personal-finances.svg'
import consumerPayment from '../../assets/home/desktop/icon-consumer-payments.svg'
import banking from '../../assets/home/desktop/icon-banking-and-coverage.svg'

const HomeBody = () => {
  return (
    <main className='flex flex-col mt-[40px] gap-10'>
        {/* Code Image */}
        <div>
            <img 
                className='max-w-[600px] w-[444px] ml-[-40px]'
                src={codeImg} 
                alt="code image" />
        </div>
        {/* Easy to implement */}
        <div className='flex flex-col items-centerb gap-6 items-center mt-[-80px]'>
            <h1 className='text-[36px] font-SerifDisplay text-fmSanJuanBlue'>
                Easy to implement
            </h1>
            <p className='text-center text-[15px] text-fmLightSanJuanBlue'>
            Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
            </p>
        </div>
        {/* Two Phone image */}
        <div>
            <img 
                className='max-w-[600px] w-[415px] ml-[-30px]'
                src={twoPhone} 
                alt="two phone showcasing ui" />
        </div>
        {/* Simple UI & UX */}
        <div className='flex flex-col items-centerb gap-6 items-center mt-[-60px]'>
            <h1 className='text-[36px] font-SerifDisplay text-fmSanJuanBlue'>
                Simple UI & UX
            </h1>
            <p className='text-center text-[15px] text-fmLightSanJuanBlue'>
            Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. 
            </p>
        </div>
        {/* Features Container */}
        <div className='flex flex-col justify-center items-center mt-[40px] gap-14'>
            {/* Personal Finance */}
            <div className='flex flex-col justify-center items-center gap-8'>
                <img 
                    className='max-w-[400px] w-[106px]'
                    src={personalFinance} 
                    alt="finances logo" 
                />
                <h3 className='font-[18px] font-PublicSans font-[700] text-fmSanJuanBlue'>
                    Personal Finances
                </h3>
                <p className='text-center text-[15px] text-fmLightSanJuanBlue'>
                Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. 
                </p>
            </div>
            {/* Banking & Coverage */}
            <div className='flex flex-col justify-center items-center gap-8'>
                <img 
                    className='max-w-[400px] w-[106px]'
                    src={banking} 
                    alt="finances logo" 
                />
                <h3 className='font-[18px] font-PublicSans font-[700] text-fmSanJuanBlue'>
                    Banking & Coverage
                </h3>
                <p className='text-center text-[15px] text-fmLightSanJuanBlue'>
                With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.
                </p>
            </div>
            {/* Consumer Payments */}
            <div className='flex flex-col justify-center items-center gap-8'>
                <img 
                    className='max-w-[400px] w-[106px]'
                    src={consumerPayment} 
                    alt="finances logo" 
                />
                <h3 className='font-[18px] font-PublicSans font-[700] text-fmSanJuanBlue'>
                    Consumer Payments
                </h3>
                <p className='text-center text-[15px] text-fmLightSanJuanBlue'>
                It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.
                </p>
            </div>
            {/* Call to action */}
            <div className='flex flex-col items-center gap-6 mb-[80px]'>
                <h1 className='text-[32px] font-SerifDisplay text-fmSanJuanBlue'>
                    Ready to start?
                </h1>
                <div className="flex flex-col items-center item gap-[15px] ">
					{/* Email */}
					<input
						className="rounded-[50px] pl-5 pr-20 sm:mr-0 md:mr-[-35px] w-[327px] h-[48px] text-fmSanJuanBlue font-PublicSans font-[500] focus:outline-none z-10"
						type="text"
						placeholder="Enter email address"
					/>
					{/* Button */}
					<button className=" bg-fmDarkPink hover:bg-fmCharmPink text-[15px] font-PublicSans font-[700] text-fmWaterWhite sm:w-[327px] md:w-[173px] h-[48px] rounded-[50px] z-10">
						Schedule a Demo
					</button>
				</div>

            </div>

        </div>
        

    </main>
  )
}

export default HomeBody