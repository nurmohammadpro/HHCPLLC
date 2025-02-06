import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhyUsImg from "../../assets/whyus.webp";
import CardLight from "../CardLight";

const WhyUs = () => {
  return (
    <div className="w-full bg-primary my-20">
      <div className="flex flex-col lg:flex-row items-center justify-between h-dvh py-10 lg:py-0 max-w-[1280px] mx-auto px-2">
        <div className="flex flex-col flex-1">
          <h2 className="text-4xl lg:text-6xl font-bold text-secondary">
            Why Choose Our Center?
          </h2>
          <CardLight
            title="Our Therapy Sessions"
            description="Building and maintaining positive relationships with clients or customers is a central aspect of the role. The manager aims to understand client needs and concerns."
            linkTitle="Learn More"
            linkIcon={<ArrowForwardIcon />}
            linkPath="/sessions"
          />
          <CardLight
            title="Customer Feedback"
            description="Building and maintaining positive relationships with clients or customers is a central aspect of the role. The manager aims to understand client needs and concerns."
            linkTitle="Learn More"
            linkIcon={<ArrowForwardIcon />}
            linkPath="/feedbacks"
          />
          <CardLight
            title="Support Patient"
            description="Building and maintaining positive relationships with clients or customers is a central aspect of the role. The manager aims to understand client needs and concerns."
            linkTitle="Learn More"
            linkIcon={<ArrowForwardIcon />}
            linkPath="/support"
          />
        </div>
        <div className="flex-1">
          <img className="rounded-2xl" src={WhyUsImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
