import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from 'react-router-dom';
import wave from '../assets/svg/wave.svg';
import Cards from '../components/Cards';
import Categories from '../components/Categories';
import Faq from '../components/FAQ';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

const App = () => {
  const toysData = useLoaderData(),
    [toys] = useState(toysData);

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
            <p className="mt-5 max-w-lg text-xl [text-wrap:balance]">
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
              {toys.map((obj) => (
                <Cards data={obj} key={obj._id} />
              ))}
            </Marquee>
          </div>
        </div>
      </section>
      <Gallery data={toys} />
      <Categories data={toys} />
      <div className="mx-auto mt-5 grid max-w-7xl items-center pb-5 pt-24 md:grid-cols-[1fr_28rem]">
        <h2 className="font-fredoka space-x-5 text-center text-[20vw] font-bold min-[300px]:space-x-7 sm:text-[17vw] md:text-[8vw] lg:text-[12vw] xl:text-[12rem]">
          <span className="inline-block animate-bounce">F</span>
          <span className="inline-block animate-bounce [animation-delay:2ms]">
            A
          </span>
          <span className="inline-block animate-bounce text-emerald-700">
            Q
          </span>
        </h2>

        <Faq />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Services />
      </div>

      <Testimonial />
    </>
  );
};
export default App;
