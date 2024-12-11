const BlogListing = ({ data }) => {
  const { id, title, author, date, content, tags, image } = data;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content.slice(0, 100)} ...[ More ]</p>
        <div className="card-actions justify-end align-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
