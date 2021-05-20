export const priceHelper = (ammount) => {
  return ammount.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
};
