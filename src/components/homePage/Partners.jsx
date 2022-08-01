import React from "react";
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'

// Import logos
import teslaWhite from '../../assets/shared/desktop/tesla-white.svg'
import hpWhite from '../../assets/shared/desktop/hp-white.svg'
import googleWhite from '../../assets/shared/desktop/google-white.svg'
import nvidiaWhite from '../../assets/shared/desktop/nvidia-white.svg'
import oracleWhite from '../../assets/shared/desktop/oracle-white.svg'
import microsoftWhite from '../../assets/shared/desktop/microsoft-white.svg'

const Partners = () => {
	return (
        // MAIN CONTAINER
		<main className="  h-[670px] bg-fmMirageBlue overflow-hidden relative mx-[-24px]">
			{/* Background circle image */}
			<img
				className="absolute sm:max-w-[1000px] sm:w-[780px]  sm:top-[-602px] sm:left-[-202px]"
				src={bgCircle}
				alt=""
			/>
            {/* 1 Column Container */}
            <div className="flex flex-col px-[24px] py-[80px] items-center">
                {/* Brand Section - 2 Columns */}
                <div className="flex flex-row px-[24px] gap-10 ">
                    {/* Left Col */}
                    <div className="flex flex-col w-[50%] gap-10">
                        <img src={teslaWhite} alt="tesla logo" />
                        <img src={hpWhite} alt="hp logo" />
                        <img src={googleWhite} alt="google logo" />
                    </div>
                    {/* Right Col */}
                    <div className="flex flex-col w-[50%] gap-10">
                        <img src={microsoftWhite} alt="microsoft logo" />
                        <img src={oracleWhite} alt="oracle logo" />
                        <img src={nvidiaWhite} alt="nvidia logo" />
                    </div>
                </div>
                {/* Title */}
                <div className="text-white font-SerifDisplay text-center text-[32px] mt-[40px] ">
                    <h1>Who we work with</h1>
                </div>
                {/* Text */}
                <div className="text-center font-PublicSans text-[15px] leading-[28px] text-fmWaterWhite opacity-[70%] mt-[10px]">
                    <p>
                    Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. 
                    </p>
                </div>
                {/* About us Button */}
                <button className="border rounded-[50px] h-[48px] w-[129px] text-fmWaterWhite mt-[40px]">
                    About Us
                </button>

            </div>
			
		</main>
	);
};

export default Partners;