import { useContext, useEffect, useState } from "react";

import BlogListing from "../Blog/BlogListing/BlogListing";
import { DarkModeContext } from "../Context/Context";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);
  return (
    <div className={`${darkMode ? "dark" : ""} w-full p-5`}>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {data?.map((item) => (
          <BlogListing key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
