const exerciseoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const FetchData = async (url, exerciseoptions) => {
  const response = await fetch(url);
  return response.json();
};
export default FetchData;
