const findTheOldest = function (people) {
    let currentTime = new Date();
    let oldest = people.reduce((prev, next) => {

        const prevAge = prev.yearOfDeath ? prev.yearOfDeath - prev.yearOfBirth : currentTime.getFullYear() - prev.yearOfBirth;
        const nextAge = next.yearOfDeath ? next.yearOfDeath - next.yearOfBirth : currentTime.getFullYear() - next.yearOfBirth;

        return prevAge > nextAge ? prev : next;
      
    }, {});

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
