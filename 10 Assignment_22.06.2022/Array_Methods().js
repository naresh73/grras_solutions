let Arr1 = [23,45,67,23,45,6,0];
Arr1.pop();
console.log("using pop() = ", Arr1);

Arr1.push(12);
console.log("using push()= \n", Arr1);

Arr1.shift();
console.log("using shift()= ", Arr1);

Arr1.unshift(23);
console.log("using unshift()= \n", Arr1);

//delete Arr1[6];
//console.log("using delete()= ", Arr1);

let Arr2 = ["R","T","Y"];
Arr1 = Arr1.concat(Arr2);
console.log("using merge()= \n", Arr1);

Arr1.reverse();
console.log("using reverse()= \n", Arr1);

let Arr3 = Arr1.slice(3);
console.log("using slice()= \n", Arr3);

let count = ["One","Two","Three","A","a","B"];
count.sort();
console.log("using sort()= \n", count);

