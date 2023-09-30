import React from "react";
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

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Image src={"/usa-flag.jpeg"} height={30} width={30} alt="country-image"/>
            <div>
              <RiArrowDropDownLine/>
            </div>
          </div>
          <div className="item">
            <div>USD</div>
            <div>
              <RiArrowDropDownLine/>
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
          <div className="item">Homepage</div>
          <div className="item">About</div>
          <div className="item">Contact</div>
          <div className="item">Stores</div>
          <div className="item">
            <div className="storeIcons">
              <div>
                <AiOutlineSearch/>
              </div>
              <div>
                <BsPerson/>
              </div>
              <div>
                <AiOutlineHeart/>
              </div>
              <div className="cart">
                <AiOutlineShoppingCart/>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
