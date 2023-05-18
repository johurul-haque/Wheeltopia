import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="font-fredoka flex items-center gap-2 text-2xl font-medium"
    >
      <img
        src="/wheeltopia.jpg"
        alt="Wheeltopia"
        className="aspect-square w-16 object-contain text-xs font-light mix-blend-color-burn"
      />
      <span className="bg-gradient-to-br from-green-600 from-0% via-lime-500 via-60% to-lime-400 bg-clip-text text-transparent">
        Wheeltopia
      </span>
    </Link>
  );
};
export default Logo;
