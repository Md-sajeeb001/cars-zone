import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const SignUp = () => {
  const { createuser } = useContext(AuthContext);

  const handelCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const Confirmemail = e.target.Confirmemail.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const checkbox = e.target.checkbox.checked;
    const male = e.target.male.checked;
    const female = e.target.female.checked;
    console.log(
      checkbox,
      male,
      female,
      name,
      email,
      Confirmemail,
      password,
      photo
    );

    const newUser = {
      checkbox,
      male,
      female,
      name,
      email,
      Confirmemail,
      password,
      photo,
    };

    console.log(newUser);

    createuser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
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
            <span className="label-text">Confirm Email</span>
          </label>
          <input
            name="Confirmemail"
            type="text"
            placeholder="Confirm email"
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
      </form>
    </div>
  );
};

export default SignUp;
