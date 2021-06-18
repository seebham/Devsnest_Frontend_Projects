const listProperties = obj => {
    for (prop of Object.keys(obj)) console.log(prop)
}

listProperties({ name : "David Rayy", sclass : "VI", rollno : 12 })