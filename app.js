function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > target) {
            right = mid - 1;
        }
        else if(arr[mid] < target) {
            left = mid + 1;
        }
        else {
            return mid;    
        };
    };
    return -1;
}


function find_boundary(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx = -1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;   
        };

    };
    return idx;
}

function firstNotSmaller(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] >= target) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;    
        };
    };
    return idx;
}