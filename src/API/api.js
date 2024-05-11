var seedrandom = require('seedrandom');

export const fetchAPI = function (date) {
    const result = ["17:00"];
    const random = seedrandom(date);

    var num;
    for (let i = 18; i <= 22; i++) {
        num = random();
        if (num < 0.5) {
            result.push(i + ":00");
        }
        num = random();
        if (i===22) {
            break;
        }
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

export const submitAPI = function(formData) {
    let success = Math.random() < 1.1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
};