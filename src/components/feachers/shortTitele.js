export const ShortTitel = (name, num = 10) => {
  let newName = name.slice(0, num);
  let capitalizedText = newName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `${capitalizedText}...`;
};

export const setPrice = (price) => {
  return `$ ${price.toFixed(2)}`;
};

export const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
};
