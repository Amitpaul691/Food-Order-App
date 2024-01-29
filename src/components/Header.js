import { useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useonline";

const Title = () => (
  <a href="/">
    <img className="log" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  useEffect(() => {
    // console.log("useeffect");
  }, []);

  return (
    <div className="flex justify-between">
      <Title />
      <div className="flex ">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
