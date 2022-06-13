var ravi = {
    name: 'Ravi',
    age: 25,
    graduation: 'MBA',
    covidVaccine: true,
};

function one() {
    console.log('Start')
}

function two() {
    setTimeout(() => {
        console.log('MID')
    }, 2000);
}

function three() {
    console.log('END')
}

one();
two();
three();