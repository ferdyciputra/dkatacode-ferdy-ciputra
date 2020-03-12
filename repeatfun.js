function repeat(num) {
    if (num != 1) {
        return num * repeat(num - 1);
    } else {
        return 1;
    }
}

console.log(repeat(5))