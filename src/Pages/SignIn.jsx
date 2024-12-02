import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const Confirmpassword = e.target.Confirmpassword.value;
    const password = e.target.password.value;

    if (name.length < 2) {
      Swal.fire({
        title: "error",
        text: `name must be above 2 character`,
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    if (password !== Confirmpassword) {
      Swal.fire({
        title: "error",
        text: `please provid a valid password`,
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "success",
            text: "user sign in successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "error",
            text: `${error.message}`,
            icon: "error",
            confirmButtonText: "Cool",
          });
          return;
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl mx-auto my-14 shrink-0 shadow-2xl">
      <h2 className="text-center pt-6 text-3xl font-bold">Sign in</h2>
      <form onSubmit={handelCreateUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            name="Confirmpassword"
            type="password"
            placeholder="Confirm password"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label justify-start gap-4 cursor-pointer">
            <span className="label-text hover:text-rose-600 hover:underline">
              fotget password
            </span>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
        <p className="text-center pt-5">
          Dont have an Account?{" "}
          <Link className=" hover:text-rose-600 hover:underline" to="/signup">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
