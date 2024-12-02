import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addcars">Add Cars</NavLink>
      </li>
    </>
  );

  const handelSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 border-b border-b-[#2b3440] px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
       <div className="flex items-center gap-3">
        <img className="w-14 h-14 object-cover rounded-full" src={user && user.photoURL} alt="" />
       <Link to="/" className="btn btn-ghost text-xl">
          {user && user.displayName}
        </Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <Link
              onClick={handelSignOut}
              className="btn bg-orange-400 text-white border-2 hover:text-orange-400 border-orange-400 hover:border-orange-500"
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <Link
              to="/signup"
              className="btn bg-orange-400 text-white border-2 hover:text-orange-400 border-orange-400 hover:border-orange-500"
            >
              <span>
                <FaUser></FaUser>
              </span>
              <span>Sign Up</span>
            </Link>
            <Link to="/signin" className="btn bg-orange-400 text-white border-2 hover:text-orange-400 border-orange-400 hover:border-orange-500">
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
