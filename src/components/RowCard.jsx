/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";

const UpdateCard = ({ data, state, changeState }) => {
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <article className="flex items-center gap-4 rounded-md border p-4">
      <img
        src={data.picture_url}
        alt={data.name}
        width={144}
        height={144}
        className="aspect-square min-w-[9rem] rounded object-contain"
      />
      <section>
        <h2 className="font-fredoka text-2xl text-gray-800 lg:text-xl">
          {data.name}
        </h2>
        <p className="mt-1 line-clamp-2 w-11/12 text-sm leading-5 text-gray-600">
          {data.detail_description}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Link
            to={`/collection/edit/${data._id}`}
            className="inline-block rounded bg-gray-300/70 p-2 outline-none ring-offset-2 transition-all duration-200 hover:bg-gray-300 focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="aspect-square w-4 stroke-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
              <span className="sr-only">Edit Toy</span>
            </svg>
          </Link>

          <button
            onClick={() => {
              openModal();
            }}
            className="rounded bg-red-600/30 p-2 outline-none ring-red-500 ring-offset-2 transition-all duration-200 hover:bg-red-600 hover:text-white focus-visible:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="aspect-square w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
              <span>Delete Toy</span>
            </svg>
          </button>
          {isOpen && (
            <Delete
              obj={data}
              changeState={changeState}
              state={state}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          )}
          <Link
            to={`/toys/${data._id}`}
            className="font-fredoka rounded-full bg-gray-800 px-6 py-[.4rem] text-sm uppercase text-white outline-none ring-gray-600/80 ring-offset-2 transition-all duration-200 hover:bg-gray-800/95 focus:ring"
          >
            View
          </Link>
        </div>
      </section>
    </article>
  );
};

const ShowCard = ({ data }) => {
  const price = (data.price + "").split(".");
  return (
    <article className="relative flex items-center gap-4 rounded-md border p-4">
      <img
        src={data.picture_url}
        alt={data.name}
        width={144}
        height={144}
        className="aspect-square min-w-[9rem] rounded object-contain"
      />
      <span className="absolute left-4 top-4 max-w-fit rounded-full border bg-white px-3 py-1 text-xs shadow-sm">
        <span className="sr-only">Category</span>
        {data.category}
      </span>
      <section>
        <h2 className="font-fredoka text-xl text-gray-800 lg:text-xl">
          {data.name}
        </h2>
        <span className="mb-1 mt-1 block text-xl font-semibold text-gray-800">
          <span className="mr-1 text-slate-500">$</span>
          {price[0]}
          <sup className="ml-[.17rem] text-xs font-semibold text-gray-600">
            {price[1] && price[1]}
          </sup>
        </span>
        <div className="flex items-center gap-4">
          <Link
            to={`/toys/${data._id}`}
            className="font-fredoka rounded-full bg-gray-800 px-6 py-[.48rem] text-sm uppercase text-white outline-none ring-gray-600/80 ring-offset-2 transition-all duration-200 hover:bg-gray-800/95 focus:ring"
          >
            View
          </Link>
          <p className="text-sm text-gray-700">
            Quantity{" "}
            <span className="block text-base font-semibold text-gray-800">
              {data.available_quantity}
            </span>
          </p>
          <p className="text-sm text-gray-700">
            Seller{" "}
            <span className="block text-base font-semibold text-gray-800">
              {data.seller_name}
            </span>
          </p>
        </div>
      </section>
    </article>
  );
};
export { UpdateCard, ShowCard };
