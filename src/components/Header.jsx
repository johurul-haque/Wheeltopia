import { Link } from "react-router-dom";
import Logo from "./Logo";
import Profile from "./Profile";

const Header = () => {
  const user = { name: "johurul" };
  return (
    <header className="sticky top-0 w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-gray-900 sm:px-6 lg:px-8">
        <Logo />
        <nav className="flex items-center gap-7">
          <ul className="flex items-center justify-between gap-8">
            {[
              ["Home", "/"],
              ["All Toys", "/alltoys"],
              ["My Toys", "/collection"],
              ["Add a Toy", "/addtoys"],
            ].map(([title, path], i) => {
              return (
                <li key={i} className="">
                  <Link className="" to={path}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {user ? (
            <Profile />
          ) : (
            <Link
              to={"/login"}
              className="rounded-full bg-gradient-to-br from-green-600 to-lime-500 px-6 py-1 font-semibold text-white transition-all duration-300 hover:from-green-600/90 hover:to-lime-400"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
