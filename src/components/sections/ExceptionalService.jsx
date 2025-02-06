import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../Button";
import Card from "../Card";

const ExceptionalService = () => {
  return (
    <div className="w-full bg-secondary text-primary py-20">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-2 ">
        <div className="space-y-2">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Our Exceptional Services
          </h2>
          <p className="text-lg">
            Psychologists employ a variety of research methods, clinical
            techniques.
          </p>
        </div>
        <div className="flex justify-end">
          <Button title="Services" path="/services" variant="secondary" />
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-2">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <img src="" alt="" />
            <Card
              title="Personal & Individual Therapy"
              description="Service play a crucial role in providing accessible mental health services to individuals in need."
              linkTitle="Learn More"
              linkIcon={<ArrowForwardIcon />}
              linkPath="/services"
            />
          </div>
          <div>
            <Card
              title="Personal & Individual Therapy"
              description="Service play a crucial role in providing accessible mental health services to individuals in need."
              linkTitle="Learn More"
              linkIcon={<ArrowForwardIcon />}
              linkPath="/services"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalService;
