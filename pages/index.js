import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "@/utils/userReducer";

export default function Home() {
	const [userData, setuserData] = useState();

	const dispatch = useDispatch();
	const router = useRouter();
	const user = useSelector((state) => state.user);

	const [tokenChecked, setTokenChecked] = useState(false);

	useEffect(() => {
		const token = Cookies.get("token");
		if (!token) {
			router.push("/auth/signin");
		} else {
			setTokenChecked(true);
			setuserData(token);
		}
	}, [router, user]);

	if (!tokenChecked) {
		return null; // or you can show a loading spinner
	}

	function handleLogin() {
		// Authenticate the user and get user data
		const userData = { name: "John", email: "john@example.com" };

		// Dispatch the setUser action with the user data
		dispatch(setUser(userData));

		// Dispatch the showToast action with a message and type

		dispatch({
			type: "SHOW_TOAST",
			payload: {
				message: "login success",
				type: "success",
			},
		});
	}
	function handleLogout() {
		// Authenticate the user and get user data

		// Dispatch the setUser action with the user data
		dispatch(clearUser());

		// Dispatch the showToast action with a message and type

		dispatch({
			type: "SHOW_TOAST",
			payload: {
				message: "logout success",
				type: "info",
			},
		});
	}
	return (
		<div className="text text-4xl">
			<div>
				<h1>Welcome, {userData}!</h1>
				{/* <p>Your email is {user.email}.</p> */}
			</div>{" "}
			<div>
				<button onClick={handleLogin}>Login</button>
				<br />
				<br />
				<br />
				<button onClick={handleLogout}>Logut</button>
			</div>
		</div>
	);
}
