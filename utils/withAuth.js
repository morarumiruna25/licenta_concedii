import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Logare from "../pages/auth/signin";

function withAuth(WrappedComponent) {
	function AuthenticatedComponent(props) {
		const router = useRouter();
		const isLoggedIn = useSelector((state) => !!state.user.email);

		if (typeof window !== "undefined" && !isLoggedIn) {
			router.push("/auth/signin");
			return <Logare />;
		}

		return <WrappedComponent {...props} />;
	}

	if (WrappedComponent.getInitialProps) {
		AuthenticatedComponent.getInitialProps = WrappedComponent.getInitialProps;
	}

	return AuthenticatedComponent;
}
export default withAuth;
