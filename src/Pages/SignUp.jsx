import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createuser, upDateuser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const Confirmpassword = e.target.Confirmpassword.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const male = e.target.male.checked;
    const female = e.target.female.checked;
    const checkbox = e.target.checkbox.checked;

    if (password !== Confirmpassword) {
      Swal.fire({
        title: "error",
        text: `please provid a valid password`,
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    if (password < 6) {
      Swal.fire({
        title: "error",
        text: ` password should be above 6 character`,
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    if (!female && !male) {
      Swal.fire({
        title: "error",
        text: `please select your Gender`,
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    if (!checkbox) {
      Swal.fire({
        title: "error",
        text: `please accept out terms and conditon also privacy and policy`,
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    createuser(email, password)
      .then((result) => {
        console.log(result.user);

        upDateuser({ displayName: name, photoURL: photo })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error.message);
          });

        if (result.user) {
          Swal.fire({
            title: "success",
            text: "user sign up successfully",
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
      <h2 className="text-center pt-6 text-3xl font-bold">
        Sign Up or Register
      </h2>
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
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            name="photo"
            type="photo"
            placeholder="photo url"
            className="input input-bordered"
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex items-center">
            <label className="label">
              <span className="label-text">Male</span>
            </label>
            <input type="radio" name="male" className="radio" />
          </div>

          <div className="flex items-center">
            <label className="label">
              <span className="label-text">Female</span>
            </label>
            <input type="radio" name="female" className="radio" />
          </div>
        </div>

        <div className="form-control">
          <label className="label justify-start gap-4 cursor-pointer">
            <input type="checkbox" name="checkbox" className="checkbox" />
            <span className="label-text">
              accept our terms and condition also privacy and policy
            </span>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <p className="text-center pt-5">
          Already Have an Account?{" "}
          <Link className=" hover:text-rose-600 hover:underline" to="/signin">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
