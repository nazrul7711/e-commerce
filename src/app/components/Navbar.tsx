"use client"
import React, { useState } from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {BsPerson } from "react-icons/bs";
import "@/styles/navbar.scss"
import Link from "next/link";
import Cart from "./Cart";

const Navbar = () => {
  const [open,setOpen]=useState<boolean>(false)
  const loggedIn = false
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Image
              src={"/usa-flag.jpeg"}
              height={30}
              width={30}
              alt="country-image"
            />
            <div>
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="item">
            <div>USD</div>
            <div>
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="item">
            <div>Woman</div>
          </div>
          <div className="item">
            <div>Men</div>
          </div>
          <div className="item">
            <div>Children</div>
          </div>
        </div>
        <div className="center">
          <Link href={"/"}>NAZRUL STORE</Link>
        </div>
        <div className="right">
          {loggedIn && <div className="item">Homepage</div>}
          {loggedIn && <div className="item">About</div>}
          {loggedIn && <div className="item">Contact</div>}
          {loggedIn && <div className="item">Stores</div>}
          <div className="item">
            <div className="storeIcons">
              {loggedIn && (
                <div>
                  <AiOutlineSearch />
                </div>
              )}
              {loggedIn && (
                <div>
                  <BsPerson />
                </div>
              )}
              {loggedIn && (
                <div>
                  <AiOutlineHeart />
                </div>
              )}
              {loggedIn && (
                <div className="cart" onClick={() => setOpen((p) => !p)}>
                  <AiOutlineShoppingCart />
                  <span>0</span>
                </div>
              )}
              {!loggedIn && (
                <div className="item">
                  <Link href={"/auth"}>SignUp</Link>
                </div>
              )}
              {!loggedIn && (
                <div className="item">
                  <Link href={"/auth"}>SignIn</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
