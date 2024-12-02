import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCars = () => {
  const navigate = useNavigate();

  const handelAddCars = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const price = form.get("price");
    const category = form.get("category");
    const speed = form.get("speed");
    const photo = form.get("photo");

    const newCar = { name, price, category, speed, photo };
    console.log(newCar);

    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "car added successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto my-14 shrink-0 shadow-2xl">
      <h2 className="text-center pt-6 text-3xl font-bold">Add Car</h2>
      <form onSubmit={handelAddCars} className="card-body">
        {/* row 1 */}
        <div className="flex items-center gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Cars Name</span>
            </label>
            <input
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
            name="photo"
            type="photo"
            placeholder="photo"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Cars</button>
        </div>
      </form>
    </div>
  );
};

export default AddCars;
