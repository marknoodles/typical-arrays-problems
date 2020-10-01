exports.min = function min (array) {
return array != undefined && array.length > 0 ? array.sort((a,b) => a-b)[0] : 0;
}

exports.max = function max (array) {
return array != undefined && array.length > 0 ? array.sort((a,b) => b-a)[0] : 0;
}

exports.avg = function avg (array) {
return array != undefined && array.length > 0 ? array.reduce((sum, arr) => sum+arr) / array.length : 0;
}