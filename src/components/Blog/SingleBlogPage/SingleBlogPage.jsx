import {
  faCalendarDays,
  faLayerGroup,
  faPenToSquare,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RelatedProduct from "./relatedProduct";

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
  }, [blogTitle]);

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

      <div className="text-black py-16">
        <div className="container flex items-start flex-wrap justify-center item-center mx-auto">
          <div className="w-3/4 p-5">
            <div className="flex flex-wrap space-x-4">
              <div className="flex-auto w-64">
                <img className="w-full" src={singleData.image} />
              </div>
              <div className="flex-auto flex justify-center flex-col w-32">
                <div>
                  <p className="py-3 text-xl  font-medium border-b border-[rgb(0 5 6 / 14%)]">
                    <FontAwesomeIcon className="px-3" icon={faPenToSquare} />
                    Author :
                    <span className="text-first rounded px-2 font-medium">
                      {singleData.author}
                    </span>
                  </p>
                  <p className="py-3 text-xl font-medium border-b border-[rgb(0 5 6 / 14%)]">
                    <FontAwesomeIcon className="px-3" icon={faCalendarDays} />
                    Publish Date :
                    <span className="text-first rounded px-2 font-medium">
                      {singleData.date}
                    </span>
                  </p>
                  <p className="py-3 text-xl font-medium border-b border-[rgb(0 5 6 / 14%)]">
                    <FontAwesomeIcon className="px-3" icon={faLayerGroup} />
                    Post Category :
                    <span className="text-first rounded px-2 font-medium">
                      {singleData.category}
                    </span>
                  </p>
                  <p className="py-3 text-xl font-medium border-b border-[rgb(0 5 6 / 14%)]">
                    <FontAwesomeIcon className="px-3" icon={faTags} />
                    Post Tags :
                    {singleData.tags?.map((item, index) => (
                      <span
                        key={index}
                        className="text-first rounded px-2 font-medium"
                      >
                        {singleData.tags.length - 1 != index
                          ? `${item} ,`
                          : item}
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
          <div className="w-1/4">
            <div className="p-5 shadow shadow-lg">
              <h3 className="pb-2 text-xl font-bold">Related Blogs</h3>
              {data.map(
                (item) =>
                  item.category == "Web Design" && (
                    <RelatedProduct key={item.id} data={item} />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
