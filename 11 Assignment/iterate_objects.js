let Aman = {
    id: 193501101,
    name: "Aman Gupta",
    position: "Director",
    email: "amanguptaboat@gmail.com"
};

let Sameer = {
    id: 193501102,
    name: "Sameer Mehta",
    position: "Chairmen",
    email: "sameerboat@gmail.com"
};

let Purvi = {
    id: 193501103,
    name: "Purvi Sheth",
    position: "Non-Executive Independent Director",
    email: "purviboat@gmail.com"
};

// printing keys & values
console.log(Object.keys(Aman));
console.log(Object.values(Aman));

console.log(Object.keys(Sameer));
console.log(Object.values(Sameer));

console.log(Object.keys(Purvi));
console.log(Object.values(Purvi));

//using entries() method
console.log(Object.entries(Aman));
console.log(Object.entries(Sameer));
console.log(Object.entries(Purvi));

//add key & value
Aman['address'] = "Banglore";
Sameer['address'] = "Delhi";
Purvi['address'] = "Mumbai";

console.log(Aman,"\n",Sameer,"\n",Purvi);

//delete key & value
delete Aman['address'];
console.log(Aman);

//edit key & value
Purvi['address'] = "Pune";
console.log(Purvi)

//listing position of members
console.log("Aman's Position = ",Aman.position);
console.log("Sameer's Position = ",Sameer.position);
console.log("Purvi's Position = ",Purvi.position);