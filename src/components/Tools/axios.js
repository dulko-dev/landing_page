import axios from "axios";

const FLAGS_URL = "https://restcountries.eu/rest/v2/all";

export const getFlag = async () => {
  return await axios.get(FLAGS_URL);
};

