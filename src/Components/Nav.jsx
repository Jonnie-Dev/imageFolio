/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchNormal1 } from "iconsax-react";
import { auth } from "../../firebase"; // Import your Firebase configuration
import imageData from "../assets/data";
// import logo from "../assets/imageFolio.svg";

export default function Nav({
  isLoggedIn,
  setIsLoggedIn,
  setImages,
  searchVal,
  setSearchVal,
}) {
  const handleSearchInput = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    function handleFilter(el) {
      if (searchVal == "") {
        setImages(imageData);
      } else {
        let filteredImages = [...imageData].filter((item) =>
          item.tags.join("").includes(el)
        );
        setImages(filteredImages);
      }
    }
    handleFilter(searchVal);
  }, [searchVal, setImages]);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Call the signOut method to log the user out
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="flex flex-wrap justify-between items-center gap-2 mb-12">
      <h1 className="text-2xl">ImageFolio</h1>

      <div className="flex md:w-[75%] w-full justify-between items-center gap-4 ">
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
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-white text-black md:text-lg text-base font-medium rounded-lg"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="py-2 px-4 bg-white text-black md:text-lg text-base font-medium rounded-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
