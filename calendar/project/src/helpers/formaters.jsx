export const dateFormarter = (date) => {
  const formatedDate = new Intl.DateTimeFormat("it-IT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  return formatedDate;
};
