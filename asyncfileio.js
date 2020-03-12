var fs = require('fs'); // import library
const file = 'README.md'; //nama file yang akan diinput

fs.readFile(file, 'utf8', function(err, contents) {
    if (err) {
        // pesan error jika nama file salah atau nama file tidak ditemukan
        return console.log(err);
    } else {
        var lines = contents.split("\n"); // mencari newline atau baris baru pada file
        console.log(lines.length); // menampilkan hasil jumlah newline pada file
    }
});