// defining a array (stinfo)
let stinfo = [{
        git_id: "naresh73",
        name: "Naresh",
        email: "nareshsharma0318@gmail.com",
        address: [{
            street: "Cheerghar",
            city: "Jodhpur",
            state: "Rajasthan",
            pincode: 342002
        }],
        geo: {
            lat: 37.3159,
            lng: 81.1496
        }
    },

    {
        git_id: "lalit07",
        name: "Lalit",
        email: "lalit@gmail.com",
        address: [{
            street: "Shastri circle",
            city: "Jodhpur",
            state: "Rajasthan",
            pincode: 342004
        }],
        geo: {
            lat: 73.3233,
            lng: 18.2345
        }
    }
];

function mapping(stinfo) {

    // stinfo.map((item) => {
    //         console.log(item);
    //     })
    stinfo.map(function(i) {
        if (i.name === 'Naresh') {
            i.address.map(function(output) {
                console.log(output.city);
            })
        }
    })
}

mapping(stinfo);