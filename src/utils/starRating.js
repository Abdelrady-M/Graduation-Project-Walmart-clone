const starRating = (rating) => {
  const arr = [];
  for (let i = 1; i <= 5; i++) {
    i <= rating ? arr.push(1) : arr.push(0);
  }
  return arr;
};

export default starRating;
