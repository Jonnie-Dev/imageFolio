import { useState } from "react";

export default function Nav() {
  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };
  return (
    <div>
      <div>
        <input
          onChange={handleSearch}
          placeholder="Search your favorite photos..."
          value={searchVal}
        />
      </div>
      <button>Login</button>
    </div>
  );
}
