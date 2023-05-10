import Link from "next/link";
import React, { useState } from "react";
import "typeface-montserrat";
import { useDispatch } from "react-redux";
import axios from "axios";

const Register = () => {
	const dispatch = useDispatch();

	const initialvalues = {
		nume: "",
		email: "",
		parola: "",
		cf_parola: "",
		departament: "",
	};
	const [userRegister, setuserRegister] = useState(initialvalues);

	const handleChange = (event) => {
		setuserRegister({
			...userRegister,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			// setLoading(true);
			const res = await axios.post("/api/auth/register", {
				userRegister,
			});
			res &&
				dispatch({
					type: "SHOW_TOAST",
					payload: {
						message: res.data.message,
						type: res.data.type || error,
					},
				});
			res.data.type == "success" && setuserRegister(initialvalues);

			// setUser({ ...user, error: "", success: data.message });
			// setLoading(false);

			// setTimeout(async () => {
			// 	let options = { redirect: false, email, password };
			// 	const res = await signIn("credentials", options);
			// 	Router.push("/");
			// }, 1500);
		} catch (error) {
			dispatch({
				type: "SHOW_TOAST",
				payload: {
					message: error.message,
					type:  "error",
				},
			});
			// setLoading(false);
			// setUser({ ...user, success: "", error: error.response.data.message });
		}
	};
	return (
		<div className="">
			{" "}
			<div className="flex justify-center  font-custom  mt-[6rem] text-white">
				{" "}
				<div className="bg-main sm:w-[400px] w-full rounded-2xl mb-10 p-5 h-1/2">
					<p className="title text-center mb-6 text-2xl py-2 text-[#fff] font-medium">
						Înregistrare
					</p>
					<form onSubmit={handleSubmit} className="mt-2 w-80 mx-auto">
						<div className="mt-[0.25rem]">
							<label className="block mb-1  text-[#9CA3AF]" htmlFor="username">
								Nume
							</label>
							<input
								className="bg-main border-[1.5px] pl-2 rounded-md mb-2 py-1.5 w-full focus:border-blue3  border-blue4"
								type="text"
								name="nume"
								id="nume"
								placeholder=""
								value={userRegister.nume}
								onChange={handleChange}
							></input>
						</div>
						<div className="mt-[0.25rem]">
							<label className="block mb-1  text-[#9CA3AF]" htmlFor="username">
								Email
							</label>
							<input
								className="bg-main border-[1.5px]  pl-2 rounded-md mb-2 py-1.5 w-full focus:border-blue3  border-blue4"
								type="email"
								name="email"
								id="email"
								placeholder=""
								value={userRegister.email}
								onChange={handleChange}
							></input>
						</div>
						<div className="mt-[0.25rem]">
							<label className="block mb-1  text-[#9CA3AF]" htmlFor="username">
								Deparatment
							</label>
							<input
								className="bg-main border-[1.5px]  pl-2  rounded-md mb-2 py-1.5 w-full focus:border-blue3  border-blue4"
								type="text"
								name="departament"
								id="departament"
								placeholder=""
								value={userRegister.departament}
								onChange={handleChange}
							></input>
						</div>
						<div className="mt-[0.25rem]">
							<label className="block mb-1 text-[#9CA3AF]" htmlFor="block">
								Parola
							</label>
							<input
								className="bg-main border-[1.5px]  pl-2 rounded-md mb-1 py-1.5 w-full  border-blue4"
								type="password"
								name="parola"
								id="parola"
								placeholder=""
								value={userRegister.parola}
								onChange={handleChange}
							></input>
						</div>
						<div className="mt-[0.25rem]">
							<label className="block mb-1 text-[#9CA3AF]" htmlFor="block">
								Confirm password
							</label>
							<input
								className="bg-main border-[1.5px] pl-2   rounded-md mb-4 py-1.5 w-full  border-blue4"
								type="password"
								name="cf_parola"
								id="cf_parola"
								value={userRegister.cf_parola}
								onChange={handleChange}
								placeholder=""
							></input>
							<div className="flex text-sm  hover:underline justify-end">
								<a rel="" href="#">
									Ai uitat parola ?
								</a>
							</div>
						</div>
						<button className="w-full py-2 rounded-md  bg-blue4 text-main font-bold tracking-medium text-md my-3">
							Sign in
						</button>
					</form>
					<div className=" w-80 mx-auto mt-4">
						<div className="grid grid-cols-2 border-b-2 pb-1 border-blue4  ">
							{" "}
							<p className="justify-self-start  text-[#9CA3AF]">Logare cu Google </p>
							<div className="justify-self-end -self-center mr-5">
								<button aria-label="Log in with Google" className="text-blue4 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
										className="w-6 h-6 fill-current"
									>
										<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
									</svg>
								</button>
							</div>
						</div>

						<div className=""></div>
					</div>

					<p className="text-[#9CA3AF] mt-2  w-80 mx-auto">
						Ai deja un cont ?
						<Link rel="" href="/auth/signin" className="text-white ml-1">
							Logeaza-te !
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
