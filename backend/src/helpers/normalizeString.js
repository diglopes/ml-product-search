module.exports = sentence => {
  const normalizedString = string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return normalizedString;
};
