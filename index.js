//Create a function that accepts an array of dwarf names, and returns a string with numbered dwarves

function dwarfRollCall(dwarves) {
  
  //declaring an empty string, to be returned with a new string value
  var list = ""                   
  
  //for loop to utilize the values in the array only
  for(var i = 0; i < dwarves.length; i++){ 
    
    //add to the empty string with +=
    
    //interpolating "i + 1" to make the 0th value of the array equal 1 and so on, formatting it like a list with a period
    
    //interpolating the values of the array from 0 to the length of the array (dwarves.length)
    list += `${i + 1}. ${dwarves[i]} `
  }
  
  //return a string
  return list
}

//Create a function that accepts an array of planeteer calls. This function converts each element of the array to uppercase along with an exclamation point, returning a new array

function summonCaptainPlanet(planeteerCalls){
  
  //declaring an empty array, to be returned with new array values
  var list = [];
  
  //for loop to utilize the values in the original array only
  for (var i = 0; i < planeteerCalls.length; i++) {
     
     //convert the array to uppercase followed by an exclamation point
     
     //push() to add and make a new array
     
     //toUpperCase() to convert to uppercase
     list.push(planeteerCalls[i].toUpperCase() + '!')
   
  }
  
  //return the newly converted array
  return list;
}


//Code that I tried but didn't work.  
/*  var array = [];
  for(var i = 0; i < planeteerCalls.length; i++){
    array += `${planeteerCalls[i].toUpperCase()}!`;
  }
  return array*/


//Create a function that accepts an array of calls and returns false or true depending on if the calls are longer than four characters

function longPlaneteerCalls(words) {
  
  //for loop to utilize the values in the array only
  for(var i = 0; i < words.length; i++){
    
    //if statement that conditions the length of the values in the array
    if(words[i].length > 4){
      
      //if the word is longer than four characters, return true
      return true
    }
    return false   // if the word is not longer than four characters, return false
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
  
  //for loop to utilize the values in the array only
  for(var i = 0; i < foods.length; i++){
    
    //if statement in order to condition which food is considered a cheese
    
    //in this case the only type of cheese that is given in the array is "cheddar"
    if(foods[i] === "cheddar"){
      
      //interpolate the value of the array that is a cheese, returning as a string
      return `${foods[i]}`
    }
  }
  
  //otherwise, when the loop ends return "no cheese!"
  return "no cheese!"
}
