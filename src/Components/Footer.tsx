const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-gray-900 text-gray-200">
          <div className="container mx-auto py-14 px-6">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
              <div className="lg:col-span-4 col-span-12">
                <h1 className="font-extrabold text-lg text-blue-500">
                  NOEX CODING
                </h1>
                <p className="mt-6">
                  Sub scribe to our newsletters and stay up to date on features
                  and releases. <br />
                  <br />
                  Copyrights @ Progfams 2024
                </p>
              </div>
              <div className="lg:col-span-2 md:col-span-4 col-span-12">
                <h5 className="tracking-wide text-gray-100 font-semibold">
                  Company
                </h5>
                <ul className="list-none mt-6 space-y-2">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Docs</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className="lg:col-span-2 md:col-span-4 col-span-12">
                <h5 className="tracking-wide text-gray-100 font-semibold">
                  Important Links
                </h5>
                <ul className="list-none mt-6 space-y-2">
                  <li>Terms of Services</li>
                  <li>Privacy Policy</li>
                  <li>Documentation</li>
                </ul>
              </div>
              <div className="lg:col-span-2 md:col-span-4 col-span-12">
                <h5 className="tracking-wide text-gray-100 font-semibold">
                  Newsletter
                </h5>
                <p className="mt-6">
                  Sign Up and receive the latest tips via mail.
                </p>
                <div className="my-3">
                  <label htmlFor="email-input">
                    Write Your Mail<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    className="mt-3 w-full py-3 p-5 h-10 bg-transparent rounded outline-none border border-gray-500 focus:border-[#FFCDA3] focus:ring-0"
                    placeholder="freedom2@gmail.com"
                  />
                </div>
                <button
                  typeof="Submit"
                  className="py-2 px-5 tracking-wide border duration-500 text-base text-center bg-[#FFCDA3] hover:bg-[#FFCD88] border-[#FFCDA3] hover:border-[#FFCD88] text-black rounded-md w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700">
            <div className="md-text-left text-center container m-auto py-7 px-6">
              <p className="mb-0">Copyrights2024 NOEX TEAM</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
