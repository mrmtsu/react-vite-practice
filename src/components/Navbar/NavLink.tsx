import { Link } from "react-scroll";

type Props = {
  href: string;
  link: string;
};

const NavLink = ({ href, link }: Props) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300"
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
