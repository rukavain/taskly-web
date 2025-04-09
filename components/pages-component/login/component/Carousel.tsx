"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const MotionImage = motion(Image);

const slides = [
  {
    image: "/login/login-1.png",
    title: "Dental Care with a Personal Touch",
    text: "At our clinic, we understand that every smile is unique. Our team of skilled professionals takes the time to listen to your concerns and create a treatment plan tailored to your needs.",
  },
  {
    image: "/login/login-2.png",
    title: "Comprehensive Dental Solutions for All Ages",
    text: "From the first tooth to the golden years, we offer comprehensive dental solutions for patients of all ages. Our pediatric dentists ensure your child’s smile stays healthy and strong.",
  },
  {
    image: "/login/login-3.png",
    title: "Advanced Technology for Exceptional Care",
    text: "Our clinic is equipped with the latest in dental technology, allowing us to provide faster, more precise treatments. From 3D imaging for accurate diagnostics to laser dentistry for pain-free procedures.",
  },
];
const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full max-w-md flex flex-col justify-center items-center mx-auto  rounded-lg h-full">
      <AnimatePresence mode="wait">
        <MotionImage
          key={slides[index].image}
          src={slides[index].image}
          alt={`Slide ${index + 1}`}
          className="object-cover"
          height={500}
          width={500}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.p
          key={slides[index].text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className=" text-white text-center text-sm px-4 py-2 rounded-md"
        >
          <motion.span
            key={slides[index].text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-3xl mb-2 text-white text-center block"
          >
            {slides[index].title}
          </motion.span>
          {slides[index].text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
