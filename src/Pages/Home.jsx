// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import CarCard from "../Components/CarCard";

const Home = () => {
  // const carsData = useLoaderData();
  // const [cars, setCars] = useState(carsData);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-14 sm:px-0">
      {/* {cars.map((car) => (
        <CarCard
          key={car._id}
          car={car}
          cars={cars}
          setCars={setCars}
        ></CarCard>
      ))} */}
      <h1>hello </h1>
    </div>
  );
};

export default Home;
