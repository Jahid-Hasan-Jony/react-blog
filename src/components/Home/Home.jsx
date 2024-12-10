import { useContext } from "react";
import { Link } from "react-router";
import { DarkModeContext } from "../Context/Context";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "dark" : "bg-red-900"} w-full h-screen `}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <button onClick={() => setDarkMode((pre) => !pre)} className="btn glass">
        Mode Toggle
      </button>
    </div>
  );
};

export default Home;
