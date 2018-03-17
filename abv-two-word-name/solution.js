function abbrevName(name){
  let firstInitial = name.substring(0,1);
  let spacePos = name.indexOf(' ');
  spacePos++;
  let lastInitial = name.substr(spacePos, 1);
  return(`${firstInitial.toUpperCase()}.${lastInitial.toUpperCase()}`);

}
