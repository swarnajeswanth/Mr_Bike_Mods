import React, { useState, useRef, useEffect } from "react";
import "./authpage.css";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const maskRef = useRef();
  const flipCardRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      gsap.to(flipCardRef.current?.querySelector(".flip-card-inner"), {
        rotateY: isLogin ? 0 : 180,
        duration: 0.8,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(maskRef.current, {
        x: isLogin ? "100%" : "0%",
        duration: 1,
        ease: "power3.inOut",
      });
    }
  }, [isLogin, isMobile]);

  const loginForm = (
    <div className="form-panel login-panel">
      <h2>Login</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <select required>
        <option value="">Select Role</option>
        <option value="Customer">Customer</option>
        <option value="Retailer">Retailer</option>
      </select>
      <Link to="/" className="form-btn">
        Login
      </Link>
      <p>
        Don’t have an account?{" "}
        <span onClick={() => setIsLogin(false)}>Sign Up</span>
      </p>
    </div>
  );

  const signupForm = (
    <div className="form-panel signup-panel">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <select required>
        <option value="">Select Role</option>
        <option value="Customer">Customer</option>
        <option value="Retailer">Retailer</option>
      </select>
      <Link to="/" className="form-btn">
        Sign Up
      </Link>
      <p>
        Already have an account?{" "}
        <span onClick={() => setIsLogin(true)}>Login</span>
      </p>
    </div>
  );

  return (
    <div className="auth-container">
      <div
        className={`auth-box ${!isLogin && isMobile ? "signup-active" : ""}`}
      >
        {isMobile ? (
          <div className="flip-card" ref={flipCardRef}>
            <div className="flip-card-inner">
              {loginForm}
              {signupForm}
            </div>
          </div>
        ) : (
          <>
            {loginForm}
            {signupForm}
            <div className="mask-overlay" ref={maskRef}>
              <div className="mask-text">
                <h2>{isLogin ? "Welcome Back!" : "Join the Family"}</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
