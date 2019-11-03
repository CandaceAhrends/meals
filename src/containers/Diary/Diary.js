import React from "react";
import LogTable from "../../components/UI/LogTable";
import useStateValue from "../../hooks/useStateValue";

import "./diary.scss";
const buildTable = meals => {
  return{
    columns: [{ title: "Meal", field: "meal" }],
    data: meals.map(meal =>( {
      meal: meal
    }))
  };
};
const Diary = () => {
  const meals = useStateValue("meals");
  console.log("meals", meals);
  return (
    <div className="diary-table">
      <LogTable table={buildTable(meals)} />
    </div>
  );
};

export default Diary;
