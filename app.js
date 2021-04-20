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

function serialize(root) {
    let res = [];
    dfsS(root, res);
    return res.join(' ');
};

function dfsS(root, res) {
    //push null
    if(!root) {
        res.push('x');
        return;
    };
    
    //push val
    res.push(root.val);
    dfsS(root.left, res);
    dfsS(root.right, res);
};

function deserialize(s) {
    return dfsD(s.split(' '));
};

function dfsD(arr) {
    let val = arr.shift();
    if(val === 'x') return;
    let node = new Node(val);
    node.left = dfsD(arr);
    node.right = dfsD(arr);
    return node;
};

function build_tree(nodes) {
    let val = nodes.next().value;
    if (!val || val === 'x') return;
    let cur = new Node(parseInt(val, 10));
    cur.left = build_tree(nodes);
    cur.right = build_tree(nodes);
    return cur;
};

function lca(root, node1, node2) {
    if(!root) return;
    if(root.val > Math.max(node1.val, node2.val)) {
        return lca(root.left, node1, node2);    
    } else if(root.val < Math.min(node1.val, node2.val)) {
        return lca(root.right, node1, node2);    
    } else {
        return root;    
    };
};

function ternary_tree_paths(root) {
    let res = [];
    if(root) dfs(root, [], res);
    return res;
};

function dfs(root, path, res) {
    //push to res
    if(root.children.every(c => !c)) {
        path.push(root.val);
        res.push(path.join('->'));
        path.pop();
        return;
    };
    //push to path
    for(let c of root.children) {
        if(c) {            
            path.push(root.val);
            dfs(c, path, res);
            path.pop();
        };
    };
};

function permutations(letters) {
    let res = [];
    dfs(letters, [], res, []);
    return res;
};

function dfs(letters, path, res, used) {
    if(letters.length === path.length) {
        res.push(Array.from(path));
        return;
    };
    for(let i = 0; i < letters.length; i++) {
        if(used[i]) continue;
        path.push(letters[i]);
        used[i] = true;
        dfs(letters, path, res, used);
        path.pop(letters[i]);
        used[i] = false;
    };
};

const KEYBOARD = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  
  function letterCombinationsOfPhoneNumber(digits) {
      let res = [];
      permutations(digits, [], res);
      return res;
  };
  
  function permutations(digits, path, res) {
      if(digits.length === path.length) {
          res.push(path.join(''));
          return;
      };
      let currChar = digits.charAt(path.length);
      for(let c of KEYBOARD[currChar]) {
          path.push(c);
          permutations(digits, path, res);
          path.pop();
      };
  };

function wordBreak(s, words) {
    return dfs(s, words, 0, {});
};

function dfs(s, words, idx, memo) {
    if(s.length === idx) return true;
    if(idx in memo) return memo[idx];
    
    let check = false;
    for(let w of words) {
        if(s.slice(idx).startsWith(w)) {
            if(dfs(s, words, idx + w.length, memo)) check = true;    
        };
    };
    memo[idx] = check;
    return check;
};

function decodeWays(digits) {
    return decoder(digits, 0);
};

function decoder(digits, idx) {
    if(digits.length === idx) return 1;
    let count = 0;
    let remaining = digits.slice(idx);
    for(let l of LETTERS) {
        if(remaining.startsWith(l)) {
            count += decoder(digits, idx + l.length);    
        };
    };
    return count;
};

function partition(s) {
    let res = [];
    permutations(s, [], res);
    return res;
};

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    };
    return true;
};

function permutations(s, path, res) {
    if(!s.length) {
        res.push(Array.from(path));
        return;
    };
    for(let i = 1; i <= s.length; i++) {
        let substr = s.slice(0, i);
        if(isPalindrome(substr)) {
            path.push(substr);
            permutations(s.slice(i), path, res);
            path.pop();
        };
    };
};

function combinationSum(candidates, target) {
    let res = [];
    permutations(candidates, target, [], res, 0);
    return res;
};

function permutations(candidates, remaining, path, res, idx) {
    if(!remaining) {
        res.push(Array.from(path));
        return;
    };
    for(let i = idx; i < candidates.length; i++) {
        let n = candidates[i];
        if(remaining - n < 0) continue;
        path.push(n);
        permutations(candidates, remaining - n, path, res, i);
        path.pop();
    };
}; 

function subsets(nums) {
    let res = [];
    permutations(nums, [], res, 0);
    return res;
};

function permutations(nums, path, res, idx) {
    if(nums.length === idx) {
        res.push(Array.from(path));
        return;
    };
    permutations(nums, [...path, nums[idx]], res, idx + 1);
    permutations(nums, [...path], res, idx + 1);
};

function levelOrderTraversal(root) {
    let res = [];
    let que = [root];
    while(que.length) {
        let n = que.length;
        let path = [];
        for(let i = 0; i < n; i++) {
            let node = que.shift();
            path.push(node.val);
            for(let c of [node.left, node.right]) {
                if(c) que.push(c);    
            };
        };
        res.push(path);
    };
    return res;
}

function zigZagTraversal(root) {
    let res = [];
    let que = [root];
    let leftToRight = true;
    while(que.length) {
        let n = que.length;
        let path = [];
        for(let i = 0; i < n; i++) {
            const node = que.shift();
            path.push(node.val);
            for(let c of [node.left, node.right]) {
                if(c) que.push(c);    
            };
        };
        if(!leftToRight) path.reverse();
        res.push(path);
        leftToRight = !leftToRight;
    };
    return res;
}

function binary_tree_right_side_view(node) {
    let res = [];
    let q = [node];
    while(q.length) {
        const n = q.length;
        res.push(q[0]);
        for(let i = 0; i < n; i++) {
            const newNode = q.shift();
            for(let c of [newNode.right, newNode.left]) {
                if(c) q.push(c);
            }
        }
    };
    return res;
};

function min_depth(root) {
    let que = [root];
    let depth = -1;
    while(que.length) {
        depth++;
        let n = que.length;
        for(let i = 0; i < n; i++) {
            let node = que.shift();
            if(!node.left && !node.right) return depth;
            for(let c of [node.left, node.right]) {
                if(c) que.push(c);
            }
        }
    }
}

function bfsGraph(root) {
    let que = [root];
    let visited = new Set();
    while(que.length) {
        const node = que.shift();
        for(const n of node.neighbors) {
            if(visited.has(n)) continue;
            que.push(n);
            visited.add(n);
        }
    }
};

function bfsLevelTraversal(root) {
    let que = [root];
    let visited = new Set();
    let level = 0;
    while(que.length) {
        const n = que.length;
        for(let i = 0; i < n; i++) {
            const node = que.shift();
            for(const n of node.neighbors) {
                if(visited.has(n)) continue;
                que.push(n);
                visited.add(n);
            }
        };
        level++;
    }
}