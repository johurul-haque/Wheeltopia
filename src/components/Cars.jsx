import { Link } from "react-router-dom";

const Cars = ({ info }) => {
  return (
    <article className="grid max-w-fit rounded-md border bg-white p-4">
      <h4 className="mt-1 text-lg font-medium text-gray-800">{info.name}</h4>
      <img
        src="/wheeltopia.jpg"
        alt="wheeltopia"
        width={192}
        height={192}
        className="-order-1 aspect-square w-48 rounded-md object-contain"
      />
      <div className="flex justify-between text-sm text-stone-700">
        <p>$1200</p>
        <p>4.5 ⭐</p>
      </div>
      <Link
        className="mt-2 rounded bg-emerald-600 py-2 text-center text-white outline-none transition duration-200 hover:bg-emerald-600/90 focus:ring"
        to={"/details"}
      >
        View Details
      </Link>
    </article>
  );
};
export default Cars;
