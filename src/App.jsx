import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <main className="lg:mx-16 md:mx-8 md:my-8 mx-4 my-4  ">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <h1>Hello</h1>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
