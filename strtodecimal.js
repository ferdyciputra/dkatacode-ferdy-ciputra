var convertToDecimal = function convertToDecimal(arg) {
    let result = []
    arg.forEach(val => {
        let tempArray = val.split('%'); // menghilangkan %
        // memasukkan hasil perhitungan ke variabel tempArray (parsefloat untuk mengubah string menjadi tipe data float)
        result.push(parseFloat(tempArray[0] / 100));
    })
    return result;
}

//menampilkan hasil
console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]));