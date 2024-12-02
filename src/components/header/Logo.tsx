import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex items-center gap-3">
    <img
      src="/lovable-uploads/f77fd89e-154b-46e4-b1a6-dae20c68ab2e.png"
      alt="PétanqueSpots"
      className="w-20 h-20 object-contain"
    />
    <h1 className="text-3xl font-heading font-extrabold text-white">
      PétanqueSpots
    </h1>
  </Link>
);

export default Logo;