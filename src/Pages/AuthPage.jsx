import React, { useState, useRef, useEffect } from "react";
import "./authpage.css";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/UserSlice";
const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const maskRef = useRef();
  const flipCardRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

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
      <input
        type="email"
        placeholder="Email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        required
      />
      <select
        value={loginData.role}
        onChange={(e) => setLoginData({ ...loginData, role: e.target.value })}
        required
      >
        <option value="">Select Role</option>
        <option value="Customer">Customer</option>
        <option value="Retailer">Retailer</option>
      </select>

      <button
        className="form-btn"
        onClick={(e) => {
          e.preventDefault();
          const { email, password, role } = loginData;

          if (!email || !password || !role) {
            toast.error("Please fill all fields.");
            return;
          }

          // Dispatch user login
          dispatch(
            loginUser({
              ...loginData,
              email,
              role,
            })
          );

          toast.success("Logged in successfully!");
          navigate("/"); // Redirect after login
        }}
      >
        Login
      </button>

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
      <Link
        to="#"
        className="form-btn"
        onClick={() => toast.success("Account created successfully!")}
      >
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
