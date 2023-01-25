module.exports = function reverse (n) {
    
    const normalNum = Math.abs(n);
    const splitNum = normalNum.toString().split("");
    const reversArray = splitNum.reverse();
    const joinArray = reversArray.join("");
    
    return joinArray;
}
