const findFrequency = arr => {
    freq = {}
    maxElement = { 
        'element': 'dummy', 
        'frequency' : 0
    }
    arr.forEach(el => {
        if(!(el in freq)) freq[el] = 1
        else { 
            freq[el] += 1
            if(maxElement.frequency < freq[el]) {
                maxElement.frequency = freq[el];
                maxElement.element = el
            }
        }
        
    });
    console.log(`${maxElement.element} \( ${maxElement.frequency} times \)`)
}

findFrequency([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])