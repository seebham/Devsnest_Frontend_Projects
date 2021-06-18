const getSize = obj => {
    let size = 0;
    // My simple approach
    // for (key in obj) size++;

    // StackOverFlow Bug Free way
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

console.log('Length of Passed Obj: ', getSize({ name : "David Rayy", sclass : "VI", rollno : 12 }))