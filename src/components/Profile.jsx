/* eslint-disable react/prop-types */
const Profile = ({ src }) => {
  return (
    <img
      src={src}
      alt={src?.split(".")[0].toLowerCase()}
      width={40}
      height={40}
      className="aspect-square w-14 rounded-full object-cover ring md:w-9"
    />
  );
};
export default Profile;
