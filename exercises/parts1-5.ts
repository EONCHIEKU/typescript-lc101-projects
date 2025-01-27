// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let spaceCraftName: string = "Determination";
let speedMPH: number = 17500;
let kilometersToMars: number =225000000;
let milesPerKilometersToMoon: number= 384400;
let milesPerKilometer: number= 0.621;

// Part 2: Print Days to Mars
let milesToMars:number=kilometersToMars*milesPerKilometer;
let hoursToMars: number= milesToMars/speedMPH;
let daysToMars: number= hoursToMars/24;

// Code an output statement here (use a template literal):
console.log(`It will take ${spaceCraftName} ${daysToMars} days to get to Mars`);


// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway: number): number{
    let milesAway: number = kilometersAway *milesPerKilometer;
    let hoursToLocation: number = milesAway/speedMPH;
    let daysAway: number = hoursToLocation/24;
    return daysAway
}


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(`It will take ${spaceCraftName} ${getDaysToLocation(kilometersToMars)} days to get to Mars`);
console.log(`It will take ${spaceCraftName} ${getDaysToLocation(kilometersToMoon)} days to get to Moon`);


// Part 4: Create a Spacecraft Class




// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
