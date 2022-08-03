import React from "react";
import Table from "../Table/Table";

const ListOfExercises = () => {
    return <Table columns={[{ id: "name", label: "Название" }]} data={[]} />;
};

export default ListOfExercises;
