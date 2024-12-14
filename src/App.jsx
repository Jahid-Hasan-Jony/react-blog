import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About/About.jsx";
import Blog from "./components/Blog/Blog.jsx";
import SingleBlogPage from "./components/Blog/SingleBlogPage/SingleBlogPage";
import Contact from "./components/Contact/Contact.jsx";
import { DarkModeContext } from "./components/Context/Context";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home.jsx";
import Product from "./components/Products/Product.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:blogTitle" element={<SingleBlogPage />} />
        </Routes>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
