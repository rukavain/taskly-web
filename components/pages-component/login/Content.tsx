"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/axios";
import Carousel from "@/components/pages-component/login/component/Carousel";
import { useToast } from "@/hooks/use-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const LoginContent = (): JSX.Element => {
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await loginUser(data.email, data.password);
      localStorage.setItem("user", JSON.stringify(response));
      console.log("logged in");
      toast({
        description: "Successfully logged in.",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="DMSans bg-white flex justify-between items-center w-full h-full">
      {isSubmitting && (
        <div className="bg-gray-400/50 absolute inset-0 h-svh w-svw z-50 flex justify-center items-center text-white">
          <Image
            src="/login/spinner.gif"
            alt="loader"
            width={100}
            height={100}
          ></Image>
        </div>
      )}
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col justify-between h-full items-center max-w-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-between items-center gap-4"
          >
            <div className="w-full flex flex-col justify-start items-start max-lg:items-center ">
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
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  className="py-3 px-6 bg-gray-200 text-gray-600 rounded-sm w-full focus:outline-none"
                />
              </label>
              <span>{errors.email?.message}</span>
              <label htmlFor="" className="w-full">
                <p className="text-gray-600">Password</p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                  className="py-3 px-6 bg-gray-200 text-gray-600 rounded-sm w-full focus:outline-none"
                />
              </label>
              <span>{errors.password?.message}</span>
              <p className="self-end underline text-blue-600 font-semibold">
                Forgot Password?
              </p>
            </div>
            <button
              type="submit"
              className={`py-4 px-6 text-center rounded-md bg-blue-600 text-white w-full ${
                !isValid ? "bg-gray-300 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              Login
            </button>
            <div className="flex items-center px-4 py-2 text-sm text-gray-400 w-full">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-2 text-gray-400">or</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
          </form>

          <div className="w-full  gap-2 flex flex-col justify-center items-center max-lg:flex-row max-lg:justify-evenly">
            <button
              type="button"
              className="py-4 px-6 text-center rounded-md bg-white border-2 border-gray-200 text-gray-500 font-semibold gap-4 w-full flex justify-center items-center max-lg:p-6 max-lg:flex-grow-0 max-lg:w-min max-lg:rounded-full"
            >
              <div className="flex justify-start items-center w-full max-w-60  gap-4 max-lg:justify-center max-lg:min-w-max">
                <Image
                  alt=""
                  width={24}
                  height={24}
                  src="/icons/google.png"
                  className="max-lg:rounded-full w-12 lg:h-6 lg:w-6"
                />
                <p className="max-lg:hidden">Continue with Google</p>
              </div>
            </button>

            <button
              type="button"
              className="py-4 px-6 text-center rounded-md bg-white border-2 border-gray-200 text-gray-500 font-semibold gap-4 w-full flex justify-center items-center max-lg:p-6 max-lg:flex-grow-0 max-lg:w-min max-lg:rounded-full"
            >
              <div className="flex justify-start items-center w-full max-w-60  gap-4 max-lg:justify-center max-lg:min-w-max">
                <Image
                  alt=""
                  width={24}
                  height={24}
                  src="/icons/facebook.png"
                  className="max-lg:rounded-full w-12 lg:h-6 lg:w-6"
                />
                <p className="max-lg:hidden">Continue with Facebook</p>
              </div>
            </button>
            <button
              type="button"
              className="py-4 px-6 text-center rounded-md bg-white border-2 border-gray-200 text-gray-500 font-semibold gap-4 w-full flex justify-center items-center max-lg:p-6 max-lg:flex-grow-0 max-lg:w-min max-lg:rounded-full"
            >
              <div className="flex justify-start items-center w-full max-w-60  gap-4 max-lg:justify-center max-lg:min-w-max">
                <Image
                  alt=""
                  width={24}
                  height={24}
                  className="max-lg:rounded-full w-12 lg:h-6 lg:w-6"
                  src="/icons/apple.png"
                />
                <p className="max-lg:hidden">Continue with Apple</p>
              </div>
            </button>
          </div>

          <p className="text-gray-500 mt-4">
            Don&apos;t have an account?{" "}
            <span className="text-blue-600 underline font-semibold">
              Register
            </span>
          </p>
        </div>
      </div>
      <div className="w-full z-20 h-full bg-blue-600 text-white max-lg:hidden">
        <Carousel />
      </div>
    </div>
  );
};

export default LoginContent;
