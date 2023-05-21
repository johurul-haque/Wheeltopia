import { useLoaderData } from "react-router-dom";
import { ShowCard } from "../components/RowCard";
import useTitle from "../hooks/useTitle";

const Toys = () => {
  useTitle("All Toys");
  const data = useLoaderData();

  return (
    <section className="my-7 grid gap-6 px-4 py-3 backdrop-blur-3xl sm:px-6 lg:grid-cols-2 lg:px-8">
      <h1 className="mb-5 text-center text-4xl font-bold text-gray-800">
        All Toys
      </h1>
      <input type="search" name="search" className="" />
      {data.map((obj) => (
        <ShowCard key={obj._id} data={obj} />
      ))}
    </section>
  );
};
export default Toys;
