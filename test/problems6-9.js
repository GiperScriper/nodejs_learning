// Problem-6: Write a function that takes a function and an argument, and returns a function that can supply a second argument
// add3 = curry(add, 3)
// add3(4)
function applyFuncWithArg(func, x) {
    return function (y) {
        return func(x, y);
    }
};

console.log("/n### Problem-6 ###");
var add = ap 