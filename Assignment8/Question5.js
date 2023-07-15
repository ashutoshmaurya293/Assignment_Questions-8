let Compress = function(chars) {
    let i = 0;
    let j = 0;
    while (j < chars.length) {
        let count = 1;
        while (j + 1 < chars.length && chars[j] === chars[j + 1]) {
            count++;
            j++;
        }
        chars[i] = chars[j];
        if (count > 1) {
            let strCount = count.toString();
            for (let k = 0; k < strCount.length; k++) {
                chars[++i] = strCount[k];
            }
        }
        i++;
        j++;
    }
    return i;
};

let chars = ["a","a","b","b","c","c","c"];
let result_Length = Compress(chars);

console.log(result_Length); // 6
console.log(chars.slice(0, result_Length)); // ["a", "2", "b", "2", "c", "3"]
