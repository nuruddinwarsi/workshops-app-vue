import axios from 'axios';

// function getWorkshops() {
//   return axios
//     .get(`https://workshops-server.herokuapp.com/workshops/`)
//     .then((response) => response.data);
// }

const getWorkshops = async () => {
  const response = await axios.get(
    `https://workshops-server.herokuapp.com/workshops/`
  );
  return response.data;
};

export { getWorkshops };
