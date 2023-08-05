// eslint-disable-next-line react/prop-types
const Cards = ({ data: { name, picture_url } }) => {
  return (
    <article className="mx-3 rounded-lg bg-white px-5 py-3 text-gray-800 shadow">
      <img
        src={picture_url}
        alt={name}
        className="aspect-[4/5] w-44 object-contain"
      />
      <h3 className="border-t pt-3">{name}</h3>
    </article>
  );
};
export default Cards;
