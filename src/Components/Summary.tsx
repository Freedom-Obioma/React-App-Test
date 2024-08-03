import Coding from "../assets/coding.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";

const Summary = () => {
  return (
    <div className="flex items-center min-h-screen container mx-auto">
      {/*Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/*CARD section*/}
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Coding} />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Responsive Designs
            </h5>
            <p className="mt-3">
              "Take advantage of interactive tutorials we offer to reinforce
              your understanding and apply concepts in real world scenarios.”
            </p>
            <a
              href="#"
              className="text-center bg-blue-400 text-blue-950 font-semibold py-2 
              rounded-lg mt-4 hover:bg-slate-600 focus:scale-95 transition-all 
              duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>
        {/*END OF CARD 1*/}

        {/*CARD 2*/}
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Card2} />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">Layouts</h5>
            <p className="mt-3">
              "Take advantage of interactive tutorials we offer to reinforce
              your understanding and apply concepts in real world scenarios.”
            </p>
            <a
              href="#"
              className="text-center bg-blue-400 text-blue-950 font-semibold py-2 
              rounded-lg mt-4 hover:bg-slate-600 focus:scale-95 transition-all 
              duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>
        {/*END OF CARD 2*/}

        {/*CARD 3*/}
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={Card3} />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Interractive UI
            </h5>
            <p className="mt-3">
              "Take advantage of interactive tutorials we offer to reinforce
              your understanding and apply concepts in real world scenarios.”
            </p>
            <a
              href="#"
              className="text-center bg-blue-400 text-blue-950 font-semibold py-2 
              rounded-lg mt-4 hover:bg-slate-600 focus:scale-95 transition-all 
              duration-200 ease-out"
            >
              Explore
            </a>
          </div>
        </div>
        {/*END OF CARD 3*/}
      </div>
      {/*End Grid*/}
    </div>
  );
};

export default Summary;
