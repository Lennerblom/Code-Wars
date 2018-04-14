// Kata 1 (map)
function double(array) {
  const dblArr = array.map(elem => elem * 2);
  return dblArr;
}
double([3,4,5]);

//Kata 2 (filter)
function filter_list(l) {
  let noString = l.filter((num) => { return typeof num === 'number';});
  return noString;
}

// Kata 3 
function find_average(array) {
  return array.reduce((acc, cur) => acc + cur,0)/array.length;
}
find_average([2,8,6,2]); //returns 4.5