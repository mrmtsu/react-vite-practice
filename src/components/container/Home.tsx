import TopImage from "../../assets/top.jpg";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            スペシャルティ・コーヒー豆専門店
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            3 CEDARS COFFEE
          </div>
        </div>
        <p className="text-xs leadin-7 text-gray max-w-sm">
          スペシャルティ・コーヒー豆専門店
        </p>
        <div className="md:w-[60%] my-14">
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((log, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={log} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
