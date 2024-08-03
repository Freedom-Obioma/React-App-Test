import Group from "../assets/Groupimg.png";

const Hero = () => {
  return (
    <>
      <main className="flex text-base py-10 px-10 font-medium">
        <div>
          <h1>Web design & Development</h1>
          <h2>Course</h2>
          <p>
            Web Design is a specialization of the design stream. They also use
            HTML, CSS, Tailwindcss, React, mark up Validators etc, to creat
            design elements.
          </p>
          <p className="pb-10">
            “Explore the course catalog and syllables to identify courses that
            align with personal learning objectives. Take advantage of
            interactive tutorials we offer to reinforce your understanding and
            apply concepts in real world scenarios.”
          </p>
          <button className="bg-orange-500 rounded-md p-3">Get Started</button>
        </div>
        <div className="py-5 px-4">
          <img src={Group} />
        </div>
      </main>
    </>
  );
};

export default Hero;
