"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import "@/styles/navbar.scss";
import Link from "next/link";
import Cart from "./Cart";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ProductType } from "../redux/cartReducer";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  let products = useSelector<RootState, ProductType[]>(
    (state) => state.cart.products
  );
  

  const { status } = useSession();
  const isAuthenticated = status === "authenticated";
  let totalItemsLength = () => {
    let count = 0;
    products.forEach((item) => (count += item.quantity));
    return count;
  };
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
          <div className="item">
            <Link href="/addProduct">Add Product</Link>
          </div>
        </div>
        <div className="center">
          <Link href={"/"}>NAZRUL STORE</Link>
        </div>
        <div className="right">
          {isAuthenticated && <div className="item">Homepage</div>}
          {isAuthenticated && <div className="item">About</div>}
          {isAuthenticated && <div className="item">Contact</div>}
          {isAuthenticated && <div className="item">Stores</div>}
          <div className="item">
            <div className="storeIcons">
              {isAuthenticated && (
                <div>
                  <AiOutlineSearch />
                </div>
              )}
              {isAuthenticated && (
                <div>
                  <BsPerson />
                </div>
              )}
              {isAuthenticated && (
                <div>
                  <AiOutlineHeart />
                </div>
              )}
              {isAuthenticated && (
                <div className="cart" onClick={() => setOpen((p) => !p)}>
                  <AiOutlineShoppingCart />
                  <span>{totalItemsLength()}</span>
                </div>
              )}

              {!isAuthenticated && (
                <div className="item">
                  <Link href={"/auth"}>SignIn</Link>
                </div>
              )}
              {isAuthenticated && (
                <div className="item signout">
                  <div onClick={() => signOut()}>SignOut</div>
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
