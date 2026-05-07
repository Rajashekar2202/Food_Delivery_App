import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isLogin = currState === "Login";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API call here
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        {/* TITLE */}
        <div className="login-popup-title">
          <h2>{currState}</h2>

          <button
            type="button"
            className="close-btn"
            onClick={() => setShowLogin(false)}
          >
            <img src={assets.cross_icon} alt="Close popup" />
          </button>
        </div>

        {/* INPUTS */}
        <div className="login-popup-inputs">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="login-btn">
          {isLogin ? "Login" : "Create Account"}
        </button>

        {/* TERMS */}
        <div className="login-popup-condition">
          <input type="checkbox" required />

          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {/* TOGGLE */}
        <p className="login-toggle-text">
          {isLogin ? "Create a new account?" : "Already have an account?"}

          <span onClick={() => setCurrState(isLogin ? "Sign Up" : "Login")}>
            {isLogin ? " Click here" : " Login here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
