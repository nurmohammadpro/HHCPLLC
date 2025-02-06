import { Link } from "react-router-dom";

const CardLight = ({ title, description, linkTitle, linkIcon, linkPath }) => {
  return (
    <div className="flex flex-col space-y-2 rounded-lg text-secondary py-8">
      <h2 className="font-bold text-3xl font-primary">{title}</h2>
      <p className="font-secondary text-lg">{description}</p>
      <Link
        className="font-secondary hover:text-accent-2 font-bold"
        to={linkPath}
      >
        {linkTitle} <span> </span> {linkIcon}
      </Link>
    </div>
  );
};

export default CardLight;
