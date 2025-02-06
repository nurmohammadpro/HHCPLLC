import Hero2 from "./Hero2";
import ExceptionalService from "./sections/ExceptionalService";
import MagicalTherapy from "./sections/MagicalTherapy";
import WhyUs from "./sections/WhyUs";

const Homepage = () => {
  return (
    <div>
      <Hero2 />

      <MagicalTherapy />
      <WhyUs />
      <ExceptionalService />
    </div>
  );
};

export default Homepage;
