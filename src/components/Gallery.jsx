/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Gallery = ({ data }) => {
  return (
    <section className="font-fredoka mx-auto -mt-24 mb-10 grid max-w-7xl border-collapse flex-wrap justify-center gap-5 sm:mb-14 sm:grid-cols-[repeat(2,16rem)] md:grid-cols-[repeat(3,16rem)] lg:grid-cols-[repeat(4,16rem)] ">
      <div className="mx-auto self-center justify-self-center">
        <h2 className="mb-1 text-center text-3xl font-medium text-gray-900">
          Gallery
        </h2>
        <p className="text-center text-lg font-light text-gray-800">
          Crafted with 💖
        </p>
      </div>
      {data.slice(1, 12).map((toy) => (
        <img
          key={toy._id}
          src={toy.picture_url}
          alt={toy.name}
          className="aspect-[4/5] w-64 rounded-md border object-contain"
        />
      ))}
    </section>
  );
};
export default Gallery;
