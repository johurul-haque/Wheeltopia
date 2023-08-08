import { Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import pattern from '../assets/svg/pattern.svg';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section
      className="bg-slate-50 py-14 shadow-[0_0_0_100vmax_rgb(248_250_252)] [clip-path:inset(0_-100vmax)] sm:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper testimonial max-w-3xl"
      >
        <SwiperSlide>
          <article className="mx-auto grid max-w-2xl gap-x-6 gap-y-8 border bg-white p-8 sm:grid-cols-[2fr,1fr]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 64 58"
                className="h-5 w-5 text-gray-950"
              >
                <path
                  d="m63.1543 42.42c0-8.1447-5.7507-14.4228-14.7149-14.0835.8456-11.3685 9.6408-21.20995 15.5606-25.79129l-1.6914-2.54521c-12.347 7.80527-27.9077 23.9249-27.9077 40.5535 0 9.5021 5.4124 16.4589 14.2076 16.4589 8.7951 0 14.5458-6.7872 14.5458-14.5924zm-34.4009 0c0-8.1447-5.7507-14.4228-14.715-14.0835.8457-11.3685 9.6408-21.20995 15.5606-25.79129l-1.6913-2.54521c-12.3471 7.80527-27.9077 23.9249-27.9077 40.5535 0 9.5021 5.41239 16.4589 14.2075 16.4589 8.7952 0 14.5459-6.7872 14.5459-14.5924z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote className="mt-4 tracking-wide">
                <p>
                  Wheeltopia is a dream come true for my little car enthusiast!
                  The website&apos;s collection of toy cars is absolutely
                  fantastic. Watching my child being happy was the best.{' '}
                  <strong>Thank you,</strong> Wheeltopia.
                </p>
              </blockquote>
            </div>
            <figure>
              <img
                src={'/images/ismaeel.webp'}
                width={1920}
                height={1080}
                className="mx-auto h-24 w-24 rounded-full object-cover object-top"
                alt="Picture of Ismaeel Ameen"
              />
              <figcaption className="text-center">
                <h3 className="mt-4 text-lg font-medium leading-snug">
                  Ismaeel Ameen
                </h3>
                <p className="text-gray-700">Father</p>
                <em className="text-sm text-gray-700">Bought for his child</em>
              </figcaption>
            </figure>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="mx-auto grid max-w-2xl gap-x-6 gap-y-8 border bg-white p-8 sm:grid-cols-[2fr,1fr]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 64 58"
                className="h-5 w-5 text-gray-950"
              >
                <path
                  d="m63.1543 42.42c0-8.1447-5.7507-14.4228-14.7149-14.0835.8456-11.3685 9.6408-21.20995 15.5606-25.79129l-1.6914-2.54521c-12.347 7.80527-27.9077 23.9249-27.9077 40.5535 0 9.5021 5.4124 16.4589 14.2076 16.4589 8.7951 0 14.5458-6.7872 14.5458-14.5924zm-34.4009 0c0-8.1447-5.7507-14.4228-14.715-14.0835.8457-11.3685 9.6408-21.20995 15.5606-25.79129l-1.6913-2.54521c-12.3471 7.80527-27.9077 23.9249-27.9077 40.5535 0 9.5021 5.41239 16.4589 14.2075 16.4589 8.7952 0 14.5459-6.7872 14.5459-14.5924z"
                  fill="currentColor"
                ></path>
              </svg>
              <blockquote className="mt-4 tracking-wide">
                <p>
                  As a grandparent, finding the right gifts for my grand kids
                  can be a challenge. However, Wheeltopia has become my go-to
                  destination for making their day. It&apos;s not just a
                  website; <strong>it&apos;s a source of smiles!</strong>
                </p>
              </blockquote>
            </div>
            <figure>
              <img
                src={'/images/shanks.webp'}
                width={1920}
                height={1080}
                className="mx-auto h-24 w-24 rounded-full object-cover object-center"
                alt="Picture of Akagami Shanks"
              />
              <figcaption className="text-center">
                <h3 className="mt-4 text-lg font-medium leading-snug">
                  Akagami Shanks
                </h3>
                <p className="text-gray-700">Grandfather</p>
                <em className="text-sm text-gray-700">
                  Bought for his grandchild
                </em>
              </figcaption>
            </figure>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Testimonial;
