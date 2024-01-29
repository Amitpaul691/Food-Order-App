export const filterData = (searchText, restaruants) => {
  const filterData = restaruants.filter((restaruants) =>
    restaruants?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
};
