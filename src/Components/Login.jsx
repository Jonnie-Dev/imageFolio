import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Nav from "./Nav";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      //   alert("Successfully logged in");
      // User successfully logged in
    } catch (error) {
      console.log("Login error:", error.message);
    }
  };

  return (
    <div className="login">
      <Nav />
      <section>
        <div>
          <h1>Welcome</h1>
          <p>Login to your account</p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </section>
    </div>
  );
}

export default Login;
