import TopImage from "../../assets/top.jpg";
import { logos } from "../../Data";

const Home = () => {
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is
            <br /> the new way <br />
            to learn online
          </div>
        </div>
        <p className="text-sm leadin-7 text-gray max-w-sm">
          Lorem, ipsum dolor sit amet consectetur adipising elit. Vero officia
          sit vitae quo, eum similique?
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
            Get Started
          </button>
          <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
            Discover
          </button>
        </div>
        <div className="md:w-[60%] my-3">
          <img src={TopImage} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities ans companies
          </span>
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8 p-2">
          {logos.map((log, index) => (
            <div className="w-28" key={index}>
              <img src={log} alt="" className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
