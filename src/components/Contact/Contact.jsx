const Contact = () => {
  return (
    <>
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
            <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 py-16">
        <div className="hero-content w-full xl:w-1/4">
          <div className="card bg-base-100 w-full min-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="flex flex-row flex-wrap gap-2">
                <div className="form-control min-w-16 flex-1">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control min-w-16 flex-1">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="Lname"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write your message</span>
                </label>

                <label className="form-control">
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Write your words..."
                    name="dtext"
                  ></textarea>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
