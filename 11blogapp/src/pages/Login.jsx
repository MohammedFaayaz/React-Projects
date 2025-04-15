import React from "react";
import { Login as LoginComponent } from "../components/index";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-blue-400 w-full max-w-md animate-fadeIn">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          🔐 Welcome Back!
        </h2>
        <LoginComponent />
        <p className="text-center text-white opacity-80 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
