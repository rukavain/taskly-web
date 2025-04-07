"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/axios";
import Carousel from "@/components/pages-component/login/component/Carousel";

const LoginContent = (): JSX.Element => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      console.log("logged in");
      router.push("/");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="DMSans bg-white flex justify-between items-center w-full h-full">
      <div className="w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm  flex flex-col justify-between items-center gap-4"
        >
          <div className="w-full flex flex-col justify-start items-start">
            <p className="text-2xl mb-2">Login</p>
            <p className="text-gray-500">
              Hi! Welcome back, you&apos;ve been missed.
            </p>
          </div>
          <div className="flex w-full flex-col justify-start items-start gap-5">
            <label className="w-full">
              <p className="text-gray-600">Email</p>
              <input
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-6 bg-gray-200 text-gray-600 rounded-sm w-full focus:outline-none"
              />
            </label>
            <label htmlFor="" className="w-full">
              <p className="text-gray-600">Password</p>
              <input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-3 px-6 bg-gray-200 text-gray-600 rounded-sm w-full focus:outline-none"
              />
            </label>
            {error && <p>{error}</p>}
            <p className="self-end underline text-blue-600 font-semibold">
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            className="py-4 px-6 text-center rounded-md bg-blue-600 text-white w-full"
          >
            Login
          </button>
          <div className="flex items-center px-4 py-2 text-sm text-gray-400 w-full">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <button
            type="button"
            className="py-4 px-6 text-center rounded-md bg-white border-2 border-gray-200 text-gray-500 font-semibold gap-2 w-full flex justify-center items-center"
          >
            <div className="flex justify-start items-center w-full max-w-60 gap-4">
              <Image alt="" width={24} height={24} src="/icons/google.png" />
              <p>Continue with Google</p>
            </div>
          </button>

          <button
            type="button"
            className="py-4 px-6 text-center rounded-md bg-white border-2 border-gray-200 text-gray-500 font-semibold gap-4 w-full flex justify-center items-center"
          >
            <div className="flex justify-start items-center w-full max-w-60  gap-4">
              <Image alt="" width={24} height={24} src="/icons/facebook.png" />
              <p>Continue with Facebook</p>
            </div>
          </button>
          <button
            type="button"
            className="py-4 px-6 text-center rounded-md bg-white border-2 border-gray-200 text-gray-500 font-semibold gap-4 w-full flex justify-center items-center"
          >
            <div className="flex justify-start items-center w-full max-w-60  gap-4">
              <Image alt="" width={24} height={24} src="/icons/apple.png" />
              <p className="">Continue with Apple</p>
            </div>
          </button>
          <p className="text-gray-500 mt-4">
            Don&apos;t have an account?{" "}
            <span className="text-blue-600 underline font-semibold">
              Register
            </span>
          </p>
        </form>
      </div>
      <div className="w-full h-full bg-blue-600 text-white">
        <Carousel />
      </div>
    </div>
  );
};

export default LoginContent;
