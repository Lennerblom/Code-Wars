function format_words(words) {
  let andPos = (words.length -1);
  let commaRmv = (words.length -2);
  words.splice(andPos,0,' and ');
  return words.join(', ').replace(words[commaRmv], 'samuri').replace(/and ,/,'and ');
}
format_words(['ninja', 'samuri', 'ronin']);

//this is what I get in Repl.it:

//   'ninja, samuri,  and  ronin'
//  haven't figured out how to get rid of the comma before the 'and'