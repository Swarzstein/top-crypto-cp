const getCurrencies = async () => {
  const request = await fetch('https://api.coincap.io/v2/assets');
  const response = await request.text();
  return response;
};

export default getCurrencies;
