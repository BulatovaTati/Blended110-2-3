const parseCategory = (caterogy) => {
  const categoryList = ['books', 'electronics', 'clothing', 'other'];

  if (categoryList.includes(caterogy.toLowerCase())) return caterogy;

  return;
};

const parsePrice = (price) => {
  if (typeof price !== 'string') return;

  const parsedPrice = Number(price);

  if (isNaN(parsedPrice)) return;

  return parsedPrice;
};

export const parsedFilterParams = (query) => {
  const { category, minPrice, maxPrice } = query;

  const parsedCategory = parseCategory(category);
  const parsedMinPrice = parsePrice(minPrice);
  const parsedMaxPrice = parsePrice(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
  };
};
