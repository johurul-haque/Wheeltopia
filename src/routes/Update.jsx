import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Update = () => {
  useTitle("Update Toy");

  const [data] = useLoaderData();

  const update = (e) => {
    e.preventDefault();

    const form = e.target,
      price = form.price.value,
      quantity = form.quantity.value;
    let desc = form.desc.value;

    const toy = {
      price,
      available_quantity: quantity,
      detail_description: desc,
    };

    fetch(`${import.meta.env.VITE_SERVER}/collection/edit/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        data.acknowledged && toast.success("Updated successfully");
        form.reset();
        form.price.removeAttribute("value");
        form.quantity.removeAttribute("value");
        form.desc.value = "";
      });
  };

  return (
    <>
      <Toaster />
      <section className="mx-auto my-14 max-w-md flex-1 px-4 text-center text-gray-800 sm:px-6 lg:px-8">
        <h1 className="mb-7 text-4xl font-bold">Update your Toy</h1>
        <form
          onSubmit={update}
          className="grid gap-3 transition-all duration-200"
        >
          <input
            type="text"
            name="price"
            defaultValue={data.price}
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="$ Price"
            required
          />
          <input
            type="text"
            name="quantity"
            defaultValue={data.available_quantity}
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Available quantity"
            required
          />
          <textarea
            name="desc"
            className="resize-none rounded border-2 px-4 py-3 outline-none transition-all duration-200 focus:resize-y focus:border-green-500"
            placeholder="Detail descritption"
            rows="4"
          >
            {data.detail_description}
          </textarea>

          <button className="h-12 rounded bg-gradient-to-r from-green-600 to-lime-500 text-lg font-semibold text-white outline-none ring-green-500 ring-offset-2 focus:ring">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
export default Update;
