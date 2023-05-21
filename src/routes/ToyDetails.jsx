import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const [data] = useLoaderData();
  const price = (data.price + "").split(".");
  return (
    <section className="mb-5 mt-7 max-w-7xl flex-1 px-4">
      <section className="flex flex-wrap items-center justify-center gap-7 text-gray-700">
        <img
          src={data.picture_url}
          alt={data.name}
          height={300}
          width={240}
          className="aspect-[4/5] w-60 border-8 border-white object-contain shadow-xl"
        />
        <div>
          <h1 className="mb-1 text-2xl font-semibold sm:mb-2 md:text-3xl">
            {" "}
            {data.name}
          </h1>
          <p className="max-w-xl text-slate-700 max-sm:text-justify sm:line-clamp-6">
            {" "}
            {data.detail_description}{" "}
          </p>

          <div className="my-3 flex flex-wrap items-start gap-7 text-xs font-medium uppercase text-gray-400">
            <p>
              Price
              <div className="text-xl font-semibold text-gray-800">
                <span className="mr-1 text-gray-700">$</span>
                {price[0]}
                <sup className="ml-[.17rem] text-xs font-semibold text-gray-600">
                  {price[1] && price[1]}
                </sup>
              </div>
            </p>
            <p>
              Rating
              <span className="block text-xl font-semibold lowercase text-gray-700">
                <span className="text-sm">⭐ </span>
                {data.rating}
              </span>
            </p>
            <p>
              Quantity{" "}
              <span className="block text-xl font-semibold text-gray-700">
                {data.available_quantity}
              </span>
            </p>
            <p>
              Seller Name{" "}
              <span className="block text-sm font-semibold text-gray-700">
                {data.seller_name}
              </span>
            </p>
            <p>
              Seller Email{" "}
              <a
                href={`mailto:${data.seller_email}`}
                className="block text-sm font-semibold lowercase text-gray-700"
              >
                {data.seller_email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
export default ToyDetails;
