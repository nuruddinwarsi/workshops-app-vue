const dateFilter = (isoDate, format) => {
  const date = new Date(isoDate);
  if (format === 'local') {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  } else {
    return date.toDateString();
  }
};

export default dateFilter;
