import { useContext, useEffect, useState } from "react";
import BlogListing from "../Blog/BlogListing/BlogListing";
import { DarkModeContext } from "../Context/Context";

const Blog = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="min-h-64 flex items-center justify-center">
            <h1 className="mb-5 text-5xl font-bold">ALL BLOGS</h1>
          </div>
        </div>
      </div>
      <div
        className={`${
          darkMode ? "dark" : ""
        } w-full py-14 z-0 flex justify-center`}
      >
        <div className="flex flex-wrap gap-5 items-start justify-center w-3/4">
          {data?.map((item) => (
            <BlogListing key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
