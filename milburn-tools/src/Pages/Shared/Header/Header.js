import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () =>{
    signOut(auth);
}
  return (
    <header className="text-white body-font bg-white shadow dark:bg-gray-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl uppercase">Milburn Tools</span>
        </h1>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            href="#"
            class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
          >
            Home
          </Link>
          <Link
            to="/tools"
            href="#"
            class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
          >
            Tools
          </Link>
          <Link
            to="/about"
            href="#"
            class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
          >
            About
          </Link>
          <Link
            to="/blogs"
            href="#"
            class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
          >
            Blogs
          </Link>
          <Link
            to="/portfolio"
            href="#"
            class="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2"
          >
            My Portfolio
          </Link>
        </nav>
        {
          user?
          <button onClick={handleLogout} className=" inline-flex items-center btn btn-secondary border-0 py-1 px-3 focus:outline-none hover:btn-accent rounded text-base mt-4 md:mt-0">
          Logout
        </button>
        :
        <Link to='/login'>
        <button className=" inline-flex items-center btn btn-secondary border-0 py-1 px-3 focus:outline-none hover:btn-accent rounded text-base mt-4 md:mt-0">
          Login
        </button>
        </Link>
        }
      </div>
    </header>
  );
};

export default Header;
