const Hero2 = () => {
  return (
    <div className="bg-primary -mt-20">
      <div className="flex flex-col lg:flex-row max-w-[1280px] h-screen mx-auto items-center justify-center">
        <div className="lg:flex-1 text-secondary text-4xl md:text-5xl lg:text-6xl font-bold font-primary tracking-wider leading-20">
          <h1 className="">Assisting Your Fresh Start in Life</h1>
        </div>
        <div className="lg:flex-1 flex flex-col items-center justify-center space-y-6 font-secondary text-secondary font-normal">
          <p>
            A psychologist center, often known as a psychology or mental health
            center, is a facility or organization.
          </p>
          <div className="flex gap-4">
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
    </div>
  );
};

export default Hero2;
