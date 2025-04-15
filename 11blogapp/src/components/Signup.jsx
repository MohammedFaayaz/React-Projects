import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      console.log(data);
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login({ userData }));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-10 border border-blue-400 animate-fadeIn">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-3xl font-bold text-white">Sign up to create an account</h2>
        <p className="mt-2 text-center text-lg text-white/80">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-semibold text-blue-300 transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-5">
            <Input
              {...register("name", { required: true })}
              label="Full Name :"
              placeholder="Enter your full name"
              className="text-black"
            />
            <Input
              {...register("email", { required: true })}
              label="Email :"
              placeholder="Enter your email"
              type="email"
              className="text-black"
            />
            <Input
              {...register("password", { required: true })}
              label="Password :"
              type="password"
              placeholder="Enter your password"
              className="text-black"
            />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg transition-all duration-200">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
