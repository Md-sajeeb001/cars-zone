/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { FaEdit } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";
import Swal from "sweetalert2";

const UserTabel = ({ user, index, setUserData, userData }) => {
  const { _id, name, email, createAt } = user;

  const handelRemove = (id) => {
    console.log("deleted user is ", id);

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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "success",
                text: "user deleted successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
            const newUsers = userData.filter((user) => user._id !== id);
            setUserData(newUsers);
          });
      }
    });
  };

  return (
    <>
      {/* row 1 */}
      <tr className="hover">
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{createAt}</td>
        <td
          onClick={() => handelRemove(_id)}
          className="btn mr-3 mb-3 bg-black text-lg text-red-500"
        >
          <MdRemoveCircle></MdRemoveCircle>
        </td>
        <td className="btn mb-3 text-lg ">
          <FaEdit></FaEdit>
        </td>
      </tr>
    </>
  );
};

export default UserTabel;
