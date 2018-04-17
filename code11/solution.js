function cubeOdd(arr) {
  let cube = arr.map(x => Math.pow(x,3));
  if (NaN) () => 'undefined';
  return cube.filter(odd => (odd % 2) === 1).reduce((acc,cur) => acc + cur);
}
cubeOdd([2,3,4,5]);

//returns [152]

function cubeOdd(arr) {
  let cube = arr.map(x => Math.pow(x,3));
  if(isNaN(arr)){ 
    return 'undefined';
  } else {
    return cube.filter(odd => (odd % 2) === 1).reduce((acc,cur) => acc + cur);
  }
  
}
cubeOdd([2,3,4,5]);