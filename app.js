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

function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let idx = -1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) {
            idx = mid;
            right = mid - 1
        } else if(arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;    
        };
    };
    return idx;
}

function squareRoot(n) {
    let left = 0;
    let right = n;
    let sq;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(mid ** 2 <= n) {
            sq = mid;
            left = mid + 1;
        } else {
            right = mid - 1;    
        };
    };
    return sq;
}

function findMinRotated(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] <= arr[arr.length - 1]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;    
        };
    };
    return idx;
}

function peakOfMountainArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    let idx;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid + 1]) {
            idx = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        };

    };
    return idx;
}

function treeMaxDepth(root) {
    if(!root) return 0;
    return Math.max(treeMaxDepth(root.left), treeMaxDepth(root.right)) + 1;
}

function visibleTreeNode(root) {
    return dfs(root, Number.NEGATIVE_INFINITY);
};

function dfs(root, hi) {
    if(!root) return 0;
    let count = 0;
    if(root.val > hi) count++;
    count += dfs(root.right, Math.max(root.val, hi));
    count += dfs(root.left, Math.max(root.val, hi));
    return count;
};

function validBst(root) {
    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSTIVE_INFINITY);
};

function dfs(root, low, hi) {
    if(!root) return true;
    if(root.val < low || root.val > hi) return false;
    return dfs(root.left, low, root.val) && dfs(root.right, root.val, hi);
};