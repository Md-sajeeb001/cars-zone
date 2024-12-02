import { Outlet } from "react-router-dom";
// import Navber from "../Components/Navber";
// import Footer from "../Components/Footer";

const MainLayOut = () => {
  return (
    <div>
      {/* <Navber></Navber> */}
      <div className="px-8 lg:px-0">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayOut;
