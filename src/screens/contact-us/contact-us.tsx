export default function ContactUs() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/3 gap-y-5 p-3">
          <h3>Contact us</h3>
          <a className="link link-hover">
            <b>Institution of Agricultural Technologists</b> No. 15, Queen’s Road, Bangalore-560 052
          </a>
          <a className="link link-hover">Ph No : 80 22384175</a>
          <a className="link link-hover" href="mailto:iatbangalore@gmail.com">
            iatbangalore@gmail.com
          </a>
        </div>
        <div className="w-full lg:w-2/3 p-3">
          <h3>Enquiry us</h3>
          <form className="form-control">
            <div className="flex md:gap-2 sm:flex-wrap md:flex-nowrap">
              <div className="form-control sm:w-full lg:w-1/3">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control sm:w-full lg:w-1/3">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email ID"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control sm:w-full lg:w-1/3">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered text-base"
                placeholder="Write your message"
              />
            </div>
            <button className="btn w-20 btn-outline m-2">Submit</button>
          </form>
        </div>
      </div>
      <div className="p-3">
        <h3>Find us</h3>
      </div>
    </>
  );
}
