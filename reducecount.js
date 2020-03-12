var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

function countWord(arr) {
    return arr.reduce(function(countMap, word) {
        if (word in countMap) {
            countMap[word] = countMap[word] + 1;
        } else {
            countMap[word] = 1;
        }
        return countMap;
    }, {})
}

console.log(countWord(inputWords))