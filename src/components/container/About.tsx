import aboutImage from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div>
          <img src={aboutImage} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">online courses</span>
          </div>
          <p className="text-xs text-gray leading-7 mb-4">
            1978(昭和53)年、大分県大分市生まれ。大学進学を機に福岡へ。エスプレッソの抽出に興味を持ち、シアトル系のコーヒーショップからコーヒーの道に入る。その後、manucoffeeにて勤務。バリスタを経て、ロースターを経験。2015年に前職を退職し、2016年3月に「3
            CEDARS COFFEE」を開業。
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
