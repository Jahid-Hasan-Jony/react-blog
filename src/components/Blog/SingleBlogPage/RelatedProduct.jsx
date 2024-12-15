import { Link } from "react-router";

const RelatedProduct = ({ data }) => {
  return (
    <div className="flex py-4 border-b border-[rgb(0 5 6 / 14%)]">
      <figure className="">
        <img className="max-w-32 rounded" src={data.image} alt="Shoes" />
      </figure>
      <div className="px-3 flex flex-col justify-items-center justify-center">
        <div>
          <h2 className="text-lg">{data.title}</h2>
          <p className="text-base">{data.date}</p>
          <div className="">
            <Link to={`/blog/${data.title}`}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
