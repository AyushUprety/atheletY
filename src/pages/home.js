import React from "react";
import SearchExercises from "../components/searchExercises";
import Banner from "../components/banner";
import { useState } from "react";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercisesList, setExerciseList] = useState([]); // This 2 states are written in home page because changes accross them will be reflected on the entire application
  return (
    <div>
      <Banner />
      <SearchExercises
        setExerciseList={setExerciseList}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </div>
  );
};

export default Home;
