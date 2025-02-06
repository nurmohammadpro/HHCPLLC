import HeroVideo from "../assets/hero.mp4";
import Button from "./Button";

const Hero2 = () => {
  return (
    <div className="bg-primary -mt-20 ">
      <div className="flex flex-col max-w-[1280px] px-2 py-72 mx-auto items-center justify-center">
        <div className="lg:flex-1 text-secondary text-4xl md:text-5xl lg:text-6xl font-bold font-primary leading-20">
          <h1 className="">Assisting Your Fresh Start in Life</h1>
          <div className="lg:flex-1 flex flex-col space-y-10 font-secondary text-secondary font-normal">
            <p className="text-lg">
              A psychologist center, often known as a psychology or mental
              health center, is a facility or organization.
            </p>
            <div className="flex items-center justify-start gap-4">
              <div>
                <h2 className="font-bold text-4xl">895+</h2>
                <p className="font-medium text-xl">Happy clients</p>
              </div>
              <div>
                <h2 className="font-bold text-4xl">425+</h2>
                <p className="font-medium text-xl">Success Stories</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center px-2">
          <iframe
            className="rounded-2xl shadow-lg"
            width="1280"
            height="720"
            src={HeroVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="pt-20">
          <Button title="Get Started" path="/services" variant="light" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
