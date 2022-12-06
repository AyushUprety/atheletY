import { responsiveFontSizes } from "@mui/material";

export const exerciseoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "be0b7c3582mshafb0cdeda175d83p1f8d6ejsn14223d0757f6",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const exerciseData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
