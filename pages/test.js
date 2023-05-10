import { useDispatch } from "react-redux";
import { setUser, clearUser } from "@/utils/userReducer";
import { showToast } from "@/utils/toastReducer";

export default function LoginPage() {
	const dispatch = useDispatch();

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
		const userData = { name: "John", email: "john@example.com" };

		// Dispatch the setUser action with the user data
		dispatch(clearUser());

		// Dispatch the showToast action with a message and type

		dispatch({
			type: "SHOW_TOAST",
			payload: {
				message: "login success",
				type: "success",
			},
		});
	}
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<br />
			<br />
			<br />
			<button onClick={handleLogout}>Logut</button>
		</div>
	);

	// Render login form and button
}
