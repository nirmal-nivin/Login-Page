import React from "react";
import login_img from "../assets/log_img.jpg";
import img from "../assets/hand_icon.png";
import google_icon from "../assets/google.png";
import facebook_icon from "../assets/facebook.png";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* LOGIN IMAGE SECTION */}
      <div className="w-full h-screen ml-6 my-6 mb-10 rounded-xl md:w-1/2 md:h-screen flex items-center justify-center overflow-hidden">
        <img
          src={login_img}
          alt="Login illustration"
          className="w-full h-full object-cover mb-20 mr-14 border rounded-xl"
        />
      </div>

      {/* LOGIN FORM SECTION */}
      <div className="w-full h-1/2 md:w-1/2 md:h-full bg-white flex flex-col p-10 max-w-md mx-auto">
        <h1 className="flex items-center gap-2 font-bold text-xl mb-4">
          Welcome Back <img src={img} alt="Smiling hand icon" className="h-6" />
        </h1>
        <p className="text-gray-600 mb-2">
          Today is a new day. It's your day. You shape it.
        </p>
        <p className="text-gray-600 mb-6">
          Sign in to start managing your projects.
        </p>

        <div className="w-full flex flex-col mb-4">
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Example@email.com"
            className="border rounded-md p-2 outline-none"
          />
        </div>

        <div className="w-full flex flex-col mb-4">
          <label className="text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="At least 8 characters"
            className="border rounded-md p-2 outline-none"
          />
        </div>

        <div className="w-full flex justify-end mb-4">
          <p className="text-blue-700 text-sm font-medium cursor-pointer">
            Forgot Password?
          </p>
        </div>

        <button className="w-full text-white bg-[#162D3A] rounded-md p-3 text-center mb-4">
          Sign in
        </button>

        <div className="w-full flex items-center justify-center relative py-2 mb-4">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <p className="text-lg absolute bg-white text-gray-600 px-4">or</p>
        </div>

        <div className="flex gap-2 md:block">
          <button className="w-full text-[#060606] bg-white border rounded-md p-4 text-center flex items-center justify-center mb-2">
            <img src={google_icon} alt="Google icon" className="h-6 mr-3" />
            Sign in with Google
          </button>

          <button className="w-full text-[#060606] bg-white border rounded-md p-4 text-center flex items-center justify-center mb-2">
            <img src={facebook_icon} alt="Facebook icon" className="h-6 mr-3" />
            Sign in with Facebook
          </button>
        </div>

        <div className="w-full flex items-center justify-center mt-4">
          <p className="text-sm font-normal text-[#060606]">
            Don't have an account?{" "}
            <span className="text-blue-700 cursor-pointer">Sign up</span>
          </p>
        </div>

        {/* Footer Section */}
        <div className="w-full flex justify-center mt-auto py-10 border-gray-300">
          <p className="text-sm text-gray-600">© 2024 ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
