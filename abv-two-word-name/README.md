#Abbreviate a Two Word Name


Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

## function abbrevName(name){
    let firstInitial = name.substring(0,1);
    let spacePos = name.indexOf(' ');
    spacePos++
    let lastInitial = name.substr(spacePos, 1);
    
    return(`${firstInitial.toUpperCase()}.${lastInitial.toUpperCase()}`);

}

