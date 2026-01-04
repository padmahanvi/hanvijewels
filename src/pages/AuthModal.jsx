import React, { useEffect, useState } from "react";
import "./AuthModal.css";

export default function AuthModal({ open, onClose, onAuthSuccess }) {
  const [tab, setTab] = useState("login");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [successText, setSuccessText] = useState("");

  // Reset when modal opens
  useEffect(() => {
    if (!open) return;
    setShowSuccess(false);
    setSuccessText("");
  }, [open]);

  if (!open) return null;

  const handleLogin = (e) => {
    e.preventDefault();

    const email = loginForm.email.trim();
    const name = email.includes("@") ? email.split("@")[0] : "User";
    const user = { name, email };

    localStorage.setItem("hanvi_user", JSON.stringify(user));

    // ✅ Success popup
    setSuccessText("Login successful!");
    setShowSuccess(true);

    // ✅ auto close and notify navbar
    setTimeout(() => {
      setShowSuccess(false);
      onAuthSuccess(user);
    }, 2000);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!registerForm.agree) {
      alert("Please accept terms & conditions.");
      return;
    }

    const user = {
      name: `${registerForm.firstName} ${registerForm.lastName}`.trim(),
      email: registerForm.email.trim(),
    };

    localStorage.setItem("hanvi_user", JSON.stringify(user));

    // ✅ Success popup
    setSuccessText("Account created successfully!");
    setShowSuccess(true);

    // ✅ auto close and notify navbar
    setTimeout(() => {
      setShowSuccess(false);
      onAuthSuccess(user);
    }, 2000);
  };

  return (
    <div
      className="auth-backdrop"
      onMouseDown={(e) => {
        if (e.target.classList.contains("auth-backdrop")) onClose();
      }}
    >
      <div className="auth-modal" role="dialog" aria-modal="true">
        <button className="auth-close" type="button" onClick={onClose}>
          ×
        </button>

        {/* ✅ SUCCESS POPUP OVERLAY */}
        {showSuccess && (
          <div className="auth-success-overlay">
            <div className="auth-success-box">
              <div className="auth-success-circle">✓</div>
              <p className="auth-success-text">{successText}</p>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${tab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
            disabled={showSuccess}
          >
            Login
          </button>
          <button
            type="button"
            className={`auth-tab ${tab === "register" ? "active" : ""}`}
            onClick={() => setTab("register")}
            disabled={showSuccess}
          >
            Register
          </button>
        </div>

        {/* Body */}
        <div className="auth-body">
          {tab === "login" ? (
            <form onSubmit={handleLogin}>
              <label className="auth-label">Email address</label>
              <input
                className="auth-input"
                type="email"
                placeholder="Email address"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm((p) => ({ ...p, email: e.target.value }))
                }
                required
                disabled={showSuccess}
              />

              <label className="auth-label">Password</label>
              <input
                className="auth-input"
                type="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm((p) => ({ ...p, password: e.target.value }))
                }
                required
                disabled={showSuccess}
              />

              <button className="auth-btn" type="submit" disabled={showSuccess}>
                SIGN IN
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <label className="auth-label">First name</label>
              <input
                className="auth-input"
                type="text"
                placeholder="First name"
                value={registerForm.firstName}
                onChange={(e) =>
                  setRegisterForm((p) => ({ ...p, firstName: e.target.value }))
                }
                required
                disabled={showSuccess}
              />

              <label className="auth-label">Last name</label>
              <input
                className="auth-input"
                type="text"
                placeholder="Last name"
                value={registerForm.lastName}
                onChange={(e) =>
                  setRegisterForm((p) => ({ ...p, lastName: e.target.value }))
                }
                required
                disabled={showSuccess}
              />

              <label className="auth-label">Email address</label>
              <input
                className="auth-input"
                type="email"
                placeholder="Email address"
                value={registerForm.email}
                onChange={(e) =>
                  setRegisterForm((p) => ({ ...p, email: e.target.value }))
                }
                required
                disabled={showSuccess}
              />

              <label className="auth-label">Password</label>
              <input
                className="auth-input"
                type="password"
                placeholder="Password"
                value={registerForm.password}
                onChange={(e) =>
                  setRegisterForm((p) => ({ ...p, password: e.target.value }))
                }
                required
                disabled={showSuccess}
              />

              <label className="auth-check">
                <input
                  type="checkbox"
                  checked={registerForm.agree}
                  onChange={(e) =>
                    setRegisterForm((p) => ({ ...p, agree: e.target.checked }))
                  }
                  disabled={showSuccess}
                />
                <span>
                  I agree to{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    terms &amp; conditions
                  </a>
                </span>
              </label>

              <button className="auth-btn" type="submit" disabled={showSuccess}>
                CREATE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
