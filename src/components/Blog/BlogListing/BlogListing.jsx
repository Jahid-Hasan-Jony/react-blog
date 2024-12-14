import { useContext } from "react";
import { Link } from "react-router";
import { DarkModeContext } from "../../Context/Context";
const BlogListing = ({ data }) => {
  const { id, title, author, date, content, tags, image } = data;
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`${
        darkMode ? "shadow shadow-black" : "bg-base-100"
      } card max-w-96 shadow-xl`}
    >
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title.slice(0, 25)} ...</h2>
        <p>{content.slice(0, 100)} ...[ More ]</p>
        <div className="card-actions justify-end align-center mt-5">
          <Link
            to={`/blog/${title}`}
            className={`${
              darkMode ? "bg-[#171923] text-white" : "bg-white text-second"
            } btn border-2 shadow-black bg-second hover:bg-second hover:text-white border-none shadow shadow-black btn-primary w-full`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
