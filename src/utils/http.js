import axios from 'axios';

export const postData = async (url, data) => {
  try {
    const response = await axios.post(url + apiKey, data);
    console.log(response.data);
    return true;
  } catch (error) {
    console.warn(error);
  }
};
