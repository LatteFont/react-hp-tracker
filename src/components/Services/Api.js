async function getAllPlayers() {
  //Stores the URL of the API endpoint
  const URL = "http://localhost:3000/api/players";
  //Fetches data from the API endpoint
  let data = await fetch(URL);
  //Parses the JSON response
  let dataResponse = await data.json();
  //Returns the parsed data
  return dataResponse;
}

export default getAllPlayers;
