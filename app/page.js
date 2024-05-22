"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import "./globals.css";
import Link from "next/link";
import iconOne from "../public/iconOne.svg";
import iconTwo from "../public/iconTwo.svg";
import iconThree from "../public/iconThree.svg";
import iconFourth from "../public/iconFourth.svg";
import iconFifth from "../public/iconFifth.svg";
import iconSixth from "../public/iconSixth.svg";
import cardIconOne from "../public/cardIconOne.svg";
import cardIconTwo from "../public/cardIconTwo.svg";
import cardIconThree from "../public/cardIconThree.svg";
import cardIconFourth from "../public/cardIconFourth.svg";
import workCardIconOne from "../public/workCardIconOne.svg";
import workCardIconTwo from "../public/workCardIconTwo.svg";
import workCardIconThree from "../public/workCardIconThree.svg";
import workCardIconFour from "../public/workCardIconFour.svg";
import cardLogo from "../public/cardLogo.svg";
import thirdPartner from "../public/thirdPartner.svg";

export default function Home() {
	const [isHidden1, setIsHidden1] = useState(true);
	const [isHidden2, setIsHidden2] = useState(true);
	const [isHidden3, setIsHidden3] = useState(true);
	const [isHidden4, setIsHidden4] = useState(true);
	const [isHidden5, setIsHidden5] = useState(true);
	const [isHidden6, setIsHidden6] = useState(true);
	const [isHidden7, setIsHidden7] = useState(true);
	const [isHidden, setIsHidden] = useState(true);

	const toggleVisibility1 = () => {
		setIsHidden1(!isHidden1);
	};
	const toggleVisibility2 = () => {
		setIsHidden2(!isHidden2);
	};
	const toggleVisibility3 = () => {
		setIsHidden3(!isHidden3);
	};
	const toggleVisibility4 = () => {
		setIsHidden4(!isHidden4);
	};
	const toggleVisibility5 = () => {
		setIsHidden5(!isHidden5);
	};
	const toggleVisibility6 = () => {
		setIsHidden6(!isHidden6);
	};
	const toggleVisibility7 = () => {
		setIsHidden7(!isHidden7);
	};
	const toggleVisibility = () => {
		setIsHidden(!isHidden);
	};
	return (
		<>
			<main className=" mx-auto ">
				<div className="Hero-section flex md:h-[550px] min-h-[400px]">
					<div className="flex flex-col gap-10 lg:w-1/2  pt-24 my-element">
						<div className="flex flex-col m-auto gap-3 max-w-[85%]">
							<h1 className="xl:text-4xl md:text-2xl text-xl font-semibold ">
								Digital Solution{" "}
								<span className="text-[#666666]">That Drive Success</span>
							</h1>
							<p className="md:text-sm text-xs text-[#808080]  min-h-[120px]">
								At DigitX, we believe in the transformative power of digital
								solutions. Our team of experts is dedicated to helping
								businesses like yours thrive in the fast-paced digital
								landscape. From captivating web design to data-driven marketing
								strategies, we are committed to delivering results that exceed
								expectations.
							</p>
							<div className="w-[260px] h-[89px] flex flex-col gap-3">
								<span className="md:text-sm text-xs text-left">
									Unlock your digital potential today
								</span>
								<div className="flex gap-3">
									<button className="sm:text-xs text-xs md:px-4 px-2 py-2 md:py-4 bg-white rounded-full text-black">
										Get Started
									</button>
									<button className="sm:text-xs text-xs md:px-4 md:py-4 px-2 py-2 bg-[#1A1A1A] rounded-full  border border-[#262626]">
										Free Consultation
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="w-1/2 pt-24 text-5xl justify-center items-center lg:flex bg-[#090909a2] hidden">
						LOGO
					</div>
				</div>
				<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-5 p-4 sm:px-10">
					<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
						Reasons to Choose DigitX for{" "}
						<span className="text-[#808080]">Your Digital Journey</span>
					</h1>
					<p className="text-sm text-[#808080] text-center xl:w-[900px]">
						Partnering with DigitX offers a multitude of advantages. Experience
						increased brand visibility, improved customer engagement, and higher
						ROI. Our tailored solutions are designed to meet your unique
						business needs, ensuring lasting success.
					</p>
					<div className="Items-container gap-[40px] flex flex-col mt-16">
						<div className="flex md:flex-row flex-col gap-[40px] min-h-[240px]">
							<div className="first-item md:max:w-[373.33px] flex flex-col items-center gap-5">
								<Image src={iconOne} alt="" width={70} height={70} />
								<div className="flex flex-col gap-3">
									<h3 className="text-[18px] font-semibold text-center">
										Expertise That Drives Results
									</h3>
									<p className="text-sm text-center text-[#8C8C8C]">
										Our team of seasoned professionals brings years of
										experience and expertise to the table.
									</p>
								</div>

								<Link
									className="flex items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F] rounded-full"
									href="/#"
								>
									Learn More
									<div className="p-1 rounded-full bg-[#1A1A1A]">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
							<div className="border-r border-[#1F1F1F]"></div>
							<div className="second-item md:max-w-[373.33px] flex flex-col items-center gap-5">
								<Image src={iconTwo} alt="" width={70} height={70} />
								<div className="flex flex-col gap-3">
									<h3 className="text-[18px] font-semibold text-center">
										Tailored Business Solutions
									</h3>
									<p className="text-sm text-center text-[#8C8C8C]">
										We understand that every business is unique. That's why our
										solutions are customized.
									</p>
								</div>

								<Link
									className="flex items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F] rounded-full"
									href="/#"
								>
									Learn More
									<div className="p-1 rounded-full bg-[#1A1A1A]">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
							<div className="border-r border-[#1F1F1F]"></div>
							<div className="Third-item md:max-w-[373.33px] flex flex-col items-center gap-5">
								<Image src={iconThree} alt="" width={70} height={70} />
								<div className="flex flex-col gap-3">
									<h3 className="text-[18px] font-semibold text-center">
										Cutting-Edge Web Design
									</h3>
									<p className="text-sm text-center text-[#8C8C8C]">
										Leave a lasting impression on your audience with our
										top-notch web design services.
									</p>
								</div>

								<Link
									className="flex items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F] rounded-full"
									href="/#"
								>
									Learn More
									<div className="p-1 rounded-full bg-[#1A1A1A]">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
						</div>
						<div className=" border-b border-[#1F1F1F]"></div>
						<div className="flex md:flex-row flex-col gap-[40px] min-h-[240px]">
							<div className=" md:max-w-[373.33px] flex flex-col items-center gap-5">
								<Image src={iconFourth} alt="" width={70} height={70} />
								<div className="flex flex-col gap-3">
									<h3 className="text-[18px] font-semibold text-center">
										Mobile-First Approach
									</h3>
									<p className="text-sm text-center text-[#8C8C8C]">
										In today's mobile-centric world, we prioritize mobile-first
										design to ensure your website.
									</p>
								</div>

								<Link
									href="/#"
									className="flex items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F] rounded-full"
								>
									Learn More
									<div className="p-1 rounded-full bg-[#1A1A1A]">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
							<div className="border-r border-[#1F1F1F]"></div>
							<div className=" md:max-w-[373.33px] flex flex-col items-center gap-5">
								<Image src={iconFifth} alt="" width={70} height={70} />
								<div className="flex flex-col gap-3">
									<h3 className="text-[18px] font-semibold text-center">
										Marketing Strategies
									</h3>
									<p className="text-sm text-center text-[#8C8C8C]">
										Our data-driven marketing strategies allow us to target the
										right audience with precision
									</p>
								</div>

								<Link
									href="/#"
									className="flex items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F] rounded-full"
								>
									Learn More
									<div className="p-1 rounded-full bg-[#1A1A1A]">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
							<div className="border-r border-[#1F1F1F]"></div>
							<div className=" md:max-w-[373.33px] flex flex-col items-center gap-5">
								<Image src={iconSixth} alt="" width={70} height={70} />
								<div className="flex flex-col gap-3">
									<h3 className="text-[18px] font-semibold text-center">
										Search Engine Optimization
									</h3>
									<p className="text-sm text-center text-[#8C8C8C]">
										(SEO) Mastery Boost your online visibility with our expert
										SEO techniques.
									</p>
								</div>

								<Link
									href="/#"
									className="flex items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F] rounded-full"
								>
									Learn More
									<div className="p-1 rounded-full bg-[#1A1A1A]">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center mt-24 w-full sm:max-w-[1280px] p-4 sm:px-10 mx-auto gap-10">
					<h1 className="text-center sm:text-3xl text-xl font-semibold xl:w-[500px]">
						<span className="text-[#808080]">Our</span> Services
					</h1>
					<p className="text-sm text-[#808080] text-center xl:w-[900px]">
						Our comprehensive range of services includes web design, mobile app
						development, SEO, social media marketing, and more. Whether you're a
						startup or an established enterprise, our experts will craft
						solutions that drive results.
					</p>
					<div className="w-full flex lg:flex-row flex-col gap-10 ">
						<div className="lg:w-1/2 border border-[#292929] p-4 min-h-[600px] rounded-2xl my-cardBG flex flex-col justify-center items-center md:gap-10 gap-4">
							<Image src={cardIconOne} width={100} height={100} alt="" />
							<div className="flex flex-col justify-center items-center gap-4 md:w-[80%]">
								<h3 className="text-xl text-center font-semibold">
									Web Development
								</h3>
								<p className="text-sm text-center text-[#8C8C8C]">
									Unlock Your Online Potential In today's digital age, a
									powerful web presence is essential for any business. At
									DigitX, our web development services empower you to stand out
									in the crowded online landscape. We create responsive and
									dynamic websites tailored to your unique needs, ensuring
									seamless user experiences across all devices. From e-commerce
									platforms to interactive web applications, our expert
									developers bring your vision to life, making your online
									journey a resounding success.
								</p>
							</div>
							<Link
								className="flex items-center gap-2 py-2 px-4 text-sm border bg-[#1a1a1a] border-[#262626] rounded-full"
								href="/#"
							>
								Learn More
								<div className="p-1 rounded-full">
									<svg
										width="25"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
											fill="white"
										/>
									</svg>
								</div>
							</Link>
						</div>
						<div className="lg:w-1/2 border border-[#292929] p-4 min-h-[600px] rounded-2xl my-cardBG flex flex-col justify-center items-center md:gap-10 gap-4">
							<Image src={cardIconTwo} width={100} height={100} alt="" />
							<div className="flex flex-col justify-center items-center gap-4 md:w-[80%]">
								<h3 className="text-xl font-semibold text-center">
									Mobile App Development
								</h3>
								<p className="text-sm text-center text-[#8C8C8C]">
									Embrace Mobility with Confidence Mobile devices have
									revolutionized the way we interact with the world. Our mobile
									app development services enable you to harness this mobility
									to your advantage. We design and build intuitive and
									high-performance mobile applications that captivate your
									audience and boost engagement. Whether it's iOS, Android, or
									cross-platform development, we ensure that your app delivers a
									seamless experience, leaving a lasting impression on your
									users.
								</p>
							</div>
							<Link
								className="flex items-center gap-2 py-2 px-4 text-sm border bg-[#1a1a1a] border-[#262626] rounded-full"
								href="/#"
							>
								Learn More
								<div className="p-1 rounded-full">
									<svg
										width="25"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
											fill="white"
										/>
									</svg>
								</div>
							</Link>
						</div>
					</div>
					<div className="w-full flex-col lg:flex-row flex gap-10 ">
						<div className="lg:w-1/2 border border-[#292929] p-4 min-h-[600px] rounded-2xl my-cardBG flex flex-col justify-center items-center md:gap-10 gap-4">
							<Image src={cardIconThree} width={100} height={100} alt="" />
							<div className="flex flex-col justify-center items-center gap-4 md:w-[80%]">
								<h3 className="text-xl font-semibold">Web Design</h3>
								<p className="text-sm text-center text-[#8C8C8C]">
									Elevate Your Brand Aesthetics Your website's design is a
									reflection of your brand's identity and values. DigitX's web
									design services focus on creating visually striking and
									user-friendly interfaces that leave a lasting impact. Our
									creative team blends aesthetics with functionality, delivering
									a captivating user experience that keeps visitors coming back
									for more. Let us transform your online presence into an
									immersive journey that showcases your brand's true essence.
								</p>
							</div>
							<Link
								className="flex items-center gap-2 py-2 px-4 text-sm border bg-[#1a1a1a] border-[#262626] rounded-full"
								href="/#"
							>
								Learn More
								<div className="p-1 rounded-full">
									<svg
										width="25"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
											fill="white"
										/>
									</svg>
								</div>
							</Link>
						</div>
						<div className="lg:w-1/2 border border-[#292929] p-4 min-h-[600px] rounded-2xl my-cardBG flex flex-col justify-center items-center md:gap-10 gap-4">
							<Image src={cardIconFourth} width={100} height={100} alt="" />
							<div className="flex flex-col justify-center items-center gap-4 md:w-[80%]">
								<h3 className="text-xl font-semibold">Digital Marketing</h3>
								<p className="text-sm text-center text-[#8C8C8C]">
									Drive Your Business Forward In the vast digital landscape,
									standing out from the competition is crucial. Our digital
									marketing services help you rise above the noise and connect
									with your target audience effectively. From search engine
									optimization (SEO) to social media marketing and pay-per-click
									(PPC) campaigns, our data-driven strategies ensure that your
									message reaches the right people at the right time.
								</p>
							</div>
							<Link
								className="flex items-center gap-2 py-2 px-4 text-sm border bg-[#1a1a1a] border-[#262626] rounded-full"
								href="/#"
							>
								Learn More
								<div className="p-1 rounded-full">
									<svg
										width="25"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
											fill="white"
										/>
									</svg>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-10 p-4 sm:px-10">
					<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
						<span className="text-[#808080]">Our</span> Works
					</h1>
					<p className="text-sm text-[#808080] text-center xl:w-[900px]">
						Witness the brilliance of our previous projects. Our portfolio
						showcases the successful collaborations we've had with diverse
						clients across various industries. Let our work speak for itself.
					</p>
					<div className="w-full min-h-[600px] flex-col lg:flex-row flex gap-10 justify-center">
						<div className="flex flex-col justify-between w-full min-h-[500px] bg-gradient-to-b from-[#1a1a1a]  to-transparent via-[#1a1a1a59] mdp-10 p-4 rounded-2xl border border-[#1F1F1F]">
							<div className="my-workCardBg w-full max-h-[300px] min-h-[200px] flex justify-center items-center border border-[#1F1F1F] rounded-2xl relative">
								<Image width={140} height={140} src={workCardIconOne} alt="" />
								<Link
									className=" absolute bottom-[-25px] max-h-[50px] flex items-center gap-2 py-1 md:px-4 px-2 text-sm border border-[#1F1F1F] bg-[#121212] rounded-full"
									href="/#"
								>
									<span className="text-xs">View Projects Details</span>

									<div className="p-1 rounded-full ">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
							<div className="min-h-[200px] w-full flex flex-col justify-evenly gap-3 mt-[40px]">
								<h4 className="font-semibold text-sm md:text-base w-fit">
									Innovative E-commerce Platform
								</h4>
								<div className="flex justify-between">
									<span className="text-xs md:text-sm">
										Category: Web Development.
									</span>
									<span className="text-xs md:text-sm">January 2022</span>
								</div>
								<p className=" text-xs md:text-sm text-[#8C8C8C]">
									Witness our groundbreaking e-commerce platform that seamlessly
									connects buyers and sellers worldwide. With an intuitive user
									interface and secure payment gateways, this project
									revolutionizes online shopping.
								</p>
							</div>
						</div>
						<div className="flex flex-col justify-between w-full min-h-[500px] bg-gradient-to-b from-[#1a1a1a]  to-transparent via-[#1a1a1a0a] md:p-10 p-4 rounded-2xl border border-[#1F1F1F]">
							<div className="my-workCardBg  w-full max-h-[300px] min-h-[200px] flex justify-center items-center border border-[#1F1F1F] rounded-2xl relative">
								<Image width={130} height={130} src={workCardIconTwo} alt="" />
								<Link
									className=" absolute bottom-[-25px] max-h-[50px] flex items-center gap-2 py-1 md:px-4 px-2 text-sm border border-[#1F1F1F] bg-[#121212] rounded-full"
									href="/#"
								>
									<span className="text-xs">View Projects Details</span>

									<div className="p-1 rounded-full ">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
							<div className="min-h-[200px] w-full flex flex-col gap-3 justify-evenly mt-[40px]">
								<h4 className="font-semibold md:text-base text-sm w-fit">
									Modern Corporate Website
								</h4>
								<div className="flex justify-between">
									<span className="md:text-sm text-xs">
										Category: Mobile App Development.
									</span>
									<span className="md:text-sm text-xs">March 2022</span>
								</div>
								<p className="md:text-sm text-xs text-[#8C8C8C]">
									Our fitness app helps users stay fit and motivated with
									personalized workout plans and progress tracking. Its
									user-friendly design and comprehensive features make staying
									healthy an enjoyable experience.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full min-h-[600px] flex flex-col lg:flex-row gap-10 justify-center">
						<div className="flex flex-col justify-between w-full h-full bg-gradient-to-b from-[#1a1a1a]  to-transparent via-[#1a1a1a59] md:p-10 p-4 rounded-2xl border border-[#1F1F1F]">
							<div className="my-workCardBg w-full max-h-[300px] min-h-[200px] flex justify-center items-center border border-[#1F1F1F] rounded-2xl relative">
								<Image
									width={140}
									height={140}
									src={workCardIconThree}
									alt=""
								/>
								<Link
									className=" absolute bottom-[-25px] max-h-[50px] flex items-center gap-2 py-1 md:px-4 px-2 text-sm border border-[#1F1F1F] bg-[#121212] rounded-full"
									href="/#"
								>
									<span className="text-xs">View Projects Details</span>

									<div className="p-1 rounded-full ">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
							<div className="min-h-[200px] w-full flex flex-col justify-evenly mt-[40px]">
								<h4 className="font-semibold md:text-base text-sm w-fit">
									Modern Corporate Website
								</h4>
								<div className="flex justify-between">
									<span className="md:text-sm text-xs">
										Category: Web Design.
									</span>
									<span className="md:text-sm text-xs">April 2022</span>
								</div>
								<p className="md:text-sm text-xs text-[#8C8C8C]">
									Check out our sleek and modern corporate website that
									showcases the client's brand and services. Its responsive
									design ensures a consistent experience across devices.
								</p>
							</div>
						</div>
						<div className="flex flex-col justify-between w-full h-full bg-gradient-to-b from-[#1a1a1a]  to-transparent via-[#1a1a1a0a] md:p-10 p-4 rounded-2xl border border-[#1F1F1F]">
							<div className="my-workCardBg w-full max-h-[300px] min-h-[200px] flex justify-center items-center border border-[#1F1F1F] rounded-2xl relative">
								<Image width={130} height={130} src={workCardIconFour} alt="" />
								<Link
									className=" absolute bottom-[-25px] max-h-[50px] flex items-center gap-2 py-1 md:px-4 px-2 text-sm border border-[#1F1F1F] bg-[#121212] rounded-full"
									href="/#"
								>
									<span className="text-xs">View Projects Details</span>
									<div className="p-1 rounded-full ">
										<svg
											width="25"
											height="24"
											viewBox="0 0 25 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
												fill="white"
											/>
										</svg>
									</div>
								</Link>
							</div>
							<div className="min-h-[200px] w-full flex flex-col gap-3 justify-evenly mt-[40px]">
								<h4 className="font-semibold text-sm md:text-base  w-fit ">
									Digital Marketing Success Story
								</h4>
								<div className="flex justify-between">
									<span className="md:text-sm text-xs">
										Category: Digital Marketing.
									</span>
									<span className="md:text-sm text-xs">May 2022</span>
								</div>
								<p className="md:text-sm text-xs text-[#8C8C8C]">
									Discover how our data-driven digital marketing strategies
									boosted a client's online presence, resulting in a significant
									increase in website traffic and leads.
								</p>
							</div>
						</div>
					</div>
					<Link
						className="h-[50px] flex items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F]  rounded-full"
						href="/#"
					>
						View Projects Details
						<div className="p-1 rounded-full ">
							<svg
								width="25"
								height="24"
								viewBox="0 0 25 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5.5 12C5.5 11.4201 5.95667 10.95 6.52 10.95H15.5476L12.613 8.2069C12.207 7.80497 12.1943 7.14027 12.5848 6.72226C12.9752 6.30425 13.6209 6.29122 14.027 6.69315L18.787 11.2431C18.987 11.4411 19.1 11.7144 19.1 12C19.1 12.2856 18.987 12.5589 18.787 12.7569L14.027 17.3069C13.6209 17.7088 12.9752 17.6958 12.5848 17.2778C12.1943 16.8598 12.207 16.1951 12.613 15.7931L15.5476 13.05H6.52C5.95667 13.05 5.5 12.5799 5.5 12Z"
									fill="white"
								/>
							</svg>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-10 relative">
					<div className="absolute left-0 bottom-0 w-60 h-[350px] bg-gradient-to-r from-[#0f0f0f] to-transparent hidden sm:block"></div>

					<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
						<span className="text-[#808080]">Our</span> Testimonials
					</h1>
					<p className="text-sm text-[#808080] text-center xl:w-[900px] w-[90vw]">
						Don't just take our word for it; hear what our satisfied clients
						have to say about their experience with DigitX. We take pride in
						building lasting relationships and delivering exceptional results.
					</p>
					<div className="w-full flex gap-4 p-5 h-[350px] overflow-x-auto no-scrollbar ">
						<div className="h-full w-[350px]">
							<div className="flex flex-col gap-6 sm:w-[350px] w-[300px] sm:h-[70%] h-[65%] border border-[#262626] rounded-2xl p-5 bg-gradient-to-b from-[#1a1a1a]  to-transparent via-[#1a1a1a59]">
								<svg
									width="45"
									height="44"
									viewBox="0 0 45 44"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="1.25"
										y="0.5"
										width="43"
										height="43"
										rx="5.5"
										fill="#1A1A1A"
									/>
									<rect
										x="1.25"
										y="0.5"
										width="43"
										height="43"
										rx="5.5"
										stroke="#262626"
									/>
									<path
										d="M30.7025 17.9207C30.7147 18.097 30.7147 18.2733 30.7147 18.4513C30.7147 23.8732 26.5871 30.1263 19.0397 30.1263V30.123C16.8101 30.1263 14.6269 29.4876 12.75 28.2835C13.0742 28.3225 13.4 28.342 13.7266 28.3428C15.5743 28.3444 17.3691 27.7245 18.8227 26.5829C17.0669 26.5496 15.5272 25.4048 14.9893 23.7334C15.6044 23.8521 16.2381 23.8277 16.8418 23.6627C14.9275 23.276 13.5503 21.5941 13.5503 19.6408C13.5503 19.6229 13.5503 19.6059 13.5503 19.5888C14.1207 19.9065 14.7593 20.0828 15.4126 20.1023C13.6096 18.8974 13.0539 16.4988 14.1426 14.6235C16.2259 17.187 19.2997 18.7454 22.5993 18.9104C22.2686 17.4852 22.7203 15.9918 23.7864 14.99C25.439 13.4365 28.0382 13.5161 29.5918 15.1679C30.5107 14.9867 31.3915 14.6495 32.1975 14.1718C31.8912 15.1216 31.2501 15.9284 30.3937 16.4411C31.207 16.3453 32.0017 16.1275 32.75 15.7952C32.1991 16.6207 31.5052 17.3398 30.7025 17.9207Z"
										fill="white"
									/>
								</svg>
								<p className="sm:text-sm text-xs ">
									Working with DigitX was a pleasure. Their web design team
									created a stunning website that perfectly captured our brand's
									essence. The feedback from our customers has been
									overwhelmingly positive.
								</p>
							</div>
							<div className="ml-5">
								<svg
									width="33"
									height="16"
									viewBox="0 0 33 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.3395 13.55C18.9421 16.3969 14.5579 16.3969 12.1605 13.55L0.75 0L32.75 2.74432e-06L21.3395 13.55Z"
										fill="#262626"
									/>
								</svg>
							</div>
							<div className="mt-6 flex items-center gap-2">
								<Image
									className="rounded-[50%] w-9 h-9 object-cover"
									width={300}
									height={300}
									src="/porfile.png"
									alt=""
								/>
								<div className="flex flex-col justify-center">
									<h3 className="font-semibold sm:text-base text-sm">Mark Roberts</h3>
									<span className="text-[#808080] text-xs sm:text-sm">
										Founder of GreenEarth Eco Store
									</span>
								</div>
							</div>
						</div>

						<div className="h-full w-[350px]">
							<div className="flex flex-col gap-6 sm:w-[350px] w-[300px] sm:h-[70%] h-[65%] border border-[#262626] rounded-2xl p-5 bg-gradient-to-b from-[#1a1a1a]  to-transparent via-[#1a1a1a59]">
								<svg
									width="45"
									height="44"
									viewBox="0 0 45 44"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="1.25"
										y="0.5"
										width="43"
										height="43"
										rx="5.5"
										fill="#1A1A1A"
									/>
									<rect
										x="1.25"
										y="0.5"
										width="43"
										height="43"
										rx="5.5"
										stroke="#262626"
									/>
									<path
										d="M30.7025 17.9207C30.7147 18.097 30.7147 18.2733 30.7147 18.4513C30.7147 23.8732 26.5871 30.1263 19.0397 30.1263V30.123C16.8101 30.1263 14.6269 29.4876 12.75 28.2835C13.0742 28.3225 13.4 28.342 13.7266 28.3428C15.5743 28.3444 17.3691 27.7245 18.8227 26.5829C17.0669 26.5496 15.5272 25.4048 14.9893 23.7334C15.6044 23.8521 16.2381 23.8277 16.8418 23.6627C14.9275 23.276 13.5503 21.5941 13.5503 19.6408C13.5503 19.6229 13.5503 19.6059 13.5503 19.5888C14.1207 19.9065 14.7593 20.0828 15.4126 20.1023C13.6096 18.8974 13.0539 16.4988 14.1426 14.6235C16.2259 17.187 19.2997 18.7454 22.5993 18.9104C22.2686 17.4852 22.7203 15.9918 23.7864 14.99C25.439 13.4365 28.0382 13.5161 29.5918 15.1679C30.5107 14.9867 31.3915 14.6495 32.1975 14.1718C31.8912 15.1216 31.2501 15.9284 30.3937 16.4411C31.207 16.3453 32.0017 16.1275 32.75 15.7952C32.1991 16.6207 31.5052 17.3398 30.7025 17.9207Z"
										fill="white"
									/>
								</svg>
								<p className="sm:text-sm text-xs ">
									Working with DigitX was a pleasure. Their web design team
									created a stunning website that perfectly captured our brand's
									essence. The feedback from our customers has been
									overwhelmingly positive.
								</p>
							</div>
							<div className="ml-5">
								<svg
									width="33"
									height="16"
									viewBox="0 0 33 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.3395 13.55C18.9421 16.3969 14.5579 16.3969 12.1605 13.55L0.75 0L32.75 2.74432e-06L21.3395 13.55Z"
										fill="#262626"
									/>
								</svg>
							</div>
							<div className="mt-6 flex items-center gap-2">
								<Image
									className="rounded-[50%] w-9 h-9 object-cover"
									width={300}
									height={300}
									src="/porfile.png"
									alt=""
								/>
								<div className="flex flex-col justify-center">
									<h3 className="font-semibold sm:text-base text-sm">Mark Roberts</h3>
									<span className="text-[#808080] text-xs sm:text-sm">
										Founder of GreenEarth Eco Store
									</span>
								</div>
							</div>
						</div>
						<div className="h-full w-[350px]">
							<div className="flex flex-col gap-6 sm:w-[350px] w-[300px] sm:h-[70%] h-[65%] border border-[#262626] rounded-2xl p-5 bg-gradient-to-b from-[#1a1a1a]  to-transparent via-[#1a1a1a59]">
								<svg
									width="45"
									height="44"
									viewBox="0 0 45 44"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="1.25"
										y="0.5"
										width="43"
										height="43"
										rx="5.5"
										fill="#1A1A1A"
									/>
									<rect
										x="1.25"
										y="0.5"
										width="43"
										height="43"
										rx="5.5"
										stroke="#262626"
									/>
									<path
										d="M30.7025 17.9207C30.7147 18.097 30.7147 18.2733 30.7147 18.4513C30.7147 23.8732 26.5871 30.1263 19.0397 30.1263V30.123C16.8101 30.1263 14.6269 29.4876 12.75 28.2835C13.0742 28.3225 13.4 28.342 13.7266 28.3428C15.5743 28.3444 17.3691 27.7245 18.8227 26.5829C17.0669 26.5496 15.5272 25.4048 14.9893 23.7334C15.6044 23.8521 16.2381 23.8277 16.8418 23.6627C14.9275 23.276 13.5503 21.5941 13.5503 19.6408C13.5503 19.6229 13.5503 19.6059 13.5503 19.5888C14.1207 19.9065 14.7593 20.0828 15.4126 20.1023C13.6096 18.8974 13.0539 16.4988 14.1426 14.6235C16.2259 17.187 19.2997 18.7454 22.5993 18.9104C22.2686 17.4852 22.7203 15.9918 23.7864 14.99C25.439 13.4365 28.0382 13.5161 29.5918 15.1679C30.5107 14.9867 31.3915 14.6495 32.1975 14.1718C31.8912 15.1216 31.2501 15.9284 30.3937 16.4411C31.207 16.3453 32.0017 16.1275 32.75 15.7952C32.1991 16.6207 31.5052 17.3398 30.7025 17.9207Z"
										fill="white"
									/>
								</svg>
								<p className="sm:text-sm text-xs ">
									Working with DigitX was a pleasure. Their web design team
									created a stunning website that perfectly captured our brand's
									essence. The feedback from our customers has been
									overwhelmingly positive.
								</p>
							</div>
							<div className="ml-5">
								<svg
									width="33"
									height="16"
									viewBox="0 0 33 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.3395 13.55C18.9421 16.3969 14.5579 16.3969 12.1605 13.55L0.75 0L32.75 2.74432e-06L21.3395 13.55Z"
										fill="#262626"
									/>
								</svg>
							</div>
							<div className="mt-6 flex items-center gap-2">
								<Image
									className="rounded-[50%] w-9 h-9 object-cover"
									width={300}
									height={300}
									src="/porfile.png"
									alt=""
								/>
								<div className="flex flex-col justify-center">
									<h3 className="font-semibold sm:text-base text-sm">Mark Roberts</h3>
									<span className="text-[#808080] text-xs sm:text-sm">
										Founder of GreenEarth Eco Store
									</span>
								</div>
							</div>
						</div>
						<div className="h-full w-[350px]">
							<div className="flex flex-col gap-6 sm:w-[350px] w-[300px] sm:h-[70%] h-[65%] border border-[#262626] rounded-2xl p-5 bg-gradient-to-b from-[#1a1a1a]  to-transparent via-[#1a1a1a59]">
								<svg
									width="45"
									height="44"
									viewBox="0 0 45 44"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="1.25"
										y="0.5"
										width="43"
										height="43"
										rx="5.5"
										fill="#1A1A1A"
									/>
									<rect
										x="1.25"
										y="0.5"
										width="43"
										height="43"
										rx="5.5"
										stroke="#262626"
									/>
									<path
										d="M30.7025 17.9207C30.7147 18.097 30.7147 18.2733 30.7147 18.4513C30.7147 23.8732 26.5871 30.1263 19.0397 30.1263V30.123C16.8101 30.1263 14.6269 29.4876 12.75 28.2835C13.0742 28.3225 13.4 28.342 13.7266 28.3428C15.5743 28.3444 17.3691 27.7245 18.8227 26.5829C17.0669 26.5496 15.5272 25.4048 14.9893 23.7334C15.6044 23.8521 16.2381 23.8277 16.8418 23.6627C14.9275 23.276 13.5503 21.5941 13.5503 19.6408C13.5503 19.6229 13.5503 19.6059 13.5503 19.5888C14.1207 19.9065 14.7593 20.0828 15.4126 20.1023C13.6096 18.8974 13.0539 16.4988 14.1426 14.6235C16.2259 17.187 19.2997 18.7454 22.5993 18.9104C22.2686 17.4852 22.7203 15.9918 23.7864 14.99C25.439 13.4365 28.0382 13.5161 29.5918 15.1679C30.5107 14.9867 31.3915 14.6495 32.1975 14.1718C31.8912 15.1216 31.2501 15.9284 30.3937 16.4411C31.207 16.3453 32.0017 16.1275 32.75 15.7952C32.1991 16.6207 31.5052 17.3398 30.7025 17.9207Z"
										fill="white"
									/>
								</svg>
								<p className="sm:text-sm text-xs ">
									Working with DigitX was a pleasure. Their web design team
									created a stunning website that perfectly captured our brand's
									essence. The feedback from our customers has been
									overwhelmingly positive.
								</p>
							</div>
							<div className="ml-5">
								<svg
									width="33"
									height="16"
									viewBox="0 0 33 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21.3395 13.55C18.9421 16.3969 14.5579 16.3969 12.1605 13.55L0.75 0L32.75 2.74432e-06L21.3395 13.55Z"
										fill="#262626"
									/>
								</svg>
							</div>
							<div className="mt-6 flex items-center gap-2">
								<Image
									className="rounded-[50%] w-9 h-9 object-cover"
									width={300}
									height={300}
									src="/porfile.png"
									alt=""
								/>
								<div className="flex flex-col justify-center">
									<h3 className="font-semibold sm:text-base text-sm">Mark Roberts</h3>
									<span className="text-[#808080] text-xs sm:text-sm">
										Founder of GreenEarth Eco Store
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute w-72 right-0 bottom-0 h-[350px] bg-gradient-to-l from-[#0f0f0f] to-transparent hidden sm:block"></div>
				</div>
				<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-5 relative">
					<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
						<span className="text-[#808080]">Frequently</span> Asked Questions
					</h1>
					<p className="text-sm text-[#808080] text-center xl:w-[900px] w-[90vw]">
						Got questions? We've got answers. Check out our frequently asked
						questions section to find valuable insights into our processes,
						pricing, and more. Transparency is at the core of our client
						interactions.
					</p>
					<div className="my-5  flex justify-center items-center w-fit relative">
						<input
							type="text"
							className="bg-[#1A1A1A] rounded-full py-2 pl-10 outline-none focus:outline-none border border-[#262626] placeholder-[#666666] "
							placeholder="Search"
						/>
						<svg
							className="absolute left-3"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.0918 16.9085L15.0002 13.8418C16.2002 12.3455 16.7814 10.4462 16.6242 8.53458C16.4669 6.62292 15.5832 4.84415 14.1548 3.56403C12.7263 2.28392 10.8617 1.59976 8.94427 1.65222C7.02686 1.70469 5.20243 2.4898 3.84612 3.84612C2.4898 5.20243 1.70469 7.02686 1.65222 8.94427C1.59976 10.8617 2.28392 12.7263 3.56403 14.1548C4.84415 15.5832 6.62292 16.4669 8.53458 16.6242C10.4462 16.7814 12.3455 16.2002 13.8418 15.0002L16.9085 18.0668C16.986 18.1449 17.0781 18.2069 17.1797 18.2492C17.2812 18.2915 17.3902 18.3133 17.5002 18.3133C17.6102 18.3133 17.7191 18.2915 17.8206 18.2492C17.9222 18.2069 18.0144 18.1449 18.0918 18.0668C18.242 17.9114 18.326 17.7038 18.326 17.4877C18.326 17.2716 18.242 17.0639 18.0918 16.9085ZM9.16683 15.0002C8.01311 15.0002 6.88529 14.658 5.926 14.0171C4.96672 13.3761 4.21904 12.4651 3.77753 11.3992C3.33602 10.3333 3.2205 9.16036 3.44558 8.0288C3.67066 6.89725 4.22624 5.85785 5.04204 5.04204C5.85785 4.22624 6.89725 3.67066 8.0288 3.44558C9.16036 3.2205 10.3332 3.33602 11.3992 3.77753C12.4651 4.21904 13.3761 4.96672 14.0171 5.926C14.658 6.88529 15.0002 8.01311 15.0002 9.16683C15.0002 10.7139 14.3856 12.1977 13.2916 13.2916C12.1977 14.3856 10.7139 15.0002 9.16683 15.0002Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="w-full min-h-[50vh] flex flex-col  xl:flex-row transition-all duration-300 px-10">
						<div className="w-full gap-4 flex flex-col items-center transition-all duration-300">
							<div className="max-w-[620px] h-fit p-5 border-b gap-2 flex relative border-[#1a1a1a] transition-all duration-300">
								<div className="flex flex-col gap-4">
									<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px]">
										How long does it take to complete a web development project?
									</h4>
									<p
										className={`text-sm text-[#8C8C8C] ${
											isHidden1 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										The timeline varies depending on the project's complexity
										and requirements. Our team strives to deliver projects on
										time while maintaining the highest quality standards.
									</p>
								</div>
								<button
									onClick={toggleVisibility1}
									className={`hide absolute top-[15px] right-0  ${
										isHidden1 ? "opacity-0 h-0" : "opacity-100 h-auto"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
								<button
									onClick={toggleVisibility1}
									className={`Show absolute top-[15px] right-0  ${
										isHidden1 ? "opacity-100 h-auto" : "opacity-0 h-0"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
							<div className="max-w-[620px] h-fit p-5 border-b gap-2 flex relative border-[#1a1a1a] transition-all">
								<div className="flex flex-col gap-4">
									<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px]">
										Can you handle large-scale mobile app development projects?
									</h4>
									<p
										className={`text-sm text-[#8C8C8C] ${
											isHidden2 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										The timeline varies depending on the project's complexity
										and requirements. Our team strives to deliver projects on
										time while maintaining the highest quality standards.
									</p>
								</div>
								<button
									onClick={toggleVisibility2}
									className={`hide absolute top-[15px] right-0  ${
										isHidden2 ? "opacity-0 h-0" : "opacity-100 h-auto"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
								<button
									onClick={toggleVisibility2}
									className={`Show absolute top-[15px] right-0  ${
										isHidden2 ? "opacity-100 h-auto" : "opacity-0 h-0"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
							<div className="max-w-[620px] h-fit p-5 border-b gap-2 flex relative border-[#1a1a1a] transition-all">
								<div className="flex flex-col gap-4">
									<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px]">
										Do you offer maintenance services for websites and apps
										developed by other companies?
									</h4>
									<p
										className={`text-sm text-[#8C8C8C] ${
											isHidden3 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										The timeline varies depending on the project's complexity
										and requirements. Our team strives to deliver projects on
										time while maintaining the highest quality standards.
									</p>
								</div>
								<button
									onClick={toggleVisibility3}
									className={`hide absolute top-[15px] right-0  ${
										isHidden3 ? "opacity-0 h-0" : "opacity-100 h-auto"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
								<button
									onClick={toggleVisibility3}
									className={`Show absolute top-[15px] right-0  ${
										isHidden3 ? "opacity-100 h-auto" : "opacity-0 h-0"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
							<div className="max-w-[620px] h-fit p-5 border-b gap-2 flex  border-[#1a1a1a] transition-all relative">
								<div className="flex flex-col gap-4">
									<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px]">
										How do you ensure the security of user data in your web
										applications?
									</h4>
									<p
										className={`text-sm text-[#8C8C8C] ${
											isHidden4 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										The timeline varies depending on the project's complexity
										and requirements. Our team strives to deliver projects on
										time while maintaining the highest quality standards.
									</p>
								</div>
								<button
									onClick={toggleVisibility4}
									className={`hide absolute top-[15px] right-0  ${
										isHidden4 ? "opacity-0 h-0" : "opacity-100 h-auto"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
								<button
									onClick={toggleVisibility4}
									className={`Show absolute top-[15px] right-0  ${
										isHidden4 ? "opacity-100 h-auto" : "opacity-0 h-0"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="w-full gap-4 flex flex-col items-center">
							<div className="max-w-[620px] h-fit p-5 border-b gap-2 flex relative items-center border-[#1a1a1a] ">
								<div className="flex flex-col gap-4">
									<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px]">
										Can you create a responsive website design that looks great
										on all devices?
									</h4>
									<p
										className={`text-sm text-[#8C8C8C] ${
											isHidden5 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										The timeline varies depending on the project's complexity
										and requirements. Our team strives to deliver projects on
										time while maintaining the highest quality standards.
									</p>
								</div>
								<button
									onClick={toggleVisibility5}
									className={`hide absolute top-[15px] right-0  ${
										isHidden5 ? "opacity-0 h-0" : "opacity-100 h-auto"
									} transition-opacity duration-500`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
								<button
									onClick={toggleVisibility5}
									className={`Show absolute top-[15px] right-0  ${
										isHidden5 ? "opacity-100 h-auto" : "opacity-0 h-0"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
							<div className="max-w-[620px] h-fit p-5 border-b gap-2 flex items-center relative border-[#1a1a1a] transition-all">
								<div className="flex flex-col gap-4">
									<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px]">
										What digital marketing strategies do you employ to drive
										website traffic?
									</h4>
									<p
										className={`text-sm text-[#8C8C8C] ${
											isHidden6 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										The timeline varies depending on the project's complexity
										and requirements. Our team strives to deliver projects on
										time while maintaining the highest quality standards.
									</p>
								</div>
								<button
									onClick={toggleVisibility6}
									className={`hide absolute top-[15px] right-0  ${
										isHidden6 ? "opacity-0 h-0" : "opacity-100 h-auto"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
								<button
									onClick={toggleVisibility6}
									className={`Show absolute top-[15px] right-0  ${
										isHidden6 ? "opacity-100 h-auto" : "opacity-0 h-0"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
							<div className="max-w-[620px] h-fit p-5 border-b gap-2 flex items-center border-[#1a1a1a] relative transition-all ">
								<div className="flex flex-col gap-4">
									<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px]">
										Can you integrate third-party APIs into our mobile app?
									</h4>
									<p
										className={`text-sm text-[#8C8C8C] ${
											isHidden7 ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										The timeline varies depending on the project's complexity
										and requirements. Our team strives to deliver projects on
										time while maintaining the highest quality standards.
									</p>
								</div>
								<button
									onClick={toggleVisibility7}
									className={`hide absolute top-[15px] right-0  ${
										isHidden7 ? "opacity-0 h-0" : "opacity-100 h-auto"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
								<button
									onClick={toggleVisibility7}
									className={`Show absolute top-[15px] right-0  ${
										isHidden7 ? "opacity-100 h-auto" : "opacity-0 h-0"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
							<div className="max-w-[620px] h-fit p-5 border-b gap-2 flex items-center border-[#1a1a1a] transition-all relative">
								<div className="flex flex-col gap-4 ">
									<h4 className="md:font-semibold min-w-[250px] md:max-w-[500px]">
										How do you ensure cross-platform compatibility for mobile
										apps?
									</h4>
									<p
										className={`text-sm text-[#8C8C8C] ${
											isHidden ? "opacity-0 h-0" : "opacity-100 h-auto"
										} transition-opacity duration-1000`}
									>
										The timeline varies depending on the project's complexity
										and requirements. Our team strives to deliver projects on
										time while maintaining the highest quality standards.
									</p>
								</div>
								<button
									onClick={toggleVisibility}
									className={`hide absolute top-[15px] right-0  ${
										isHidden ? "opacity-0 h-0" : "opacity-100 h-auto"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
								<button
									onClick={toggleVisibility}
									className={`Show absolute top-[15px] right-0  ${
										isHidden ? "opacity-100 h-auto" : "opacity-0 h-0"
									} transition-opacity duration-1000`}
								>
									<svg
										width="36"
										height="36"
										viewBox="0 0 44 44"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="44" height="44" rx="22" fill="#1A1A1A" />
										<path
											d="M29 21H23V15C23 14.7348 22.8946 14.4804 22.7071 14.2929C22.5196 14.1054 22.2652 14 22 14C21.7348 14 21.4804 14.1054 21.2929 14.2929C21.1054 14.4804 21 14.7348 21 15V21H15C14.7348 21 14.4804 21.1054 14.2929 21.2929C14.1054 21.4804 14 21.7348 14 22C14 22.2652 14.1054 22.5196 14.2929 22.7071C14.4804 22.8946 14.7348 23 15 23H21V29C21 29.2652 21.1054 29.5196 21.2929 29.7071C21.4804 29.8946 21.7348 30 22 30C22.2652 30 22.5196 29.8946 22.7071 29.7071C22.8946 29.5196 23 29.2652 23 29V23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center mt-24  w-full sm:max-w-[1280px] mx-auto gap-5 relative">
					<h1 className="text-center text-3xl font-semibold xl:w-[500px]">
						<span className="text-[#808080]">Our</span> Partners and Clients
					</h1>
					<p className="text-sm text-[#808080] text-center xl:w-[900px] w-[90vw]">
						We are grateful for the opportunity to work with esteemed partners
						and clients. Our strong relationships are a testament to our
						dedication and expertise in the digital realm.
					</p>
					<div className="w-full min-h-[350px] flex lg:flex-row flex-col px-10 gap-5">
						<div className="lg:w-1/3 min-h-[350px] my-clientCardBG gap-10 flex flex-col items-center justify-center border border-[#292929] rounded-2xl">
							<div className="lg:w-2/3  h-20 flex justify-center items-center gap-3">
								<Image width={80} height={80} src={cardLogo} alt="" />
								<svg
									width="31"
									height="30"
									viewBox="0 0 31 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.459 7.125C16.459 6.50368 15.9553 6 15.334 6C14.7127 6 14.209 6.50368 14.209 7.125V13.875H7.45898C6.83766 13.875 6.33398 14.3787 6.33398 15C6.33398 15.6213 6.83766 16.125 7.45898 16.125L14.209 16.125V22.875C14.209 23.4963 14.7127 24 15.334 24C15.9553 24 16.459 23.4963 16.459 22.875V16.125L23.209 16.125C23.8303 16.125 24.334 15.6213 24.334 15C24.334 14.3787 23.8303 13.875 23.209 13.875H16.459V7.125Z"
										fill="white"
									/>
								</svg>
								<Image width={80} height={80} src={thirdPartner} alt="" />
							</div>
							<div className="w-3/4 h-1/3 flex flex-col items-center justify-center gap-3">
								<h4 className="text-center">HealthTech Innovations</h4>
								<p className="text-sm text-[#8C8C8C] text-center">
									DigitX developed a user-centric mobile app for HealthTech
									Innovations, helping them revolutionize the way people track
									and manage their health.
								</p>
							</div>
						</div>
						<div className="lg:w-1/3 min-h-[350px] my-clientCardBG gap-10 flex flex-col items-center justify-center border border-[#292929] rounded-2xl">
							<div className="lg:w-2/3  h-20 flex justify-center items-center gap-3">
								<Image width={80} height={80} src={cardLogo} alt="" />
								<svg
									width="31"
									height="30"
									viewBox="0 0 31 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.459 7.125C16.459 6.50368 15.9553 6 15.334 6C14.7127 6 14.209 6.50368 14.209 7.125V13.875H7.45898C6.83766 13.875 6.33398 14.3787 6.33398 15C6.33398 15.6213 6.83766 16.125 7.45898 16.125L14.209 16.125V22.875C14.209 23.4963 14.7127 24 15.334 24C15.9553 24 16.459 23.4963 16.459 22.875V16.125L23.209 16.125C23.8303 16.125 24.334 15.6213 24.334 15C24.334 14.3787 23.8303 13.875 23.209 13.875H16.459V7.125Z"
										fill="white"
									/>
								</svg>
								<Image width={80} height={80} src={thirdPartner} alt="" />
							</div>
							<div className="w-3/4 h-1/3 flex flex-col items-center justify-center gap-3">
								<h4 className="text-center">HealthTech Innovations</h4>
								<p className="text-sm text-[#8C8C8C] text-center">
									DigitX developed a user-centric mobile app for HealthTech
									Innovations, helping them revolutionize the way people track
									and manage their health.
								</p>
							</div>
						</div>
						<div className="lg:w-1/3 min-h-[350px] my-clientCardBG gap-10 flex flex-col items-center justify-center border border-[#292929] rounded-2xl">
							<div className="lg:w-2/3  h-20 flex justify-center items-center gap-3">
								<Image width={80} height={80} src={cardLogo} alt="" />
								<svg
									width="31"
									height="30"
									viewBox="0 0 31 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.459 7.125C16.459 6.50368 15.9553 6 15.334 6C14.7127 6 14.209 6.50368 14.209 7.125V13.875H7.45898C6.83766 13.875 6.33398 14.3787 6.33398 15C6.33398 15.6213 6.83766 16.125 7.45898 16.125L14.209 16.125V22.875C14.209 23.4963 14.7127 24 15.334 24C15.9553 24 16.459 23.4963 16.459 22.875V16.125L23.209 16.125C23.8303 16.125 24.334 15.6213 24.334 15C24.334 14.3787 23.8303 13.875 23.209 13.875H16.459V7.125Z"
										fill="white"
									/>
								</svg>
								<Image width={80} height={80} src={thirdPartner} alt="" />
							</div>
							<div className="w-3/4 h-1/3 flex flex-col items-center justify-center gap-3">
								<h4 className="text-center">HealthTech Innovations</h4>
								<p className="text-sm text-[#8C8C8C] text-center">
									DigitX developed a user-centric mobile app for HealthTech
									Innovations, helping them revolutionize the way people track
									and manage their health.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full min-h-[350px] flex lg:flex-row flex-col px-10 gap-5">
						<div className="lg:w-1/3 min-h-[350px] my-clientCardBG gap-10 flex flex-col items-center justify-center border border-[#292929] rounded-2xl">
							<div className="lg:w-2/3  h-20 flex justify-center items-center gap-3">
								<Image width={80} height={80} src={cardLogo} alt="" />
								<svg
									width="31"
									height="30"
									viewBox="0 0 31 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.459 7.125C16.459 6.50368 15.9553 6 15.334 6C14.7127 6 14.209 6.50368 14.209 7.125V13.875H7.45898C6.83766 13.875 6.33398 14.3787 6.33398 15C6.33398 15.6213 6.83766 16.125 7.45898 16.125L14.209 16.125V22.875C14.209 23.4963 14.7127 24 15.334 24C15.9553 24 16.459 23.4963 16.459 22.875V16.125L23.209 16.125C23.8303 16.125 24.334 15.6213 24.334 15C24.334 14.3787 23.8303 13.875 23.209 13.875H16.459V7.125Z"
										fill="white"
									/>
								</svg>
								<Image width={80} height={80} src={thirdPartner} alt="" />
							</div>
							<div className="w-3/4 h-1/3 flex flex-col items-center justify-center gap-3">
								<h4 className="text-center">HealthTech Innovations</h4>
								<p className="text-sm text-[#8C8C8C] text-center">
									DigitX developed a user-centric mobile app for HealthTech
									Innovations, helping them revolutionize the way people track
									and manage their health.
								</p>
							</div>
						</div>
						<div className="lg:w-1/3 min-h-[350px] my-clientCardBG gap-10 flex flex-col items-center justify-center border border-[#292929] rounded-2xl">
							<div className="lg:w-2/3  h-20 flex justify-center items-center gap-3">
								<Image width={80} height={80} src={cardLogo} alt="" />
								<svg
									width="31"
									height="30"
									viewBox="0 0 31 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.459 7.125C16.459 6.50368 15.9553 6 15.334 6C14.7127 6 14.209 6.50368 14.209 7.125V13.875H7.45898C6.83766 13.875 6.33398 14.3787 6.33398 15C6.33398 15.6213 6.83766 16.125 7.45898 16.125L14.209 16.125V22.875C14.209 23.4963 14.7127 24 15.334 24C15.9553 24 16.459 23.4963 16.459 22.875V16.125L23.209 16.125C23.8303 16.125 24.334 15.6213 24.334 15C24.334 14.3787 23.8303 13.875 23.209 13.875H16.459V7.125Z"
										fill="white"
									/>
								</svg>
								<Image width={80} height={80} src={thirdPartner} alt="" />
							</div>
							<div className="w-3/4 h-1/3 flex flex-col items-center justify-center gap-3">
								<h4 className="text-center">HealthTech Innovations</h4>
								<p className="text-sm text-[#8C8C8C] text-center">
									DigitX developed a user-centric mobile app for HealthTech
									Innovations, helping them revolutionize the way people track
									and manage their health.
								</p>
							</div>
						</div>
						<div className="lg:w-1/3 min-h-[350px] my-clientCardBG gap-10 flex flex-col items-center justify-center border border-[#292929] rounded-2xl">
							<div className="lg:w-2/3  h-20 flex justify-center items-center gap-3">
								<Image width={80} height={80} src={cardLogo} alt="" />
								<svg
									width="31"
									height="30"
									viewBox="0 0 31 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.459 7.125C16.459 6.50368 15.9553 6 15.334 6C14.7127 6 14.209 6.50368 14.209 7.125V13.875H7.45898C6.83766 13.875 6.33398 14.3787 6.33398 15C6.33398 15.6213 6.83766 16.125 7.45898 16.125L14.209 16.125V22.875C14.209 23.4963 14.7127 24 15.334 24C15.9553 24 16.459 23.4963 16.459 22.875V16.125L23.209 16.125C23.8303 16.125 24.334 15.6213 24.334 15C24.334 14.3787 23.8303 13.875 23.209 13.875H16.459V7.125Z"
										fill="white"
									/>
								</svg>
								<Image width={80} height={80} src={thirdPartner} alt="" />
							</div>
							<div className="w-3/4 h-1/3 flex flex-col items-center justify-center gap-3">
								<h4 className="text-center">HealthTech Innovations</h4>
								<p className="text-sm text-[#8C8C8C] text-center">
									DigitX developed a user-centric mobile app for HealthTech
									Innovations, helping them revolutionize the way people track
									and manage their health.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
