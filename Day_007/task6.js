const sortObjectWithKey = arrayOfObj => {
    arrayOfObj.forEach((el, ind) => {
        let temp = {
            'author': el.author,
            'libraryID': el.libraryID,
            'title': el.title
        }
        arrayOfObj[ind] = JSON.parse(JSON.stringify(temp))
        delete temp
    });
    return arrayOfObj.sort((a, b) => b.libraryID - a.libraryID)
}

var librarybooks = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
console.log('Before sorting: ', librarybooks);
console.log('After sorting: ', sortObjectWithKey(librarybooks));