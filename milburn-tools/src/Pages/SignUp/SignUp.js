import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  if (loading) {
    return <Loading></Loading>;
  }
  if (guser) {
    navigate("/");
  }
  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    navigate("/login");
  };
  return (
    <section>
      <Helmet>
        <title>Create Account - Milburn Tools</title>
      </Helmet>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md  mt-20 mb-20">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-black">
            Milburn Tools
          </h2>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            create account
          </p>

          <form onSubmit={handleSignUp}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="name"
                placeholder="Name"
                aria-label="Name"
                name="name"
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                name="email"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
              />
            </div>

            <div className="flex items-center mt-4 justify-center">
              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <p className="text-sm text-gray-600 dark:text-gray-500">
            Already Have an account?{" "}
          </p>

          <span
            onClick={navigateToLogin}
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
          </span>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2 mb-5 p-5">
          <button
            type="button"
            onClick={() => signInWithGoogle()}
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
