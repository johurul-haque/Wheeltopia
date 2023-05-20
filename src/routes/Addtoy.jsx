import toast, { Toaster } from "react-hot-toast";
import useTitle from "../hooks/useTitle";

const Addtoy = () => {
  useTitle("Add Toy");

  const addToy = (e) => {
    e.preventDefault();
    const form = e.target,
      name = form.toy.value,
      category = form.category.value,
      photo = form.photo.value,
      price = form.price.value,
      user = form.user.value,
      email = form.email.value,
      rating = form.rating.value,
      quantity = form.quantity.value,
      desc = form.desc.value;

    const toy = {
      name,
      category,
      picture_url: photo,
      price,
      seller_name: user,
      seller_email: email,
      rating,
      available_quantity: quantity,
      detail_description: desc,
    };

    fetch(`${import.meta.env.VITE_SERVER}/addtoy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        data.acknowledged &&
          toast.success("Toy was added to our Database", {
            icon: "🎉",
          });
      });

    form.reset();
  };
  return (
    <>
      <Toaster />
      <section className="mx-auto my-14 max-w-md flex-1 px-4 text-center text-gray-800 sm:px-6 lg:px-8">
        <h1 className="mb-7 text-4xl font-bold">Add your Toy</h1>
        <form
          onSubmit={addToy}
          className="grid gap-3 transition-all duration-200"
        >
          <input
            type="text"
            name="toy"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Toy name"
            required
          />
          <input
            type="text"
            name="category"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Sub-category"
            required
          />
          <input
            type="text"
            name="photo"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Photo Url of the Toy"
            required
          />
          <input
            type="text"
            name="price"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="৳ Price"
            required
          />
          <h2 className="mb-1 mt-4 border-l-4 border-emerald-500 pl-3 text-left text-xl font-medium text-gray-800">
            Personal info
          </h2>
          <input
            type="text"
            name="user"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Your email"
            required
          />
          <h2 className="mb-1 mt-4 border-l-4 border-emerald-500 pl-3 text-left text-xl font-medium text-gray-800">
            Additional info
          </h2>
          <input
            type="text"
            name="rating"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Rate out of 5"
            required
          />
          <input
            type="text"
            name="quantity"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Available quantity"
            required
          />
          <textarea
            name="desc"
            className="resize-none rounded border-2 px-4 py-3 outline-none transition-all duration-200 focus:resize-y focus:border-green-500"
            placeholder="Detail descritption"
            rows="4"
          ></textarea>

          <button className="h-12 rounded bg-gradient-to-r from-green-600 to-lime-500 text-lg font-semibold text-white outline-none ring-green-500 ring-offset-2 focus:ring">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
export default Addtoy;
