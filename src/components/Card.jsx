import { Link } from "react-router-dom";

const Card = ({
  icon: IconComponent,
  title,
  description,
  linkTitle,
  linkIcon,
  linkPath,
}) => {
  return (
    <div className="flex flex-col space-y-4 rounded-lg bg-secondary px-10 py-14">
      {IconComponent && (
        <IconComponent sx={{ fontSize: "4rem" }} className="text-primary" />
      )}
      <h2 className="font-bold text-3xl font-primary">{title}</h2>
      <p className="font-secondary text-primary text-lg">{description}</p>
      <Link
        className="font-secondary text-primary hover:text-accent-1 font-bold"
        to={linkPath}
      >
        {linkTitle} <span> </span> {linkIcon}
      </Link>
    </div>
  );
};

export default Card;
