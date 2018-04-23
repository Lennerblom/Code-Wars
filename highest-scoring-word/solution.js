function high(x){
  //split the string
  //assign values to letters
  //itterate through the length of each word and assign each letter the value
  //sum up the letters in each word with .reduce()
  //look at charcodeat something with 96
  let singleWord = x.split(' ');
  console.log(singleWord);
  const alpha = ['a','b','c','d'];
  //const alpha = [/[a-z]/];
  let maxValue = 0;
  console.log(alpha.length);
  let values = alpha.map(x => x + 1);
  console.log(values);

  // // let splAlpha = alpha.split("");
  // // console.log(splAlpha);
  //   let num = () => {
  //   for(let i = 0; i < alpha.length; i++);
  //   num + 1;
  // //   console.log(num);
  // };
}
high('Hello, this is a test');