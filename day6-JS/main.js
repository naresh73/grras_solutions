// //var , let , const
function toss(result) {
    if (result == "head") {
        console.log("Priyansh will have a chance to choose between batting or bowling")
    } else if (result == "tail") {
        console.log("Naresh will have a chance to choose between batting or bowling")
    } else {
        console.log("TIE")
    }
}

var result = prompt("Enter result");
toss(result)