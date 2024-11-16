import axios from 'axios';

export const fetchPnrStatus = async (pnrNumber) => {
  const options = {
    method: 'GET',
    url: `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnrNumber}`,
    headers: {
      'x-rapidapi-key': 'aa48c6b9c3msh9d07401ff7f5a5bp1b9334jsnb82f12ec9f22',
      'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching PNR data:', error);
    return null;
  }
};
