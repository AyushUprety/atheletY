import React from "react"

const Detail = ({ icon }) => {
  return <div>{icon ? <img src={icon} /> : ""}</div>
}

export default Detail
