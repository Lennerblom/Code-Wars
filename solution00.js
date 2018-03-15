function checkExam(array1, array2) {
  var score = 0;
  for(var i = 0; i < array1.length; i++){
    if (array2[i] === array1[i]) {
      score +=4;
    } if (array2[i] === '') {
      score +=0;
    } else if(array2[i] !== array1[i]) {
      score --;}
  }
  if(score < 0) {
    score = 0;
  }
  return(score);
}
checkExam(['a','a','c','b'], ['','a','b','b']);
