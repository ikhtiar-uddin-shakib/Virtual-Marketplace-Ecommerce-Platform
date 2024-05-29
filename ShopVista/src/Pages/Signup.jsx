import { useState } from "react";
import React from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    try {
      await signInWithPopup(auth, provider);
      alert("Sign in Succesful");
      navigate("/");
    } catch (error) {
      alert("Failed to be signed in");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Succesfully Signed Up");
      navigate("/");
    } catch (error) {
      alert("Please put valid cridentials");
    }
  };

  return (
    <div className="signup-form">
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email"
      />
      <br />
      <br />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password"
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Sign Up</button>
      <br />
      <br />
      <h2>OR</h2>
      <br />
      <button onClick={handleGoogleSignIn} >SignIn with Google </button>
    </div>
  );
};

export default SignUpPage;
