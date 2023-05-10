import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar({ children }) {
	const user = useSelector((state) => state.user.user);

	const [navbar, setNavbar] = useState(false);
	return (
		<div className="z-20">
			<nav className="w-full z-20 bg-main shadow">
				<div className="justify-between pr-4 mx-auto lg:max-w-7xl md:items-center md:flex md:pr-8">
					<div>
						<div className="flex items-center justify-between  pl-6 md:pr-10 skew-x-[23deg] -translate-x-4 md:bg-blue4 py-3 md:py-5 md:block">
							<Link href="/">
								<h2 className="md:text-xl text:md text-white font-medium -skew-x-[23deg]  tracking-wide">
									<span className="whitespace-no-wrap">MANAGER CONCEDII</span>
								</h2>
							</Link>

							<div className="md:hidden -skew-x-[23deg] flex justify-between items-center ">
								<button
									className="p-1  text-gray-700 rounded-md  outline-none "
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-7 h-7 text-white bg-blue1 p-0.5 rounded-sm"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-7 h-7 text-white bg-blue1 p-0.5  rounded-sm"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									)}
								</button>
								<div className="text-white ml-4 ">
									<Link
										className="bg-blue4 px-2 py-1 rounded-md  font-medium tracking-wide"
										href="/auth/signin"
									>
										LOGIN
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div
							className={`ml-4 flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? "block" : "hidden"
							}`}
						>
							<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
								<li className="text-white">
									<Link href="/conturi">Utilizatori</Link>
								</li>
								<li className="text-white">
									<Link href="/plan_concedii">Planificare</Link>
								</li>
								<li className="text-white">
									<Link href="/viz_concedii">Vizualiare </Link>
								</li>
								<li className="text-white hidden md:block ">
									<Link
										className="bg-blue4 px-2 py-1 rounded-md font-medium tracking-wide"
										href="/auth/signin"
									>
										LOGIN
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			{children}
		</div>
	);
}
