import React from "react"

export const Workoutlist = ({ exercisesList, setExerciseList }) => {
  console.log(exercisesList)
  return (
    <div>
      {exercisesList.map((item) => {
        return (
          <div>
            <img src={item.gifUrl} />
          </div>
        )
      })}
    </div>
  )
}
