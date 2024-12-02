import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpDateCars = () => {
  const navigate = useNavigate();

  const carsData = useLoaderData();
  const { _id, speed, price, photo, name, category } = carsData;

  const handelUpdateCars = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const price = form.get("price");
    const category = form.get("category");
    const speed = form.get("speed");
    const photo = form.get("photo");

    const upDatedCar = { name, price, category, speed, photo };


    fetch(`http://localhost:5000/cars/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upDatedCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "success",
            text: "car upDated successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto my-14 shrink-0 shadow-2xl">
      <h2 className="text-center pt-6 text-3xl font-bold">Update Car</h2>

      <form onSubmit={handelUpdateCars} className="card-body">
        {/* row 1 */}
        <div className="flex items-center gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Cars Name</span>
            </label>
            <input
              defaultValue={name}
              name="name"
              type="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={price}
              name="price"
              type="price"
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="flex items-center gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Categoey</span>
            </label>
            <input
              defaultValue={category}
              name="category"
              type="category"
              placeholder="categoey"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Speed</span>
            </label>
            <input
              defaultValue={speed}
              name="speed"
              type="speed"
              placeholder="speed"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* row 3 */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            defaultValue={photo}
            name="photo"
            type="photo"
            placeholder="photo"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">UpDate Cars</button>
        </div>
      </form>
    </div>
  );
};

export default UpDateCars;
