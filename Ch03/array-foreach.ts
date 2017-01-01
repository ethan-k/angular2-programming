function printArray(element, index, array) {
    console.log('[' + index + '] = ' + element );
}
let b = 2;
[1, 2, 3, 'four'].forEach(printArray)
