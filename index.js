//Create a function that accepts an array of dwarf names, and returns a string with numbered dwarves

function dwarfRollCall(dwarves) {
  var list = ""
  for(var i = 0; i < dwarves.length; i++){
    list += `${i + 1}. ${dwarves[i]} `
  }
  return list
}

//Create a function that accepts an array of planeteer calls, and converts each element of the array to uppercase, returning a new array

function summonCaptainPlanet(planeteerCalls){
  var list = [];
  for (var i=0; i<planeteerCalls.length; i++) {
     list.push(planeteerCalls[i].toUpperCase() + '!')
   
  }
  return list;
}

/*  var array = [];
  for(var i = 0; i < planeteerCalls.length; i++){
    array += `${planeteerCalls[i].toUpperCase()}!`;
  }
  return array*/

//Create a function that accepts an array of calls and returns false or true depending on if the calls are longer than four characters

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length <= 4){
      return false
    }
    return true
  }
}

/*if(words <= 4){
    return false
  }else{
    return true
  }
  */


//Create a function that accepts an array of strings and returns the first string that is a type of cheese. If the list does not include cheese, return "no cheese"

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++){
    if(foods[i] === "cheddar"){
      return `${foods[i]}`
    }
  }
  return "no cheese!"
}
