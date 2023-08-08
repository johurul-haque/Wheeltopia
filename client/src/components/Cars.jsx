/* eslint-disable react/prop-types */
import AOS from "aos";
import { Link } from "react-router-dom";
AOS.init();

const Cars = ({ info }) => {
  return (
    <article data-aos="fade-up" className="grid rounded-md border bg-white p-4">
      <h4 className="mt-1 text-lg font-medium text-gray-800">{info.name}</h4>
      <img
        src={info.picture_url}
        alt={info.name}
        width={192}
        height={192}
        className="-order-1 aspect-square w-48 rounded-md object-contain"
      />
      <div className="flex justify-between text-sm text-slate-600">
        <p>${info.price}</p>
        <p>{info.rating} ⭐</p>
      </div>
      <Link
        className="mt-2 self-end rounded bg-emerald-600 py-2 text-center text-white outline-offset-2 outline-emerald-300 transition duration-200 hover:bg-emerald-600/90"
        to={`/toys/${info._id}`}
      >
        View Details
      </Link>
    </article>
  );
};
export default Cars;
