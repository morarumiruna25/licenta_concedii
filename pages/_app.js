import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store, { persistor } from "@/utils/store";
import Toast from "@/components/toast";
// import { PersistGate } from "redux-persist/integration/react";
// import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			{/* <SessionProvider session={session}> */}
				{/* <PersistGate loading={null} persistor={persistor}> */}
				<Navbar>
					{" "}
					<Toast /> <Component {...pageProps} />
				</Navbar>
				{/* </PersistGate> */}
			{/* </SessionProvider> */}
		</Provider>
	);
}
