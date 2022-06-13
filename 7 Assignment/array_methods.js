let arr = ["Ashish", "Sidharth", "kk", "lalit", "naru"]
len = arr.length
for (i = 0; i < len; i++) {
    console.log("arr[", i, "] = ", arr[i]);
}

// pop function...
arr.pop();
console.log();
console.log("1. After use of POP function");
for (i = 0; i < arr.length; i++) {
    console.log("arr[", i, "] = ", arr[i]);
}

// push function...
arr.push("naru");
console.log();
console.log("2. After use of PUSH function");
for (i = 0; i < arr.length; i++) {
    console.log("arr[", i, "] = ", arr[i]);
}

// shift function...
arr.shift();
console.log();
console.log("3. After use of SHIFT function");
for (i = 0; i < arr.length; i++) {
    console.log("arr[", i, "] = ", arr[i]);
}


// unshift function...
arr.unshift("Ashish");
console.log();
console.log("4. After use of UNSHIFT function");
for (i = 0; i < arr.length; i++) {
    console.log("arr[", i, "] = ", arr[i]);
}

// array length function...
arr[arr.length] = 73;
console.log();
console.log("5. After use of ARRAY LENGTH function");
for (i = 0; i < arr.length; i++) {
    console.log("arr[", i, "] = ", arr[i]);
}

// array delete ...
delete arr[5];
console.log();
console.log("6. After use of delete");
for (i = 0; i < arr.length; i++) {
    console.log("arr[", i, "] = ", arr[i]);
}
arr.pop();

// array merging ...
let arr2 = [1, 2, 3, 4, 5]
let array = arr.concat(arr2);
console.log();
console.log("7. After use of merging");
for (i = 0; i < array.length; i++) {
    console.log("array[", i, "] = ", array[i]);
}

// array splicing ...
array.splice(8, 8, "INDIA", "UKRAINE");
console.log();
console.log("8. After use of splicing");
for (i = 0; i < array.length; i++) {
    console.log("array[", i, "] = ", array[i]);
}
array.splice(5);
console.log("After use of splice remove function");
for (i = 0; i < array.length; i++) {
    console.log("array[", i, "] = ", array[i]);
}

// array slice ...
let arr3 = array.slice(2)
console.log();
console.log("9. After use of slice");
for (i = 0; i < arr3.length; i++) {
    console.log("arr3[", i, "] = ", arr3[i]);
}

// array reverse ...
array.reverse();
console.log();
console.log("10. After use of reverse function");
for (i = 0; i < array.length; i++) {
    console.log("array[", i, "] = ", array[i]);
}