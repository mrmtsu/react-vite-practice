import { Link } from "react-scroll";

type Props = {
  href: string;
  link: string;
  handleToggle: () => void;
};

const MobileNavLinks = ({ href, link, handleToggle }: Props) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300"
        onClick={handleToggle}
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLinks;
