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
};

function removeDuplicates(arr) {
    let slow = 0;
    for(let fast = 0; fast < arr.length; fast++) {
        if(arr[slow] !== arr[fast]) {
            slow++;
            arr[slow] = arr[fast];
        };
    };
    return arr.slice(0, slow + 1);
}

function middleOfLinkedList(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    };
    return slow;
};

function moveZeros(arr) {
    let slow = 0;
    for(let fast = 0; fast < arr.length; fast++) {
        if(arr[fast]) {
            [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
            slow++;
        };
    };
    return arr;
}

function twoSum(arr, target) {
    let slow = 0;
    let fast = arr.length - 1;
    while(slow < fast) {
        let sum = arr[slow] + arr[fast];
        if(sum > target) right--;
        else if(sum < target) left++;
        else return [left, right]
    };
    return -1;
};

function isAlphaNumeric(c) {
    return /^[a-zA-Z0-9]*$/.test(c);
};

function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        while(left < right && !isAlphaNumeric(s.charAt(left))) left++;
        while(left < right && !isAlphaNumeric(s.charAt(right))) right--;
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    };
    return true;
}

function rainwater(elevations) {
    let n = elevations.length;
    const leftWalls = Array(n).fill(0);
    const rightWalls = Array(n).fill(0);

    let leftMaxWall = 0;
    for(let i = 0; i < n; i++) {
        leftWalls[i] = leftMaxWall;
        leftMaxWall = Math.max(elevations[i], leftMaxWall);
    };

    let rightMaxWall = 0;
    for(let i = n - 1; i >= 0; i--) {
        rightWalls[i] = rightMaxWall;
        rightMaxWall = Math.max(elevations[i], rightMaxWall);
    };

    let totalWater = 0;
    for(let i = 0; i < n; i++) {
        const elevation = elevations[i];
        const lowestWall = Math.min(leftWalls[i], rightWalls[i]);
        if(lowestWall > elevation) {
            totalWater += lowestWall - elevation;
        };
    };
    return totalWater;
}

function longestSubstringWithoutRepeatingCharacters(s) {
    const n = s.length;
    let left = 0;
    let right = 0;
    let longest = 0;
    const seen = new Set();
    while(right < n) {
        if(!seen.has(s.charAt(right))) {
            seen.add(s.charAt(right));
            right++;
        } else {
            seen.delete(s.charAt(left));
            left++;
        };
        longest = Math.max(longest, right - left);
    };
    return longest;
};

var hasCycle = function(head) {
    if(!head) return false;
    while(head && head.next) {
        if(head.val==='x') return true;
        head.val = 'x'
        head = head.next;
    };
    return false;
};

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    let next = head;
    while(curr) {
        next = next.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    };
    return prev
};

var kthSmallest = function(root, k) {
    let result = null;
    function _kthSmallest(node) {
        if (!node) return;
        _kthSmallest(node.left);
        k--;
        if (k === 0) {
            result = node.val;
            return;
        }
        _kthSmallest(node.right);
    }
    _kthSmallest(root);
    return result;
};

var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => a - b);
    return helper(nums, k);
};

function helper(nums, k) {
    if(k === 1) return nums.pop();
    nums.pop();
    return helper(nums, k - 1);
}

function oddEvenList(head) {
    if(!head) return [];
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while(even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    };
    odd.next = evenHead;
    return head;
};

function kthSmallest(matrix, k) {
    let n = matrix.length;
    let low = matrix[0][0];
    let hi = matrix[n-1][n - 1] + 1;
    while(low < hi) {
        let mid = low + Math.floor((hi - low) / 2);
        let count = 0;
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(matrix[i][j] <= mid) count++;
                else break;
            };
        };
        if(count < k) low = mid + 1;
        else hi = mid;
    };
    return low;
}

function reverseEachWord(arr, newArr=[]) {
    if(!arr.length) return newArr;
    let word = arr[0];
    let str = '';
    for(let i = word.length - 1; i >= 0; i--) {
        str += word[i]
    };
    newArr.push(str);
    return reverseEachWord(arr.slice(1), newArr);
};

function needleInHaystack(haystack, needle) {
    let count = 0;
    for(let i = 0; i < haystack.length; i++) {
        for(let j = 0; j < needle.length; j++) {
            if(haystack[i + j] !== needle[j]) break;
            if(j === needle.length - 1) count++;
        };
    };
    return count;
};

var generateParenthesis = function(n) {
    let res = [];
    dfs(n, n, [], res);
    return res;
};

function dfs(l, r, path, res) {
    if(l > r) return;
    
    if(!l && !r) {
        res.push(path.join(''));
        return;
    };
    
    if(l) dfs(l - 1, r, [...path, '('], res);
    if(r) dfs(l, r - 1, [...path, ')'], res);
}

var searchMatrix = function(matrix, target) {
    if(!matrix || !matrix.length) return false;
   
   const rows = matrix.length;
   const cols = matrix[0].length;
   
   function hasTarget(startRow, endRow, startCol, endCol) {
       if(startRow > endRow || startCol > endCol) return false;
       
       const middleRow = Math.floor((endRow - startRow) / 2) + startRow;
       const middleCol = Math.floor((endCol - startCol) / 2) + startCol;
       
       if(matrix[middleRow][middleCol] === target) return true;
       
       if (matrix[middleRow][middleCol] < target) {
           return hasTarget(middleRow + 1, endRow, startCol, endCol) ||
                  hasTarget(startRow, middleRow, middleCol + 1, endCol);
       } else {
           return hasTarget(startRow, endRow, startCol, middleCol - 1) ||
                  hasTarget(startRow, middleRow - 1, middleCol, endCol);
       }
   }
   
   return hasTarget(0, rows - 1, 0, cols - 1);
}

function coinChange(coins, amt) {
    let count = Number.POSITIVE_INFINITY;

    function helper(nums, remaining, path, idx) {
        if(!remaining) {
            count = Math.min(count, path.length);
            return;
        }

        for(let i = idx; i < nums.length; i++) {
            let n = nums[i];
            if(remaining - n < 0) continue;
            path.push(n);
            helper(nums, remaining - n, path, i);
            path.pop();
        }
    };
    helper(coins, amt, [], 0);

    if(count === Number.POSITIVE_INFINITY) return -1;
    return count;

}

function searchRange(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        while(left < right && nums[left] !== target) left++;
        while(left< right && nums[right] !== target) right--;
        return nums[left] === target && nums[right] === target ? [left, right] : [-1, -1]
    };
    return [-1, -1]
};

function rotate(nums, k) {
    if(!k) return nums;
    for(let i = nums.length - 1; i > 0; i--) {
        [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]]
    };
    return rotate(nums, k - 1);
};


function rotate(nums, k) {
    return nums.unshift(...nums.splice(nums.length - k % nums.length));
}

function spiralOrder(matrix) {
    let direction = '->';
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let arr = [];
    let count = 0;
    while(arr.length < matrix.length * matrix[0].length && count < 30) {
        if(direction === '->') {
            for(let i = left; i <= right; i++) {
                arr.push(matrix[top][i]);
                if(i === right) {
                    direction = 'v';
                    top += 1;    
                }
            }
        } else if(direction === 'v') {
            for(let i = top; i <= bottom; i++) {
                arr.push(matrix[i][right])
                if(i === bottom) {
                    direction = '<-';
                    right -= 1;
                }
            }
        } else if(direction === '<-') {
            for(let i = right; i >= left; i--) {
                arr.push(matrix[bottom][i]);
                if(i === left) {
                    bottom -= 1;
                    direction = '->'
                }
            }
        } 
        count++;
    };
    return arr;
}


function maxProduct(nums) {
    let longest = Number.NEGATIVE_INFINITY;

    function helper(nums, path) {        
        let left = 0;
        let right = 0;
        
        while(right < nums.length + 1) {
            longest = Math.max(longest, nums.slice(left, right).reduce((a, b) => a * b));
            right++   
        }
    }

    helper(nums, [1]);
    return longest;
}

var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(root === null)
        return true;
    if(root.val <= min || root.val >= max)
        return false;
    return isValidBST(root.right, root.val, max) && isValidBST(root.left, min, root.val)
};

