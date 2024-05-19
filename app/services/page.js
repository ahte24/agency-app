import React from "react";
import Image from "next/image";
import Link from "next/link";
import serviceLeftAngle from "@/public/serviceLeftAngle.svg";
import serviceRightAngle from "@/public/serviceRightAngle.svg";
import cardIconOne from "@/public/cardIconOne.svg";
import cardIconTwo from "@/public/cardIconTwo.svg";
import cardIconThree from "@/public/cardIconThree.svg";
import cardIconFourth from "@/public/cardIconFourth.svg";
import servicesprotfolio1 from "@/public/servicesprotfolio1.jpg";
import servicesprotfolio2 from "@/public/servicesportfolio2.jpg";
import sun from "@/public/sun.svg";
const Services = () => {
	return (
		<>
			<main>
				<div className="Herro-Section">
					<div className="h-[600px] my-cardBG flex relative">
						<div className="w-1/3 pt-20 flex">
							<Image src={serviceLeftAngle} width={600} height={700} alt="" />
						</div>
						<div className="w-1/3 mt-20 "> </div>
						<div className="w-1/3 pt-20 flex justify-end">
							<Image src={serviceRightAngle} width={600} height={700} alt="" />
						</div>
					</div>
					<div className="flex absolute top-20 left-0 ">
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
					</div>
					<div className="flex absolute top-20 right-0 ">
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
						<div className="backdrop-filter backdrop-blur-3xl w-[30px] h-[520px] bg-opacity-20"></div>
					</div>
					<div className="absolute top-20 w-[47vw] gap-5 flex flex-col justify-center h-[520px] left-[18%]">
						<h1 className="text-5xl font-semibold">
							Our Comprehensive{" "}
							<span className="text-[#666666]">Digital Solutions</span>
						</h1>
						<p className="text-[#c7c5c5] text-sm">
							At DigitX, we offer a comprehensive suite of digital solutions
							designed to propel your business to new heights in the digital
							realm. With a team of skilled professionals, cutting-edge
							technologies, and a passion for innovation, we are committed to
							delivering exceptional results for every project we undertake.
							From captivating web design that leaves a lasting impression to
							seamless web development that ensures optimal functionality, we
							cover every aspect of your online presence.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center mt-24 max-w-[1280px] mx-auto gap-10">
					<h1 className="text-center text-3xl font-semibold w-[500px]">
						<span className="text-[#808080]">Our</span> Services
					</h1>
					<p className="text-sm text-[#808080] text-center w-[900px]">
						At DigitX, we are committed to providing exceptional digital
						solutions tailored to suit your unique business needs. Our
						comprehensive service offerings cover a wide spectrum of digital
						disciplines, including web design, app development, web development,
						and marketing.
					</p>
					<div className="w-full flex gap-10 ">
						<div className="w-1/2 border border-[#292929] h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-10">
							<Image src={cardIconOne} width={100} height={100} alt="" />
							<div className="flex flex-col justify-center items-center gap-4 w-[80%]">
								<h3 className="text-xl font-semibold">Web Design</h3>
								<p className="text-sm text-center text-[#8C8C8C]">
									Our Web Design service is all about creating visually stunning
									and user-friendly websites that leave a lasting impression on
									your audience. We blend creativity with functionality to
									deliver websites that showcase your brand's identity while
									ensuring seamless navigation and optimal user experience.
								</p>
							</div>
							<div className="flex justify-between items-center w-[80%]">
								<span className="text-sm text-[#666666] ">
									Starts at price: <span className="text-white">$1,500</span>
								</span>
								<Link
									className="flex items-center gap-2 py-2 px-4 text-sm border bg-[#0f0f0f] border-[#262626] rounded-full"
									href="/#"
								>
									Book a Call
									<div className="p-1 bg-[#1a1a1a] rounded-full">
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
						<div className="w-1/2 border border-[#292929] h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-10">
							<Image src={cardIconTwo} width={100} height={100} alt="" />
							<div className="flex flex-col justify-center items-center gap-4 w-[80%]">
								<h3 className="text-xl font-semibold">Web Development </h3>
								<p className="text-sm text-center text-[#8C8C8C]">
									Our Web Development service is focused on turning your website
									into a powerful digital asset. We utilize the latest
									technologies and industry best practices to build dynamic and
									scalable websites that cater to your business objectives.
								</p>
							</div>
							<div className="flex justify-between items-center w-[80%]">
								<span className="text-sm text-[#666666] ">
									Starts at price: <span className="text-white">$1,500</span>
								</span>
								<Link
									className="flex items-center gap-2 py-2 px-4 text-sm border bg-[#0f0f0f] border-[#262626] rounded-full"
									href="/#"
								>
									Book a Call
									<div className="p-1 bg-[#1a1a1a] rounded-full">
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
					<div className="w-full flex gap-10 ">
						<div className="w-1/2 border border-[#292929] h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-10">
							<Image src={cardIconThree} width={100} height={100} alt="" />
							<div className="flex flex-col justify-center items-center gap-4 w-[80%]">
								<h3 className="text-xl font-semibold">
									Mobile App Development
								</h3>
								<p className="text-sm text-center text-[#8C8C8C]">
									With our Mobile App Development service, we harness the power
									of mobile technology to create cutting-edge applications that
									engage your customers on-the-go. Our team Our team of skilled
									developers builds feature-rich and intuitive apps for both
									Android and iOS platforms.
								</p>
							</div>
							<div className="flex justify-between items-center w-[80%]">
								<span className="text-sm text-[#666666] ">
									Starts at price: <span className="text-white">$1,500</span>
								</span>
								<Link
									className="flex items-center gap-2 py-2 px-4 text-sm border bg-[#0f0f0f] border-[#262626] rounded-full"
									href="/#"
								>
									Book a Call
									<div className="p-1 bg-[#1a1a1a] rounded-full">
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
						<div className="w-1/2 border border-[#292929] h-[500px] rounded-2xl my-cardBG flex flex-col justify-center items-center gap-10">
							<Image src={cardIconFourth} width={100} height={100} alt="" />
							<div className="flex flex-col justify-center items-center gap-4 w-[80%]">
								<h3 className="text-xl font-semibold">Digital Marketing</h3>
								<p className="text-sm text-center text-[#8C8C8C]">
									In the digital age, marketing is a critical aspect of your
									business's success. Our Digital Marketing service employs
									data-driven strategies to enhance your brand's visibility,
									attract targeted traffic, and boost conversions. From SEO and
									PPC campaigns to social media marketing, we've got your
									digital marketing needs covered.
								</p>
							</div>
							<div className="flex justify-between items-center w-[80%]">
								<span className="text-sm text-[#666666] ">
									Starts at price: <span className="text-white">$1,500</span>
								</span>
								<Link
									className="flex items-center gap-2 py-2 px-4 text-sm border bg-[#0f0f0f] border-[#262626] rounded-full"
									href="/#"
								>
									Book a Call
									<div className="p-1 bg-[#1a1a1a] rounded-full">
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
				<div className="flex flex-col items-center mt-24 max-w-[1280px] mx-auto gap-10">
					<h1 className="text-center text-3xl font-semibold w-[500px]">
						<span className="text-[#808080]">Categories of</span> Services
					</h1>
					<p className="text-sm text-[#808080] text-center w-[900px]">
						At DigitX, we are committed to providing exceptional digital
						solutions tailored to suit your unique business needs. Our
						comprehensive service offerings cover a wide spectrum of digital
						disciplines, including web design, app development, web development,
						and marketing.
					</p>
					<div className="w-full  flex">
						<div className="w-[22%]  flex flex-col  gap-2 items-center">
							<button className="w-[252px] rounded-xl border border-[#1F1F1F] text-left flex p-3 gap-3  text-sm py-4">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 1.5C12.4142 1.5 12.75 1.83579 12.75 2.25V4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5V2.25C11.25 1.83579 11.5858 1.5 12 1.5ZM5.63604 4.13604C5.92893 3.84315 6.40381 3.84315 6.6967 4.13604L8.28769 5.72703C8.58058 6.01992 8.58058 6.4948 8.28769 6.78769C7.9948 7.08058 7.51992 7.08058 7.22703 6.78769L5.63604 5.1967C5.34315 4.90381 5.34315 4.42893 5.63604 4.13604ZM18.364 4.13604C18.6569 4.42893 18.6569 4.90381 18.364 5.1967L16.773 6.78769C16.4801 7.08058 16.0052 7.08058 15.7123 6.78769C15.4194 6.4948 15.4194 6.01992 15.7123 5.72703L17.3033 4.13604C17.5962 3.84315 18.0711 3.84315 18.364 4.13604ZM11.5484 8.63179C11.8602 8.54824 12.1905 8.67359 12.3684 8.94299L17.5955 16.8599C17.7627 17.113 17.7609 17.4419 17.591 17.6932C17.421 17.9445 17.1165 18.0687 16.8193 18.0079L14.722 17.5787L15.7668 21.4777C15.874 21.8778 15.6365 22.289 15.2364 22.3963C14.8363 22.5035 14.4251 22.266 14.3179 21.8659L13.2732 17.967L11.6717 19.3872C11.4447 19.5884 11.1189 19.6332 10.8461 19.5005C10.5733 19.3678 10.4073 19.0839 10.4254 18.7811L10.9939 9.3113C11.0132 8.98905 11.2366 8.71534 11.5484 8.63179ZM3 10.5C3 10.0858 3.33579 9.75 3.75 9.75H6C6.41421 9.75 6.75 10.0858 6.75 10.5C6.75 10.9142 6.41421 11.25 6 11.25H3.75C3.33579 11.25 3 10.9142 3 10.5ZM17.25 10.5C17.25 10.0858 17.5858 9.75 18 9.75H20.25C20.6642 9.75 21 10.0858 21 10.5C21 10.9142 20.6642 11.25 20.25 11.25H18C17.5858 11.25 17.25 10.9142 17.25 10.5ZM8.28769 14.2123C8.58058 14.5052 8.58058 14.9801 8.28769 15.273L6.6967 16.864C6.40381 17.1569 5.92893 17.1569 5.63604 16.864C5.34315 16.5711 5.34315 16.0962 5.63604 15.8033L7.22703 14.2123C7.51992 13.9194 7.9948 13.9194 8.28769 14.2123Z"
										fill="white"
									/>
								</svg>
								Web Design
							</button>

							<button className="w-[252px] rounded-xl border border-[#1F1F1F] text-left flex p-3 gap-3 text-sm py-4">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.75 7.5L9.75 9.75L6.75 12M11.25 12H14.25M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								Web Development
							</button>

							<button className="w-[252px] flex p-3 gap-3 rounded-xl border border-[#1F1F1F] text-left text-sm py-4">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.5 1.5H8.25C7.00736 1.5 6 2.50736 6 3.75V20.25C6 21.4926 7.00736 22.5 8.25 22.5H15.75C16.9926 22.5 18 21.4926 18 20.25V3.75C18 2.50736 16.9926 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								Mobile App Development
							</button>

							<button className="w-[252px] flex p-3 gap-3 rounded-xl border border-[#1F1F1F] text-left text-sm py-4">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 3V5.25M18.364 5.63604L16.773 7.22703M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.22703 16.773L5.63604 18.364M5.25 12H3M7.22703 7.22703L5.63604 5.63604M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								Digital Marketing
							</button>
						</div>
						<div className="w-[78%] px-4 ">
							<div className="flex flex-col gap-3">
								<h4 className="text-lg font-semibold">Web Design</h4>
								<p className="text-[#8C8C8C] text-sm">
									Web Design is the art and science of creating visually
									appealing and user-friendly websites that reflect your brand
									identity and resonate with your target audience. At DigitX,
									our web design process involves a careful blend of creativity,
									user experience (UX) design, and cutting-edge technologies. We
									take the time to understand your business goals, target
									market, and unique selling points to create a website that not
									only looks great but also drives results.
								</p>
							</div>
							<div className="w-full p-8 border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8">
								<div className="px-4 flex flex-col gap-4">
									<h4 className="text-lg font-semibold">Key Features</h4>
								</div>
								<div className="w-full h-full flex flex-col gap-10">
									<div className="flex gap-5 w-full h-1/2">
										<div className="p-4 flex flex-col gap-2 justify-center w-1/2">
											<h1 className="font-semibold">Customized Design</h1>
											<p className="text-sm text-[#8C8C8C]">
												We craft bespoke designs tailored to match your brand
												personality and industry.
											</p>
										</div>
										<div className="border-r border-[#1F1F1F]"></div>
										<div className="p-4 flex flex-col gap-2 justify-center w-1/2">
											<h1 className="font-semibold">Responsive Design</h1>
											<p className="text-sm text-[#8C8C8C]">
												Ensuring your website adapts seamlessly to different
												devices and screen sizes.
											</p>
										</div>
									</div>

									<div className="border-b border-[#1F1F1F]"></div>

									<div className="flex gap-5 w-full h-1/2 ">
										<div className="p-4 flex flex-col gap-2 w-1/2 justify-center">
											<h1 className="font-semibold">User-Centric Approach</h1>
											<p className="text-sm text-[#8C8C8C]">
												Prioritizing ease of navigation and intuitive user
												experience.
											</p>
										</div>
										<div className="border-r border-[#1F1F1F]"></div>
										<div className="p-4 flex flex-col gap-2 w-1/2 justify-center">
											<h1 className="font-semibold">Visual Elements</h1>
											<p className="text-sm text-[#8C8C8C]">
												Incorporating engaging visuals, graphics, and animations
												to enhance the overall appeal.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full p-8 border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8">
								<div className="px-4 flex flex-col gap-4">
									<h4 className="text-lg font-semibold">Design Process</h4>
									<p className="text-sm text-[#808080]">
										Our Web Design process follows a systematic approach to
										deliver a website that aligns perfectly with your business
										needs and branding. Here's an overview of our design process
									</p>
								</div>
								<div className="w-full h-full flex flex-col gap-10">
									<div className="flex gap-5 w-full h-1/2">
										<div className="p-4 flex flex-col gap-2 justify-center w-1/2">
											<h1 className="font-semibold">Customized Design</h1>
											<p className="text-sm text-[#8C8C8C]">
												We craft bespoke designs tailored to match your brand
												personality and industry.
											</p>
										</div>
										<div className="border-r border-[#1F1F1F]"></div>
										<div className="p-4 flex flex-col gap-2 justify-center w-1/2">
											<h1 className="font-semibold">Responsive Design</h1>
											<p className="text-sm text-[#8C8C8C]">
												Ensuring your website adapts seamlessly to different
												devices and screen sizes.
											</p>
										</div>
									</div>

									<div className="border-b border-[#1F1F1F]"></div>

									<div className="flex gap-5 w-full h-1/2 ">
										<div className="p-4 flex flex-col gap-2 w-1/2 justify-center">
											<h1 className="font-semibold">User-Centric Approach</h1>
											<p className="text-sm text-[#8C8C8C]">
												Prioritizing ease of navigation and intuitive user
												experience.
											</p>
										</div>
										<div className="border-r border-[#1F1F1F]"></div>
										<div className="p-4 flex flex-col gap-2 w-1/2 justify-center">
											<h1 className="font-semibold">Visual Elements</h1>
											<p className="text-sm text-[#8C8C8C]">
												Incorporating engaging visuals, graphics, and animations
												to enhance the overall appeal.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full p-8 py-12  border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8 relative">
								<div className="px-4 flex flex-col gap-4">
									<h4 className="text-lg font-semibold">
										Web Design Portfolio
									</h4>
									<p className="text-sm text-[#808080]">
										Check out some of our most recent Web Design projects in the
										table below
									</p>
								</div>
								<div className="flex justify-between gap-5 px-4">
									<div className="w-[450px] h-[230px] rounded-lg overflow-hidden">
										<Image
											src={servicesprotfolio1}
											className="object-contain"
											alt=""
										/>
									</div>
									<div className="w-[450px] h-[230px] rounded-lg overflow-hidden">
										<Image
											src={servicesprotfolio2}
											className="object-contain"
											alt=""
										/>
									</div>
								</div>
								<Link
									className=" absolute h-[50px] bottom-1 bg-[#0f0f0f] z-10 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-2 py-2 px-4 text-sm border border-[#1F1F1F] backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-full"
									href="/#"
								>
									View All Projects
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
								<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
							</div>
							<div className="w-full p-8 py-12  border border-[#1F1F1F] mt-10 rounded-xl flex-col  flex gap-8 relative">
								<div className="px-4 flex flex-col gap-4">
									<h4 className="text-lg font-semibold">
										Our Web Design Competed Projects
									</h4>
									<p className="text-sm text-[#808080]">
										At DigitX, we are dedicated to creating transformative
										mobile apps that empower your business and enrich your
										users' experiences.
									</p>
									<div className="flex flex-col gap-5">
										<div className="w-full h-14 rounded-xl border border-[#1F1F1F] flex">
											<h3 className="w-1/3 p-4">Project Name</h3>
											<h3 className="w-1/3 p-4 border-x border-[#1F1F1F]">
												Industry
											</h3>
											<h3 className="w-1/3 p-4">Website URL</h3>
										</div>
										<div className="w-full h-40 border border-[#1F1F1F] rounded-xl">
											<div className="h-1/3 w-full flex">
												<div className="text-sm w-1/3 h-full p-4 font-thin">
													{" "}
													GlobalEarth Eco Store
												</div>
												<div className=" text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
													{" "}
													E-commerce
												</div>
												<Link
													href={"www.globaltechsolutions.com"}
													className="text-sm w-1/3 h-full p-4 font-thin"
												>
													www.globaltechsolutions.com{" "}
												</Link>
											</div>
											<div className="h-1/3 w-full border-y border-[#1F1F1F] flex">
												<div className="text-sm w-1/3 h-full p-4 font-thin">
													{" "}
													GreenEarth Eco Store
												</div>
												<div className="text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
													Design Agency
												</div>
												<Link
													href={"www.greenearthecostore.com"}
													className="text-sm w-1/3 h-full p-4 font-thin"
												>
													www.greenearthecostore.com
												</Link>
											</div>
											<div className="h-1/3 w-full flex">
												<div className=" text-sm w-1/3 h-full p-4 font-thin">
													{" "}
													TechGuru Inc.
												</div>
												<div className="text-sm w-1/3 h-full p-4 font-thin border-x border-[#1F1F1F]">
													Technology
												</div>
												<Link
													href="WWW.techguruinc.com"
													className="w-1/3 h-full p-4 font-thin text-sm"
												>
													www.techguruinc.com
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center mt-24 max-w-[1280px] mx-auto gap-10 relative">
					<h1 className="text-center text-3xl font-semibold w-[500px]">
						Success <span className="text-[#808080]">Stories</span>
					</h1>
					<p className="text-sm text-[#808080] text-center w-[900px]">
						At DigitX, our success is defined by the achievements of our valued
						clients. We take immense pride in the transformative impact our
						digital solutions have had on their businesses. Here are some
						inspiring success stories that highlight the outcomes of our
						collaborative efforts
					</p>
					<div className="flex flex-col items-center w-full h-[670px]">
						<div className="flex gap-8 w-full h-full">
							<div className="w-1/2 rounded-xl border border-[#1F1F1F] relative">
								<div className="w-full h-full rounded-xl  absolute ">
									<Image width={700} height={400} src={sun} alt="" />
								</div>
								<div className="w-full rounded-xl p-10 absolute backdrop-filter backdrop-blur-lg bg-opacity-20 ">
									<div className="w-full flex flex-col gap-6 text-lg">
										<div className=" flex  items-center gap-5">
											<svg
												width="50"
												height="50"
												viewBox="0 0 59 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g filter="url(#filter0_i_26_403)">
													<rect
														x="2.5"
														y="2"
														width="54"
														height="54"
														rx="27"
														fill="url(#paint0_linear_26_403)"
													/>
													<rect
														x="1.5"
														y="1"
														width="56"
														height="56"
														rx="28"
														stroke="#666666"
														stroke-width="2"
													/>
													<path
														d="M29.5 33.3333L33.2917 35.5V31.1667L37.0833 29L33.2917 26.8333V22.5L29.5 24.6667L25.7083 22.5V26.8333L21.9167 29L25.7083 31.1667V35.5L29.5 33.3333Z"
														fill="white"
													/>
													<path
														d="M40.875 26.8333L37.0833 29V24.6667L33.2917 22.5L37.0833 20.3333L40.875 22.5V26.8333Z"
														fill="white"
													/>
													<path
														d="M40.875 31.1667L37.0833 29V33.3333L33.2917 35.5L37.0833 37.6667L40.875 35.5V31.1667Z"
														fill="white"
													/>
													<path
														d="M25.7083 39.8333V35.5L29.5 37.6667L33.2917 35.5V39.8333L29.5 42L25.7083 39.8333Z"
														fill="white"
													/>
													<path
														d="M18.125 31.1667L21.9167 29V33.3333L25.7083 35.5L21.9167 37.6667L18.125 35.5V31.1667Z"
														fill="white"
													/>
													<path
														d="M18.125 26.8333L21.9167 29V24.6667L25.7083 22.5L21.9167 20.3333L18.125 22.5V26.8333Z"
														fill="white"
													/>
													<path
														d="M25.7083 18.1667V22.5L29.5 20.3333L33.2917 22.5V18.1667L29.5 16L25.7083 18.1667Z"
														fill="white"
													/>
												</g>
												<defs>
													<filter
														id="filter0_i_26_403"
														x="0.5"
														y="0"
														width="58"
														height="58"
														filterUnits="userSpaceOnUse"
														color-interpolation-filters="sRGB"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feBlend
															mode="normal"
															in="SourceGraphic"
															in2="BackgroundImageFix"
															result="shape"
														/>
														<feColorMatrix
															in="SourceAlpha"
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															result="hardAlpha"
														/>
														<feMorphology
															radius="13"
															operator="erode"
															in="SourceAlpha"
															result="effect1_innerShadow_26_403"
														/>
														<feOffset />
														<feGaussianBlur stdDeviation="4" />
														<feComposite
															in2="hardAlpha"
															operator="arithmetic"
															k2="-1"
															k3="1"
														/>
														<feColorMatrix
															type="matrix"
															values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.25 0"
														/>
														<feBlend
															mode="normal"
															in2="shape"
															result="effect1_innerShadow_26_403"
														/>
													</filter>
													<linearGradient
														id="paint0_linear_26_403"
														x1="-5.27273"
														y1="-8.63637"
														x2="64.6818"
														y2="67.0455"
														gradientUnits="userSpaceOnUse"
													>
														<stop />
														<stop
															offset="0.256291"
															stop-color="#E7E7E7"
															stop-opacity="0.6875"
														/>
														<stop
															offset="0.457331"
															stop-color="white"
															stop-opacity="0.34139"
														/>
														<stop
															offset="0.584253"
															stop-color="white"
															stop-opacity="0.222774"
														/>
														<stop offset="1" stop-color="#666666" />
													</linearGradient>
												</defs>
											</svg>
											<h3 className="font-semibold">Fitness Tracker App</h3>
										</div>
										<div className="text-sm flex gap-4">
											<Link
												href={""}
												className="px-3 py-[4px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
											>
												<svg
													width="38"
													height="38"
													viewBox="0 0 42 42"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="41"
														height="41"
														rx="20.5"
														fill="#1A1A1A"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="41"
														height="41"
														rx="20.5"
														stroke="#262626"
													/>
													<path
														d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span>E-commerce</span>
											</Link>
											<Link
												href={""}
												className="px-3 py-[4px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
											>
												<svg
													width="38"
													height="38"
													viewBox="0 0 42 42"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="41"
														height="41"
														rx="20.5"
														fill="#1A1A1A"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="41"
														height="41"
														rx="20.5"
														stroke="#262626"
													/>
													<path
														d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span>Web Design & Development</span>
											</Link>
										</div>
									</div>
									<div className=" border border-[#1F1F1F] flex flex-col gap-6 rounded-xl mt-10 p-5">
										<div className="h-1/2  flex  flex-col gap-4">
											<h3>Chalange</h3>
											<p className="text-sm text-[#8C8C8C]">
												ABC Enterprises approached us with a desire to revamp
												their outdated website and create a more user-friendly
												and visually appealing platform. They sought to improve
												user engagement and increase online sales.
											</p>
										</div>
										<div className="border-b border-[#1F1F1F]"></div>
										<div className="h-1/2 w-full flex p-4 flex-col gap-4">
											<h3>Chalange</h3>
											<p className="text-sm text-[#8C8C8C]">
												ABC Enterprises approached us with a desire to revamp
												their outdated website and create a more user-friendly
												and visually appealing platform. They sought to improve
												user engagement and increase online sales.
											</p>
											<Link href={""} className="underline">
												Read Full Story
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="w-1/2 rounded-xl border border-[#1F1F1F] relative">
								<div className="w-full h-full rounded-xl  absolute ">
									<Image width={700} height={400} src={sun} alt="" />
								</div>
								<div className="w-full rounded-xl p-10 absolute backdrop-filter backdrop-blur-lg bg-opacity-20 ">
									<div className="w-full flex flex-col gap-6 text-lg">
										<div className=" flex  items-center gap-5">
											<svg
												width="50"
												height="50"
												viewBox="0 0 59 58"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g filter="url(#filter0_i_26_403)">
													<rect
														x="2.5"
														y="2"
														width="54"
														height="54"
														rx="27"
														fill="url(#paint0_linear_26_403)"
													/>
													<rect
														x="1.5"
														y="1"
														width="56"
														height="56"
														rx="28"
														stroke="#666666"
														stroke-width="2"
													/>
													<path
														d="M29.5 33.3333L33.2917 35.5V31.1667L37.0833 29L33.2917 26.8333V22.5L29.5 24.6667L25.7083 22.5V26.8333L21.9167 29L25.7083 31.1667V35.5L29.5 33.3333Z"
														fill="white"
													/>
													<path
														d="M40.875 26.8333L37.0833 29V24.6667L33.2917 22.5L37.0833 20.3333L40.875 22.5V26.8333Z"
														fill="white"
													/>
													<path
														d="M40.875 31.1667L37.0833 29V33.3333L33.2917 35.5L37.0833 37.6667L40.875 35.5V31.1667Z"
														fill="white"
													/>
													<path
														d="M25.7083 39.8333V35.5L29.5 37.6667L33.2917 35.5V39.8333L29.5 42L25.7083 39.8333Z"
														fill="white"
													/>
													<path
														d="M18.125 31.1667L21.9167 29V33.3333L25.7083 35.5L21.9167 37.6667L18.125 35.5V31.1667Z"
														fill="white"
													/>
													<path
														d="M18.125 26.8333L21.9167 29V24.6667L25.7083 22.5L21.9167 20.3333L18.125 22.5V26.8333Z"
														fill="white"
													/>
													<path
														d="M25.7083 18.1667V22.5L29.5 20.3333L33.2917 22.5V18.1667L29.5 16L25.7083 18.1667Z"
														fill="white"
													/>
												</g>
												<defs>
													<filter
														id="filter0_i_26_403"
														x="0.5"
														y="0"
														width="58"
														height="58"
														filterUnits="userSpaceOnUse"
														color-interpolation-filters="sRGB"
													>
														<feFlood
															flood-opacity="0"
															result="BackgroundImageFix"
														/>
														<feBlend
															mode="normal"
															in="SourceGraphic"
															in2="BackgroundImageFix"
															result="shape"
														/>
														<feColorMatrix
															in="SourceAlpha"
															type="matrix"
															values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
															result="hardAlpha"
														/>
														<feMorphology
															radius="13"
															operator="erode"
															in="SourceAlpha"
															result="effect1_innerShadow_26_403"
														/>
														<feOffset />
														<feGaussianBlur stdDeviation="4" />
														<feComposite
															in2="hardAlpha"
															operator="arithmetic"
															k2="-1"
															k3="1"
														/>
														<feColorMatrix
															type="matrix"
															values="0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0 0.166667 0 0 0 0.25 0"
														/>
														<feBlend
															mode="normal"
															in2="shape"
															result="effect1_innerShadow_26_403"
														/>
													</filter>
													<linearGradient
														id="paint0_linear_26_403"
														x1="-5.27273"
														y1="-8.63637"
														x2="64.6818"
														y2="67.0455"
														gradientUnits="userSpaceOnUse"
													>
														<stop />
														<stop
															offset="0.256291"
															stop-color="#E7E7E7"
															stop-opacity="0.6875"
														/>
														<stop
															offset="0.457331"
															stop-color="white"
															stop-opacity="0.34139"
														/>
														<stop
															offset="0.584253"
															stop-color="white"
															stop-opacity="0.222774"
														/>
														<stop offset="1" stop-color="#666666" />
													</linearGradient>
												</defs>
											</svg>
											<h3 className="font-semibold">Fitness Tracker App</h3>
										</div>
										<div className="text-sm flex gap-4">
											<Link
												href={""}
												className="px-3 py-[4px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
											>
												<svg
													width="38"
													height="38"
													viewBox="0 0 42 42"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="41"
														height="41"
														rx="20.5"
														fill="#1A1A1A"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="41"
														height="41"
														rx="20.5"
														stroke="#262626"
													/>
													<path
														d="M13.5 21.9375C13.5 21.4197 13.9197 21 14.4375 21H16.3125C16.8303 21 17.25 21.4197 17.25 21.9375V27.5625C17.25 28.0803 16.8303 28.5 16.3125 28.5H14.4375C13.9197 28.5 13.5 28.0803 13.5 27.5625V21.9375Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M19.125 18.1875C19.125 17.6697 19.5447 17.25 20.0625 17.25H21.9375C22.4553 17.25 22.875 17.6697 22.875 18.1875V27.5625C22.875 28.0803 22.4553 28.5 21.9375 28.5H20.0625C19.5447 28.5 19.125 28.0803 19.125 27.5625V18.1875Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M24.75 14.4375C24.75 13.9197 25.1697 13.5 25.6875 13.5H27.5625C28.0803 13.5 28.5 13.9197 28.5 14.4375V27.5625C28.5 28.0803 28.0803 28.5 27.5625 28.5H25.6875C25.1697 28.5 24.75 28.0803 24.75 27.5625V14.4375Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span>E-commerce</span>
											</Link>
											<Link
												href={""}
												className="px-3 py-[4px] w-fit rounded-full flex justify-center items-center border border-[#1F1F1F] gap-2"
											>
												<svg
													width="38"
													height="38"
													viewBox="0 0 42 42"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="0.5"
														y="0.5"
														width="41"
														height="41"
														rx="20.5"
														fill="#1A1A1A"
													/>
													<rect
														x="0.5"
														y="0.5"
														width="41"
														height="41"
														rx="20.5"
														stroke="#262626"
													/>
													<path
														d="M27.875 22.7916V26.3333C27.875 27.2454 27.2193 28.0299 26.3151 28.15C24.5762 28.3808 22.802 28.5 21 28.5C19.198 28.5 17.4238 28.3808 15.6849 28.15C14.7807 28.0299 14.125 27.2454 14.125 26.3333V22.7916M27.875 22.7916C28.2683 22.4564 28.5 21.9491 28.5 21.4074V18.2547C28.5 17.354 27.8601 16.5757 26.9692 16.4424C26.0314 16.3021 25.0829 16.1943 24.125 16.1203M27.875 22.7916C27.7137 22.9291 27.5251 23.0377 27.3143 23.1078C25.3294 23.7677 23.2064 24.125 21 24.125C18.7936 24.125 16.6706 23.7677 14.6857 23.1078C14.4749 23.0377 14.2863 22.9291 14.125 22.7916M14.125 22.7916C13.7317 22.4563 13.5 21.9491 13.5 21.4074V18.2547C13.5 17.354 14.1399 16.5757 15.0308 16.4424C15.9686 16.3021 16.9171 16.1943 17.875 16.1203M24.125 16.1203V15.375C24.125 14.3395 23.2855 13.5 22.25 13.5H19.75C18.7145 13.5 17.875 14.3395 17.875 15.375V16.1203M24.125 16.1203C23.0938 16.0406 22.0516 16 21 16C19.9484 16 18.9062 16.0406 17.875 16.1203M21 21.625H21.0062V21.6312H21V21.625Z"
														stroke="white"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<span>Web Design & Development</span>
											</Link>
										</div>
									</div>
									<div className=" border border-[#1F1F1F] flex flex-col gap-6 rounded-xl mt-10  p-5">
										<div className="h-1/2 w-full flex  flex-col gap-4">
											<h3>Chalange</h3>
											<p className="text-sm text-[#8C8C8C]">
												ABC Enterprises approached us with a desire to revamp
												their outdated website and create a more user-friendly
												and visually appealing platform. They sought to improve
												user engagement and increase online sales.
											</p>
										</div>
										<div className="border-b border-[#1F1F1F]"></div>
										<div className="h-1/2 w-full flex p-4 flex-col gap-4">
											<h3>Chalange</h3>
											<p className="text-sm text-[#8C8C8C]">
												ABC Enterprises approached us with a desire to revamp
												their outdated website and create a more user-friendly
												and visually appealing platform. They sought to improve
												user engagement and increase online sales.
											</p>
											<Link href={""} className="underline">
												Read Full Story
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Link
							className="z-20 mt-3 absolute bottom-0 flex items-center gap-2 py-2 px-4 text-sm border bg-[#0f0f0f] border-[#262626] rounded-full "
							href="/#"
						>
							View All Stories
							<div className="p-1 bg-[#1a1a1a] rounded-full">
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
					<div className=" rounded-b-xl absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
				</div>
			</main>
		</>
	);
};

export default Services;
