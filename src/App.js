import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "react-google-login";
import { useState } from "react";

function App() {
	const [user, setUser] = useState();
	const [err, setErr] = useState();
	const onSuccess = (response) => {
		setUser(response.profileObj);
		console.log(response.profileObj);
	};
	const onFailure = (response) => {
		setErr("use BITS Mail");
		console.log(response);
	};
	return (
		<div className="App">
			<GoogleLogin
				clientId="225636155935-141j2c5ngbfq8lk0sq6t4q7prqdedqd6.apps.googleusercontent.com"
				buttonText="Login With BITS Mail"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
				hostedDomain={"goa.bits-pilani.ac.in"}
			/>
			{user && (
				<div>
					<p>
						Name : {user.givenName} {user.familyName}
					</p>
					<img src={user.imageUrl} alt="profile" />
				</div>
			)}
			{err && <p>{err}</p>}
		</div>
	);
}

export default App;
