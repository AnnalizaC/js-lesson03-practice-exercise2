var hoursOfSleep = Number(
  prompt("How many hours of sleep did you get last night? (0-12)")
);

if (hoursOfSleep > 12) {
  console.log("Come on now, be truthful and try again.");
} else if (hoursOfSleep >= 8) {
  console.log("Congrats! You got some hours of sleep!");
} else if (hoursOfSleep > 5) {
  console.log("You did ok, but you should consider getting more sleep.");
} else {
  console.log("You need to get some more sleep.");
}
