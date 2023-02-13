import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  id: number;
  title: string;
};

const Accordion = ({ id, title }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (id: number) => {
    setActiveIndex(id === activeIndex ? 0 : id);
  };

  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum
              beatae porro voluptatum aspernatur, id nesciunt reiciendis maxime
              unde necessitatibus illum accusamus mollitia incidunt qui nisi
              temporafacere magni magnam?
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
