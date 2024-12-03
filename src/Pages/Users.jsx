import { useLoaderData } from "react-router-dom";
import UserTabel from "../Components/UserTabel";
import { useState } from "react";

const Users = () => {
  const lodedUserData = useLoaderData();

  const [userData, setUserData] = useState(lodedUserData);
  console.log(userData);

  return (
    <div className=" max-w-3xl mx-auto py-14 overflow-x-auto">
      <h2 className="text-center pt-6 text-3xl font-bold pb-6">
        User Sechudule
      </h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Email</th>
            <th>CreateAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user, index) => (
            <UserTabel
              key={user._id}
              userData={userData}
              setUserData={setUserData}
              index={index}
              user={user}
            ></UserTabel>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
