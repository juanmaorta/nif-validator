export const format = (idNumber) => {
  return idNumber.toUpperCase()
    .replace(/-/g, '')
    .replace(/\./g, '')
    .replace(/ /g, '')
    .replace(/,/g, '')
}
