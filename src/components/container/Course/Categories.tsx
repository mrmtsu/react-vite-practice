import { FiPenTool } from "react-icons/fi";

type Props = {
  category: string;
};

const Categories = ({ category }: Props) => {
  return (
    <div className="flex items-center flex-col gap-4 bg-white p-8 rounded-md">
      <div className="text-4xl text-Teal">
        <FiPenTool />
      </div>
      <div>{category}</div>
      <a href="" className="text-sm text-gray">
        View More
      </a>
    </div>
  );
};

export default Categories;
