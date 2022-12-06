import React from "react";
import SearchExercises from "../components/searchExercises";
import Banner from "../components/banner";
import { useState } from "react";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <div>
      <Banner />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </div>
  );
};

export default Home;
