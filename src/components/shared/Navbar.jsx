// IMPORT REACT, ROUTER-DOM,
import React, { useState } from "react";
import { Link } from "react-router-dom";
// IMPORT IMAGES AND LOGS
import logo from "../../assets/shared/desktop/logo.svg";
import hambuger from "../../assets/shared/mobile/menu.svg";
import closeMobile from "../../assets/shared/mobile/close.svg";


const Navbar = () => {
	//MOBILE MENU STATE
	const [mobile, setMobile] = useState(true);

	const handleMenu = function () {
		setMobile(!mobile);
		console.log("it works!");
	};


	return (
		//// NAVBAR CONTAINER ////
		
			
			<div className="flex flex-row justify-between  gap-10 items-center pt-[40px] ">
				{/* Logo */}
				<Link to="/">
					<img className="" src={logo} alt="" />
				</Link>
				
				{/* Links */}
				<ul className="sm:hidden md:flex lg:flex flex-row gap-10 text-[15px] font-PublicSans font-[500] text-fmLightSanJuanBlue">
					<li className="hover:text-fmSanJuanBlue z-10">
						<Link to="/pricing">Pricing</Link>
					</li>
					<li className="hover:text-fmSanJuanBlue z-10">
						<Link to="/about">About</Link>
					</li>
					<li className="hover:text-fmSanJuanBlue z-10">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				{/* Button */}
				<button className="sm:hidden md:block lg:block ml-auto font-PublicSans font-[500] bg-fmDarkPink hover:bg-fmCharmPink text-[15px]  text-fmWaterWhite w-[173px] h-[48px] rounded-[50px] z-10">
					Schedule a Demo
				</button>

				{/* MOBILE MENU SECTION */}
				<div className="z-10 md:hidden" onClick={handleMenu}>
					{mobile ? (
						<img className="" src={hambuger} alt="hamburger menu icon" />
					) : (
						<img className="" src={closeMobile} alt="close menu icon" />
					)}
				</div>

			</div>
	
	);
};

export default Navbar;
