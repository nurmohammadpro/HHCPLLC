import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-secondary text-primary border border-secondary hover:bg-primary hover:text-secondary",
  secondary:
    "bg-primary text-secondary border border-secondary hover:bg-secondary hover:border-primary hover:text-primary",
};

const Button = ({ title, path, type, variant = "primary" }) => {
  const buttonClass = variants[variant] || variants.primary;
  return (
    <Link
      to={path}
      className={`px-8 py-4 rounded-3xl font-medium cursor-pointer transition-all ease-in-out duration-300 ${buttonClass}`}
      type={type}
    >
      {title}
    </Link>
  );
};

export default Button;
