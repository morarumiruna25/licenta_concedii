import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
	const dispatch = useDispatch();
	const { message, type } = useSelector((state) => state.toast);

	useEffect(() => {
		if (message) {
			toast[type](message, { autoClose: 3000 });
			dispatch({ type: "RESET_TOAST" });
		}
	}, [message, type, dispatch]);

	return (
			<ToastContainer theme="dark" pauseOnFocusLoss={false} />
	);
};

export default Toast;
