"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@/styles/slider.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Slider = () => {
  let images = ["/first.jpg", "/second.jpg", "/third.jpg", "/fourth.jpg"];
  const [slider, setSlider] = useState<number>(0);
  function slideLeftHandler() {
    setSlider(slider === 0 ? 3 : (s) => s - 1);
  }
  function slideRightHandler() {
    setSlider(slider === 3 ? 0 : (s) => s + 1);
  }
  console.log(process.env.NEXT_PUBLIC_SOME_VARIABLE, "bill");
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${slider * 100}vw)` }}
      >
        <div className="imgContainer">
          <Image src={images[0]} fill={true} alt="first" />
        </div>
        <div className="imgContainer">
          <Image src={images[1]} fill={true} alt="second" />
        </div>
        <div className="imgContainer">
          <Image src={images[2]} fill={true} alt="third" />
        </div>
        <div className="imgContainer">
          <Image src={images[3]} fill={true} alt="fourth" />
        </div>
      </div>
      <div className="icons">
        <div className="icon" onClick={slideLeftHandler}>
          <AiOutlineArrowLeft size={60} />
        </div>
        <div className="icon" onClick={slideRightHandler}>
          <AiOutlineArrowRight size={60} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
