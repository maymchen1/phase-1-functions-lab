// Code your solution in this file!
 function distanceFromHqInBlocks(start) {
     let destination = 42
     let distance = (destination - start);
     return Math.abs(distance);
 };
 function distanceFromHqInFeet(start) {
     let destination = 42*264
     let distance = (destination - [start*264]);
     return Math.abs(distance);
     distanceFromHqInBlocks(someValue);
 };
function distanceTravelledInFeet(start, destination) {
let disance =((destination*264) - (start*264));
return Math.abs(disance);
};
function calculatesFarePrice(start, destination) {
let startConversion = (start*264);
let destConversion = (destination*264)
let distance = Math.abs ((destConversion)-(startConversion))
if (distance <= 400) {
    return 0;
} else if (distance > 400, distance <= 2000) {
    return (distance-400)*.02;
} else if (distance > 2000, distance <= 2500) {
    return 25;
} else if (distance > 2500) {
    return 'cannot travel that far';
}}