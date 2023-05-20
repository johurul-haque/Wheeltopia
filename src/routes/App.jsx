import Marquee from "react-fast-marquee";
import wave from "../assets/wave.svg";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import Services from "../components/Services";

const App = () => {
  return (
    <>
      <section className="relative min-h-[55rem]">
        <img
          src={wave}
          role="presentation"
          className="absolute -z-50 h-full w-full object-cover"
        />
        <div className="mx-auto min-h-[calc(55rem-90px)] max-w-7xl items-center gap-5 px-4 sm:px-6 lg:flex lg:px-8">
          <div className="font-fredoka min-w-[50%] text-white max-lg:mb-16 max-lg:pt-24 lg:-mt-36">
            <h1 className="text-4xl font-medium uppercase drop-shadow-[3px_3px_0_rgb(234,179,8)] md:text-5xl">
              Embark on thrilling adventures
            </h1>
            <p className="mt-5 text-xl">
              Explore a world of fun and excitement with our collection of toy
              cars
            </p>
          </div>
          <div className="w-full text-white lg:-mt-36 lg:max-w-[45%]">
            <Marquee
              gradient={true}
              gradientColor={[52, 211, 153]}
              gradientWidth={100}
            >
              <Cards />
              <Cards />
              <Cards />
            </Marquee>
          </div>
        </div>
      </section>

      <Categories />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Services />
      </div>
    </>
  );
};
export default App;
