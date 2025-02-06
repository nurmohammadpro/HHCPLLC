import Button from "../Button";

const Hero = () => {
  return (
    <div className="w-full bg-primary">
      <div className="relative z-20 flex flex-col text-secondary space-y-8 w-full h-dvh items-center justify-center ">
        <p className="text-xl lg:text-3xl font-secondary">We care about your</p>
        <h1 className="font-secondary tracking-wide  text-5xl lg:text-9xl font-bold">
          Mental Health
        </h1>
        <div className="mt-10">
          <Button title="View More" path="/about" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
