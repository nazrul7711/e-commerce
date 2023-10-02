import React from 'react'
import {useForm} from "react-hook-form"
import "@/styles/signin.scss"

type SignInType = {

}

const Auth = () => {
  return (
    <div className="signin">
      <form className="form">
        <div className="element">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="element">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div className="element">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <button>Sign Up With Google</button>
        <button>Sign Up With Github</button>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Auth