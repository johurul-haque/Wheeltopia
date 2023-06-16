import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Authentication';

const Login = () => {
  const [error, setError] = useState(null),
    [emailError, setEmailError] = useState(null);

  const { logIn, setUser, popupLogin } = useContext(AuthContext);

  const from = useLocation().state?.from?.pathname || '/',
    navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const email = e.target.email.value,
      password = e.target.password.value;

    if (password.length < 6) {
      setError(
        <p className="-mt-2 text-left text-sm">
          <span className="text-red-400">*</span> Password must contain 6
          character
        </p>
      );
      setEmailError(null);
    } else {
      logIn(email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
          e.target.reset();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error(error.message);
          if (error.message.includes('user-not-found')) {
            setEmailError(
              <p className="-mt-2 text-left text-sm">
                <span className="text-red-400">*</span> {error.message}
              </p>
            );
            setError(null);
          } else {
            setError(
              <p className="-mt-2 text-left text-sm">
                <span className="text-red-400">*</span> {error.message}
              </p>
            );
            setEmailError(null);
          }
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Wheeltopia</title>
      </Helmet>
      <section className="mx-auto my-16 max-w-xs text-center text-gray-800">
        <h1 className="mb-7 text-4xl font-bold">Welcome back</h1>
        <form
          onSubmit={login}
          className="grid gap-3 transition-all duration-200"
        >
          <input
            type="email"
            name="email"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            placeholder="Email address"
            required
          />
          {emailError}
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
            required
          />
          {error}
          <button className="h-12 rounded bg-gradient-to-r from-green-600 to-lime-500 text-lg font-semibold text-white outline-none ring-green-500 ring-offset-2 focus:ring">
            Continue
          </button>
        </form>
        <p className="my-3">
          Don&apos;t have an account?{' '}
          <Link to={'/register'} className="font-medium text-green-600">
            Sign up
          </Link>
        </p>
        <div className="mb-4 flex items-center gap-5 text-sm text-gray-500">
          <hr className="basis-1/2 rounded-full" />
          OR
          <hr className="basis-1/2 rounded-full" />
        </div>
        <button
          onClick={popupLogin}
          className="flex h-12 w-full items-center gap-3 rounded border px-4 text-base font-medium text-gray-600 outline-none ring-green-500 ring-offset-2 transition-all duration-200 hover:bg-gray-200 focus:ring"
        >
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
    </>
  );
};
export default Login;
