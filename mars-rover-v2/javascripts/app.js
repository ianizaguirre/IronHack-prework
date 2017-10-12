
// Mars Rover Object
// ======================
var marsRover = {
  direction: "N",
  x: 0,
  y:0,
  travelLog: []
};
// ======================


// Move Right - direction
function moveRight(rover) {

  switch (rover.direction) {

    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
}


 //         moveRight(marsRover);
    //         console.log(marsRover);


// Move Left - direction
function moveLeft(rover) {

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;

    case "E":
      rover.direction = "N";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "W":
      rover.direction = "S";
      break;
  }
}

   //       moveLeft(marsRover);
      //      console.log(marsRover);



// Move Forward - direction
function moveForward(rover) {

    switch (rover.direction) {

    case "N":
      rover.y++;
      break;

    case "E":
      rover.x++;
      break;

    case "S":
      rover.y--;
      break;

    case "W":
      rover.x--;
      break;
  }
}

    //      moveForward(marsRover);
      //      console.log(marsRover);




//iteration 4 - Commands -&- iteration 5 - Travel Log
                                        
function instructions ( inputDirectionsHere ) {

  var arr = inputDirectionsHere.split('');
  var rover = marsRover;
  
    arr.forEach( function ( inputDirectionsHere ) {

      if ( inputDirectionsHere === 'f' ) {
          moveForward(rover);
           rover.travelLog.push({x:rover.x, y:rover.y});

      } else if ( inputDirectionsHere === 'l' ) {
          moveLeft(rover);
            rover.travelLog.push({x:rover.x, y:rover.y});

      } else if ( inputDirectionsHere === 'r' ) {
          moveRight(rover);
            rover.travelLog.push({x:rover.x, y:rover.y});
      }

    });
  
  return rover;
}

    //     instructions('fllfrflfrrrllf');
      //      console.log(marsRover);






                                                              







