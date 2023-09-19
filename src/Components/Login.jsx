/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!(email.length == 0 || password.length == 0)) {
      setErrMsg("");
    } else {
      setErrMsg("Please enter your email and password");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setErrMsg("");
    } catch (error) {
      setErrMsg("Invalid email or password");
      console.log("Login error:", error.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-[80vh] flex items-center sm:max-w-lg max-w-[90vw] mx-auto">
      <section className="bg-white text-black p-8 lg:p-16 flex flex-col rounded-2xl gap-16 w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Welcome</h1>
          <p className="text-2xl font-medium">Login to your account</p>
        </div>
        <form className="flex flex-col gap-8">
          <input
            className="border-b-2 border-[#515151] px-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border-b-2 border-[#515151] px-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!!errMsg && <p className="text-red-400 ">{errMsg}</p>}
        </form>
        <Link
          onClick={handleLogin}
          className="border-2 text-center border-[#9B9898] py-2 rounded-lg hover:bg-slate-300"
          to={isLoggedIn && "/"}
        >
          <button type="submit">Login</button>
        </Link>
      </section>
    </div>
  );
}

export default Login;
