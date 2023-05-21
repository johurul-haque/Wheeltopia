import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/Authentication";

const Register = () => {
  useTitle("Register");

  const [error, setError] = useState(null);

  const { auth, createUser, popupLogin } = useContext(AuthContext);

  const register = (e) => {
    e.preventDefault();

    const form = e.target,
      user = form.user.value,
      email = form.email.value,
      password = form.password.value,
      profile = form.profile.value;

    if (password.length < 6) {
      setError(
        <p className="-mt-2 text-left text-sm">
          <span className="text-red-400">*</span> Password must contain 6
          character
        </p>
      );
    } else {
      createUser(email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: user,
            photoURL: profile,
          });
          form.reset();
          setError(null);
        })
        .catch((error) => console.error(error.message));
    }
  };

  return (
    <section className="mx-auto my-16 max-w-xs text-center text-gray-800">
      <h1 className="text-4xl font-bold">Register</h1>
      <p className="mb-5 mt-2">
        Greetings! We kindly request you to enter your details
      </p>
      <form
        onSubmit={register}
        className="grid gap-3 transition-all duration-200"
      >
        <input
          type="text"
          name="user"
          className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
          placeholder="Email address"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
        />
        {error}
        <input
          type="text"
          name="profile"
          className="h-12 rounded border-2 px-4 outline-none transition-all duration-200 focus:border-green-500"
          placeholder="Photo URL"
        />
        <button className="h-12 rounded bg-gradient-to-r from-green-600 to-lime-500 text-lg font-semibold text-white outline-none ring-green-500 ring-offset-2 hover:from-green-600/90 hover:to-lime-500/90 focus:ring">
          Continue
        </button>
      </form>
      <p className="my-3">
        Already have an account?{" "}
        <Link to={"/login"} className="font-medium text-green-600">
          Sign in
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
  );
};
export default Register;
