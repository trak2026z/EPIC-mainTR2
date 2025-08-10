export const parseDate = (value) => {
  const dateObj = new Date(value);
  return {
    fullDate: value,
    day: String(dateObj.getDate()).padStart(2, '0'),
    month: String(dateObj.getMonth() + 1).padStart(2, '0'),
    year: dateObj.getFullYear(),
  };
};