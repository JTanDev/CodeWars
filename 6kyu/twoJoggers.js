// Two Joggers
// Description
// Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

// Task
// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

// The function takes two arguments:

// The length of Bob's lap (larger than 0)
// The length of Charles' lap (larger than 0)

var nbrOfLaps = function (x, y) {
  let xLap = x;
  let yLap = y;
  do {
    if (xLap > yLap) {
      yLap += y;
    }
    if (yLap > xLap) {
      xLap += x;
    }
  } while (xLap !== yLap);
  return [(xLap /= x), (yLap /= y)];
};
