import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-lg border border-blue-400 animate-fadeIn">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create an Account</h2>
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;
