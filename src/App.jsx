import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import imageData from "./assets/data";
import "./App.css";
import Nav from "./Components/Nav";
import Gallery from "./Components/Gallery";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";

function ClerkProviderWithRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [images, setImages] = useState(imageData);
  const [searchVal, setSearchVal] = useState("");

  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                images={images}
                setImages={setImages}
                searchVal={searchVal}
                setSearchVal={setSearchVal}
              />
              <>
                <DndProvider backend={HTML5Backend}>
                  <Gallery
                    images={images}
                    isLoggedIn={isLoggedIn}
                    setImages={setImages}
                    searchVal={searchVal}
                  />
                </DndProvider>
              </>
            </>
          }
        />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <main className="lg:mx-16 md:mx-8 md:my-8 mx-4 my-4  ">
      <ClerkProviderWithRoutes />
    </main>
  );
}

export default App;
