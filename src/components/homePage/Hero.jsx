import React from "react";

import phone from '../../assets/home/desktop/illustration-phone-mockup.svg'

const Hero = () => {
	return (
		<div className=" flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row md:mx-[80px] lg:mx-[150px] md:justify-end lg:justify-center items-center   lg:h-[600px] ">
			{/* Left Column */}
			<div className="flex flex-col justify-center align-middle md:w-[100%] lg:w-[50%] gap-11">
				{/* Main Text */}
				<div className="  w-[100%] sm:text-[32px] md:text-[48px] sm:text-center md:text-start lg:text-[72px] sm:leading-[36px] md:leading-[56px] lg:leading-[72px] md:font-[500] font-SerifDisplay sm:mt-[-25px] md:mt-[-40px] lg:mt-[0] md:px-[20px] lg:px-[0px]  text-fmSanJuanBlue">
					<p> Start building with our APIs for absolutely free.</p>
				</div>
				{/* Email Input & Button Row Container */}
				<div className="flex sm:flex-col sm:items-center md:item md:flex-row md:justify-center lg:justify-start sm:gap-[15px] md:gap-0 sm:mt-[-20px]">
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
				{/* Question text */}
				<div className="text-[15px] text-fmLightSanJuanBlue lg:ml-6 md:ml-[0] mt-[-20px]  sm:text-center lg:text-left mb-[80px] md:mb-[90px]">
					<p>
						Have any questions?{" "}
						<span className="font-bold text-fmLightSanJuanBlue">
							Contact Us
						</span>
					</p>
				</div>
			</div>

			{/* Right Column */}
			<div className="flex flex-row justify-center items-center lg:justify-end w-[100%] lg:w-[50%]  ">
				{/* Cellphone Image */}
				<img
					className="ml-[20px] sm:h-[340px] sm:w-[210px] md:h-[416px] md:w-[252px] lg:h-[660px] lg:w-[400px] z-10"
					src={phone}
					alt="Cellphone Image"
				/>
			</div>
		</div>
	);
};

export default Hero;
