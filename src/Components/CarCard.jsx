/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CarCard = ({ car, setCars, cars }) => {
  const { name, price, category, photo, _id } = car;

  const handelRemove = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cars/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const newCar = cars.filter((car) => car._id !== _id);
              setCars(newCar);
            }
          });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="w-full h-full">
        <img src={photo} alt="car" className="w-full h-full rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handelRemove(_id)}
            className="btn bg-[#2b3440] text-white hover:text-[#2b3440]"
          >
            remove
          </button>
          <button>
            <Link
              to={`/updatedcars/${_id}`}
              className="btn bg-[#2b3440] text-white hover:text-[#2b3440]"
            >
              edit
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
