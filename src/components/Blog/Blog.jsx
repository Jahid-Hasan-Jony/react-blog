import { Link } from "react-router";

const Blog = () => {
  return (
    <div className="w-full h-screen bg-red-600">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Blog;
