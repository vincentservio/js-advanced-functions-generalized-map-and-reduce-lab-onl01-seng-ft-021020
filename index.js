// Add your functions here
function map(arr,func){
    const newArr = []
    for (let i=0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

function reduce(arr, func, start=0) {
    let rt = !!start ? start : arr[0]
    let i = !!start ? 0 : 1
    for ( ; i < arr.length; i++) {
        rt = func(arr[i], rt)
    }
    return rt
}