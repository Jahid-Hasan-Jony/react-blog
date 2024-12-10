import { Link } from "react-router";

const About = () => {
  return (
    <div className="w-full h-screen bg-green-400">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default About;
