import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/Authentication';
import { ActiveLink } from './ActiveLink';
import Logo from './Logo';
import Profile from './Profile';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const toggleNav = () => {
    document.querySelector('#main-nav').classList.toggle('max-md:scale-0');
    document.body.classList.toggle('max-md:overflow-hidden');
  };

  const [navHeight, setNavHeight] = useState(69);

  useEffect(() => {
    const height = document.querySelector('header').offsetHeight;
    setNavHeight(height);
  }, []);

  return (
    <header className="sticky top-0 z-50 -mb-1 w-full border-b bg-slate-100 px-4 py-1.5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-gray-900">
        <Logo />
        <nav
          id="main-nav"
          className={`left-0 right-0 flex origin-top-right items-center gap-x-7 gap-y-9 overflow-y-hidden bg-slate-100 transition-all duration-300 max-md:absolute max-md:scale-0 max-md:flex-col max-md:pb-10 max-md:shadow-[0_0_0_100vmax_rgb(241_245_249)] max-md:[clip-path:inset(0_0_-100vmax)]`}
          style={{
            top: `${navHeight - 0.17}px`,
          }}
        >
          <ul className="flex items-center justify-between gap-9 max-md:mt-10 max-md:flex-col max-md:text-xl max-md:font-semibold">
            {[
              ['Home', '/'],
              ['All Toys', '/toys'],
            ].map(([title, path], i) => (
              <li key={i} onClick={toggleNav}>
                <ActiveLink to={path}>{title}</ActiveLink>
              </li>
            ))}
            {user &&
              [
                ['My Toys', '/collection'],
                ['Add a Toy', '/addtoys'],
              ].map(([title, path], i) => (
                <li key={i} onClick={toggleNav}>
                  <ActiveLink to={path}>{title}</ActiveLink>
                </li>
              ))}
          </ul>
          {user ? (
            <>
              <button
                onClick={logOut}
                className="bg rounded-full bg-slate-200/50 bg-gradient-to-br px-5 py-1 font-semibold text-rose-700 outline-none ring-rose-200 ring-offset-2 transition-all duration-300 focus-visible:ring-2 sm:hover:bg-rose-200"
              >
                Log Out
              </button>
              <Profile src={user.reloadUserInfo.photoUrl} />
            </>
          ) : (
            <Link
              to={'/login'}
              onClick={toggleNav}
              className="rounded-full bg-gradient-to-br from-green-600 to-lime-500 px-7 py-1 font-semibold text-white transition-all duration-300 hover:from-green-600 hover:to-lime-400 max-md:px-8 max-md:py-2 max-md:text-xl"
            >
              Login
            </Link>
          )}
        </nav>
        <button
          onClick={toggleNav}
          id="bars"
          className="aspect-square rounded-full bg-slate-200/50 px-2 text-gray-800 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="pointer-events-none aspect-square w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
