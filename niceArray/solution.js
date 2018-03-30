function isNice(arr){
  return arr.length > 0 && arr.every(num => arr.includes(num +1) || arr.includes(num -1));
}


//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] === arr[i++] || arr[i] === arr[i--]) {
//         return(true);
//     }
//     if('') {
//       return(false);
//      } else {
//         return(false);
//     }
//   }
// }