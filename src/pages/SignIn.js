import { setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const location = useLocation();
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCrediential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCrediential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad User Crediental");
      console.log(error);
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                className="passwordInput"
                id="password"
                onChange={onChange}
                placeholder="Password"
              />
              <img
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword(!showPassword)}
                alt=""
              />
            </div>
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>
            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          {/* Google Oauth */}
          <OAuth />
          <Link to="/sign-up" className="registerLink">
            {" "}
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignIn;
