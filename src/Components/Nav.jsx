/* eslint-disable react/prop-types */
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { SearchNormal1 } from "iconsax-react";
// import { auth } from "../../firebase"; // Import your Firebase configuration
import imageData from "../assets/data";
import { useAuth } from "@clerk/clerk-react";
// import logo from "../assets/imageFolio.svg";

import { UserButton, SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";

export default function Nav({
  setIsLoggedIn,
  setImages,
  searchVal,
  setSearchVal,
}) {
  const handleSearchInput = (e) => {
    setSearchVal(e.target.value);
  };
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    function handleFilter(el) {
      if (searchVal == "") {
        setImages(imageData);
      } else {
        let filteredImages = [...imageData].filter((item) =>
          item.tags.join("").includes(el.toLowerCase())
        );
        setImages(filteredImages);
      }
    }
    handleFilter(searchVal);
  }, [searchVal, setImages]);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [isLoaded, isSignedIn, setIsLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set loggedIn to true when the user successfully logs in
  };

  function SignUpButton() {
    const clerk = useClerk();

    return (
      <button
        className="sign-up-btn border-2 px-4 text-center border-[#9B9898] py-2 rounded-lg hover:bg-slate-800"
        onClick={() => clerk.openSignUp({})}
      >
        Sign up
      </button>
    );
  }

  function SignInButton() {
    const clerk = useClerk();

    return (
      <button
        className="sign-in-btn border-2 px-4 text-center border-[#9B9898] py-2 rounded-lg hover:bg-slate-800"
        onClick={() => clerk.openSignIn({ handleLogin })}
      >
        Sign in
      </button>
    );
  }

  return (
    <nav className="flex flex-wrap justify-between items-center gap-2 mb-12">
      <h1 className="text-2xl">ImageFolio</h1>

      <div className="flex md:flex-nowrap flex-wrap md:w-[75%] w-full justify-between items-center gap-4 ">
        <div
          className={`px-4 py-2 md:px-8 md:py-4 rounded-2xl flex justify-between item-center bg-[#787878] w-[75%]`}
        >
          <input
            className=" bg-transparent w-full pr-4"
            onChange={handleSearchInput}
            placeholder="Search your favorite photos..."
            value={searchVal}
          />
          <SearchNormal1 size="24" color="#fff" />
        </div>

        <div className="flex gap-4">
          <SignedOut>
            <SignUpButton />
            <SignInButton />
          </SignedOut>
        </div>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
