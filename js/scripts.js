function triangleTracker(){
  var sideOne = parseFloat(document.getElementById("sideOne").value);
  var sideTwo = parseFloat(document.getElementById("sideTwo").value);
  var sideThree = parseFloat(document.getElementById("sideThree").value);
  var sides = [sideOne, sideTwo, sideThree];

  if((sideOne + sideTwo) <= sideThree || (sideOne + sideThree) <= sideTwo || (sideTwo + sideThree) <= sideOne){
    alert("Your shape is not a triangle");
  }
  else if((sideOne === sideTwo) && (sideOne === sideThree) && (sideTwo === sideThree)){
    alert("The sides you gave, " + sides[0] +" " + sides[1] + " " + sides[2] + ", make up an equilateral triangle");
  }
  else if((sideOne === sideThree) && (sideTwo !=sideOne) || (sideOne === sideTwo) && (sideThree != sideOne) || (sideTwo === sideThree) && (side2 != sideOne)){
    alert("The sides you gave, " + sides[0] +" " + sides[1] + " " + sides[2] + ", make up an isoceles triangle");
  }
  else{
    alert("The sides you gave, " + sides[0] +" " + sides[1] + " " + sides[2] + ", make up a scalene triangle");
  }

}
