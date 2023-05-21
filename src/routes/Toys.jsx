import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ShowCard } from "../components/RowCard";
import useTitle from "../hooks/useTitle";

const Toys = () => {
  useTitle("All Toys");
  const data = useLoaderData();
  const [obj, setObj] = useState(data);

  const search = (e) => {
    e.preventDefault();
    const query = e.target.search.value;

    fetch(`${import.meta.env.VITE_SERVER}/toys?search=${query}`)
      .then((res) => res.json())
      .then((data) => setObj(data));
  };

  return (
    <section className="mx-auto my-7 grid max-w-7xl gap-6 px-4 py-3 backdrop-blur-3xl sm:px-6 lg:grid-cols-2 lg:px-8">
      <h1 className="mb-5 text-center text-4xl font-bold text-gray-800">
        All Toys
      </h1>
      <form
        onSubmit={search}
        className="flex h-12 gap-4 rounded border pl-4 transition-all duration-200 focus-within:border-gray-500"
      >
        <label htmlFor="search" className="grid max-w-fit place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 stroke-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="h-full grow outline-none"
          placeholder="Search toys..."
        />
        <button className="rounded-e bg-gray-800 px-5 text-white">
          Search
        </button>
      </form>

      {obj.length < 1 ? (
        <p>No data found</p>
      ) : (
        obj.map((obj) => <ShowCard key={obj._id} data={obj} />)
      )}
    </section>
  );
};
export default Toys;
