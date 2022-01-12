Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.



function ArrayChallenge(strArr) { 

  // code goes here  

  let firstStr = strArr[0].split(', ');
  let secondStr = strArr[1].split(', ');
  let resStr = firstStr.filter(firstElem => secondStr.find(secondElem => Number(secondElem) == Number(firstElem) ));
  
  console.log(resStr);

  return resStr; 

}
   
// keep this function call here 
console.log(ArrayChallenge(readline()));


