import { useContext, useEffect, useState } from "react";
import BlogListing from "../Blog/BlogListing/BlogListing";
import { DarkModeContext } from "../Context/Context";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);
  return (
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
  );
};

export default Home;
