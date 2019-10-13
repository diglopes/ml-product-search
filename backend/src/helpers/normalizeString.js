module.exports = sentence => {
  const normalizedString = sentence
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return normalizedString;
};
