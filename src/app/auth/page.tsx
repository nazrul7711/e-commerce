"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "@/styles/signin.scss";

import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { stat } from "fs";
import { useRouter } from "next/navigation";

type SignInType = {
  name: string;
  email: string;
  password: string;
};

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>();
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const router = useRouter()

  const onSubmit: SubmitHandler<SignInType> = (d) => {
    console.log(d);
    signIn()
  };

  const {status} = useSession()
  if(status==="authenticated"){
    router.push("/")
  }

  return (
    <div className="signin">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {loggedIn && (
          <div className="element">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Type your Name"
              {...register("name", { required: "This field is mandatory" })}
            />
            <p>{errors.name && <p>{errors.name.message}</p>}</p>
          </div>
        )}
        <div className="element">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Type your Email"
            {...register("email", {
              required: "This field is mandatory",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Entered email does not match email format",
              },
            })}
          />
          <p>{errors.email && <p>{errors.email.message}</p>}</p>
        </div>
        <div className="element">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Type your Password"
            {...register("password", {
              required: "This field is mandatory",
              pattern: {
                value:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password should be 8 character long and should contain one letter one special character and one number",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">{loggedIn ? "SignIn" : "SignUp"}</button>
        <div className="buttons">
          <div className="google" onClick={()=>signIn("google")}>
            <AiFillGoogleCircle size={35} />
          </div>
          <div className="google">
            <AiFillGithub size={35} />
          </div>
        </div>
        <p>
          {loggedIn ? "Already have an Account ?" : "Dont have an Account ?"}{" "}
          <span className="clickable" onClick={() => setLoggedIn((w) => !w)}>
            {loggedIn ? "SignIn" : "SignUp"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
