module.exports = function check(str, bracketsConfig) {
    const arr = bracketsConfig;
    const libArr = arr.reduce((acc, item) => {
        return acc.concat(item);
    });
    const strArr = str.split("");
    const newArr = [];
    let res = true;

    strArr.forEach((el) => {
        const findInLibrary = libArr.find((item) => item === el);
        if (findInLibrary === undefined) {
            res = false;
        }
        for (let n = 0; n < arr.length; n++) {
            if (el === arr[n][0] && el != arr[n][1]) newArr.push(el);

            if (el === arr[n][1] && el != arr[n][0]) {
                const prev = newArr.pop();

                if (prev != arr[n][0] || prev === undefined) {
                    res = false;
                }
            }
            if (el === arr[n][1] && el === arr[n][0]) {
                const prev = newArr.pop();

                if (prev != undefined && prev != el) {
                    newArr.push(prev);
                    newArr.push(el);
                } else if (prev === undefined) newArr.push(el);
            }
        }
    });
    if (newArr.length) return false;
    return res;
};
