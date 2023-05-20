/* eslint-disable react/prop-types */
import { useState } from "react";
import Cars from "./Cars";

const Categories = ({ data }) => {
  const sportsCar = data.filter(
    (toy) => toy.category.toLowerCase() == "sports car"
  );

  const [info, setInfo] = useState([sportsCar, { title: "Sports Car" }]);

  const selectCategory = (e) => {
    const title = e.currentTarget.innerText;

    const category = data.filter(
      (toy) => toy.category.toLowerCase() == title.toLowerCase()
    );

    setInfo([category, { title }]);
  };

  return (
    <section className="font-fredoka mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mb-1 text-center text-3xl font-medium text-gray-900">
        Shop by Category
      </h2>
      <p className="text-center text-lg font-light text-gray-800">
        Shop our heart-warming products from their category
      </p>
      <div className="my-5 flex gap-3 px-3 max-sm:overflow-x-auto sm:justify-center sm:gap-x-5">
        {["Sports Car", "SUV", "Fire Truck"].map((element, i) => (
          <button
            onClick={selectCategory}
            className="min-w-fit rounded-full border px-5 py-1 outline-none ring-gray-200 ring-offset-2 transition duration-200 hover:bg-gray-200 focus:ring"
            key={i}
          >
            {element}
          </button>
        ))}
      </div>
      <section className="mt-7 border-t pt-5">
        <h3 className="mb-5 border-l-8 border-emerald-500 pl-3 text-xl font-medium text-gray-800">
          {info[1].title}
        </h3>
        <div className="grid justify-center gap-5 sm:grid-cols-[repeat(2,16rem)] md:grid-cols-[repeat(3,16rem)] lg:grid-cols-[repeat(4,16rem)]">
          {info[0].map((obj) => (
            <Cars key={obj._id} info={obj} />
          ))}
        </div>
      </section>
    </section>
  );
};
export default Categories;
