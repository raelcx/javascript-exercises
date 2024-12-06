const findTheOldest = function(arr) {
    return arr.slice().sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
