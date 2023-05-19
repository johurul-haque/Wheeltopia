import { Link } from "react-router-dom";

const Login = () => {
  // const {popupLogin} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, "what");
    console.log(e.target.password.value);
  };

  return (
    <section className="mx-auto my-7 max-w-xs text-center text-gray-800">
      <h1 className="mb-7 text-4xl font-bold">Welcome back</h1>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input
          type="email"
          name="email"
          className="h-12 rounded border px-4 outline-none ring-green-500 transition-all duration-200 focus:ring"
          placeholder="Email address"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="h-12 rounded border px-4 outline-none ring-green-500 transition-all duration-200 focus:ring"
        />
        <button className="mt-2 h-12 rounded bg-gradient-to-r from-green-600 to-lime-500 text-lg font-semibold text-white outline-none ring-green-500 ring-offset-2 focus:ring">
          Continue
        </button>
      </form>
      <p className="my-3">
        Don&apos;t have an account?{" "}
        <Link to={"/register"} className="font-semibold text-green-600">
          Sign up
        </Link>
      </p>
      <div className="mb-4 flex items-center gap-5 text-sm text-gray-500">
        <hr className="basis-1/2 rounded-full" />
        OR
        <hr className="basis-1/2 rounded-full" />
      </div>
      <button className="flex h-12 w-full items-center gap-3 rounded border px-4 text-lg font-medium text-gray-600 outline-none ring-green-500 ring-offset-2 transition-all duration-200 hover:bg-gray-200 focus:ring">
        <img
          src="/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="aspect-square w-5 rounded-full object-contain"
        />
        Continue with Google
      </button>
    </section>
  );
};
export default Login;
