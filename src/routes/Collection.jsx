import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { UpdateCard } from "../components/RowCard";
import useTitle from "../hooks/useTitle";

const Collection = () => {
  useTitle("Collection");
  const data = useLoaderData();
  const [toys, setToys] = useState(data);

  return (
    <section className="mx-auto my-10 grid max-w-7xl gap-6 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
      <h1 className="col-span-full mb-5 text-center text-4xl font-bold text-gray-800">
        My Toys
      </h1>
      {toys.length < 1 ? (
        <div className="col-span-full -mt-7 grid place-items-center gap-2">
          <p className="text-gray-700">You collection is currently empty!</p>
          <Link
            to={"/addtoys"}
            className="max-w-fit rounded-full bg-gray-800 px-4 py-2 text-white outline-none ring-gray-600 ring-offset-2 transition-all duration-200 hover:bg-gray-800/90 focus:ring"
          >
            + Click to Add
          </Link>
        </div>
      ) : (
        toys.map((obj) => (
          <UpdateCard
            state={toys}
            changeState={setToys}
            key={obj._id}
            data={obj}
          />
        ))
      )}
    </section>
  );
};
export default Collection;
