const formatNumber = (num: number): number => {
  return Number.isInteger(num) ? num : Number(num.toFixed(2));
};

export default formatNumber