import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import imageData from "./assets/data";
import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Gallery from "./Components/Gallery";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [images, setImages] = useState(imageData);

  return (
    <main className="lg:mx-16 md:mx-8 md:my-8 mx-4 my-4  ">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <>
                <DndProvider backend={HTML5Backend}>
                  <Gallery
                    images={images}
                    isLoggedIn={isLoggedIn}
                    setImages={setImages}
                  />
                </DndProvider>
              </>
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
