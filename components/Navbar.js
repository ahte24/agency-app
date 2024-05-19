import React from "react";
import Link from "next/link";


const Navbar = () => {
	return (
		<nav className="h-[82px] z-40 w-full px-[80px] py-[20px] flex bg-black  border-b border-[#1F1F1F] backdrop-filter backdrop-blur-sm bg-opacity-20  text-white items-center justify-between absolute top-0  ">
			<div>LoGo</div>
			<div className="">
				<ul className="flex gap-[10px] h-[42px]  items-center justify-center">
					<Link
						href={"/"}
						className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
					>
						Home
					</Link>
					<Link
						href={"/services"}
						className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
					>
						Services
					</Link>
					<Link
						href={"/projects"}
						className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
					>
						Projects
					</Link>
					<Link
						href={"/#"}
						className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
					>
						About Us
					</Link>
					<Link
						href={"/#"}
						className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
					>
						Contact Us
					</Link>
					<Link
						href={"/#"}
						className="text-sm text-center py-2 px-3 transition-all hover:bg-[#1A1A1A] rounded-full"
					>
						Careers
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
