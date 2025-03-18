export const generateStars = (rating: number, maxRating: number = 5) => {
  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    stars.push({ checked: i < Math.round(rating) });
  }
  return stars;
};
