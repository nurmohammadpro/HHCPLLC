import { Link } from "react-router-dom";

const Button = ({ title, path }) => {
  return (
    <div>
      <Link
        to={path}
        className="px-8 py-4 rounded-3xl font-medium cursor-pointer bg-accent-1 text-primary hover:bg-accent-2"
      >
        {title}
      </Link>
    </div>
  );
};

export default Button;
