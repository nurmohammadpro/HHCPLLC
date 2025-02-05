import HeroImage from "../../assets/heroImage.jpg";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="relative z-20 flex flex-col text-primary space-y-8 w-full h-dvh items-center justify-center bg-[url('../../assets/heroImage.jpg')] bg-cover bg-no-repeat">
      <p className="text-xl lg:text-3xl">We care about your</p>
      <h1 className="font-primary text-5xl lg:text-9xl font-bold">
        Mental Health
      </h1>
      <div className="mt-10">
        <Button title="View More" path="/about" />
      </div>
      <img
        className="absolute -z-10 opacity-10 hidden lg:flex"
        src={HeroImage}
        alt=""
      />
    </div>
  );
};

export default Hero;
