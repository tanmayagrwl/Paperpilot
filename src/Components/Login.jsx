import React from "react";
import google from "../Assets/google.png";
import github from "../Assets/github.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';





function Login() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <div className="font-roboto_bold underline text-2xl mb-8">
          Loading ...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <div className="font-bold text-2xl mb-8 text-[#714CC2]">
          Please Login to proceed
        </div>
        <button
          onClick={() => loginWithRedirect()}
          type="button"
          class="text-white bg-[#714CC2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#714CC2] dark:hover:bg-[#AC97DB] focus:outline-none dark:focus:ring-blue-800"
        >
          Login
        </button>
      </div>
    );
  }

  const navigate = useNavigate();
  React.useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/select");
    }, 2000);
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
      <div className="font-bold text-2xl mb-8 text-[#714CC2]">
        Welcome {user.name}
      </div>

      {/* <GoogleOAuthProvider clientId="530224716772-ipb1litagv5le3m3jjr0hojkbhebqf10.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed')
                }}
            />
        </GoogleOAuthProvider> */}
    </div>
  );
}

export default Login;
