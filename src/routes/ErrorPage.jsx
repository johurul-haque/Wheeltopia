import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 place-items-center content-center gap-4 px-4 sm:px-6">
      {/* <div> */}
      <img src="/404.svg" alt="Error Page" />
      <Link
        to={"/"}
        className="flex max-w-fit gap-2 rounded-full border px-4 py-2 outline-none ring-green-600/70 ring-offset-1 transition-all hover:bg-gray-200 focus:ring"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 stroke-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
          <span className="sr-only">Go back</span>
        </svg>
        Back to Home
      </Link>
      {/* </div> */}
    </main>
  );
};
export default ErrorPage;
