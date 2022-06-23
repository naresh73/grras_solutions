let obj = {
    name: "Naresh",
    age: "20",
    email: "nareshsharma0318@gmail.com",
    city: "Jodhpur"
}

function async(obj) {
    setTimeout(() => {
        console.log("HERE IT IS")
        setTimeout(() => {
            console.log(Object.values(obj));
        }, 4000);

    }, 8000);

    setTimeout(() => {
        console.log(Object.keys(obj));
        setTimeout(() => {
            console.log("...")
        }, 1000);

        setTimeout(() => {
            console.log("..")
        }, 2000);

        setTimeout(() => {
            console.log(".")
        }, 3000);

        setTimeout(() => {
            console.log("PLEASE WAIT EVENT LOOP IS WORKING...")
        }, 4000);
    }, 2000);
}

async(obj)