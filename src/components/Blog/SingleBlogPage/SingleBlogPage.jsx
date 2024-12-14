import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleBlogPage = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const { blogTitle } = useParams();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        resData.map((item) => item.title == blogTitle && setSingleData(item));
      });
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
            <h1 className="mb-5 text-5xl font-bold">
              Category - {singleData.category}
            </h1>
          </div>
        </div>
      </div>

      <div className="text-black">
        <div className="container flex flex-wrap justify-center item-center mx-auto py-10">
          <div className="flex-auto w-64">
            <div className="flex flex-wrap space-x-4">
              <div className="flex-auto w-64">
                <img className="w-full" src={singleData.image} />
              </div>
              <div className="flex-auto flex justify-center flex-col w-32">
                <div>
                  <p className="py-3 text-xl  font-medium border-b border-[rgb(0 5 6 / 14%)]">
                    <FontAwesomeIcon icon={faCoffee} />
                    Author :
                    <span className="text-first rounded px-2 font-medium">
                      {singleData.author}
                    </span>
                  </p>
                  <p className="py-3 text-xl font-medium border-b border-[rgb(0 5 6 / 14%)]">
                    Publish Date :
                    <span className="text-first rounded px-2 font-medium">
                      {singleData.date}
                    </span>
                  </p>
                  <p className="py-3 text-xl font-medium border-b border-[rgb(0 5 6 / 14%)]">
                    Post Category :
                    <span className="text-first rounded px-2 font-medium">
                      {singleData.category}
                    </span>
                  </p>
                  <p className="py-3 text-xl font-medium border-b border-[rgb(0 5 6 / 14%)]">
                    Post Tags :
                    {singleData.tags?.map((item) => (
                      <span className="text-first rounded px-2 font-medium">
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-second py-5">
              {singleData.title}
            </h1>
            <div>{singleData.content}</div>
          </div>
          <div className="flex-auto w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
