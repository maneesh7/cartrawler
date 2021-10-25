import React from "react";
import "./CarList.scss";
import { useGlobalContext } from "../context";
import CarCard from "../components/cardCard/CarCard";
import Loader from "../components/Loader";

const CarList = () => {
  const { carList, loading } = useGlobalContext();

  return (
    <div className="carList">
      {carList.map((item, index) => {
        return <CarCard key={index} {...item}></CarCard>;
      })}
    </div>
  );
};

export default CarList;
