import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div>
        <Navbar />
        <header className="text-2xl md:text-3xl font-medium  mx-auto max-w-full px-3 py-5 sm:px-6 lg:px-8 bg-gray-800 text-white">
          <h1 className="font-extrabold text-lg text-blue-500">NOEX CODING</h1>
          <p>Go Pro with Noex coding platform.</p>
          <p>
            Learn Various Programming Languages And Become A Web Developer Or
            Full Stack Web Designer
          </p>
        </header>
      </div>
    </>
  );
};

export default Header;
