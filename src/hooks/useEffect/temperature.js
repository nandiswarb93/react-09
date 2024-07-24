function findTemp(n) {
  let res = "";
  if (n < 0) {
    res = `temperature is in negative ${n}`;
  } else if (n > 0 && n < 10) {
    res = "temperature is tooo cool and and ";
  }
}
export default findTemp;
