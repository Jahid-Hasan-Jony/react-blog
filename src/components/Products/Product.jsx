import { Link } from "react-router";

const Product = () => {
  return (
    <div className="w-full h-screen bg-red-400">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Product;
