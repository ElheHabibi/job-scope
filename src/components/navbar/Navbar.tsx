import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-300 flex justify-around">
      <Link to="/">
        <span>home</span>
      </Link>

      <Link to="/bookmarks">
        <span>bookmarks</span>
      </Link>
    </div>
  );
}

export default Navbar;
