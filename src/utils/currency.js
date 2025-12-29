export const usdToInr = (usd) => {
  const RATE = 83; // current approx USD → INR
  return (usd * RATE).toFixed(2);
};
