const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

var seedrandom = require('seedrandom');

export const fetchAPI = function (date) {
    const result = ["17:00"];
    const random = seedrandom(date);

    console.log(date.getDate())

    var num;
    for (let i = 18; i <= 23; i++) {
        num = random();
        if (num < 0.5) {
            result.push(i + ":00");
        }
        num = random();
        if (num < 0.5) {
            result.push(i + ":30");
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result);
        }, 1000)
    });
};