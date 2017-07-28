function forEach(array, callback) {
    /*loop through all elements in points array*/
    for (var i = 0; i < array.length; i++) {
        /*Execute callback for each element*/
        callback(array[i]);
    }
}
