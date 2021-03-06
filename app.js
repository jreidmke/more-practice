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

var longestPalindrome = function(s) {
    var max = '';
    for (var i = 0; i < s.length; i++) {
      for (var j = 0; j < 2; j++) {
        var left = i;
        var right = i + j;
        while (s[left] && s[left] === s[right]) {
          left--;
          right++;
        }
        if ((right - left - 1) > max.length) {
          max = s.substring(left + 1, right);
        }
      }
    }
    return max;
};

function swapZeroes(nums) {
    let slow = 0;
    for(let fast = 0; fast < nums.length; fast++) {
        if(nums[fast]) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }
    return nums;
} 

function serialize(root) {
    let data = [];
  
    function go(node) {
      if (node == null) {
        data.push(null);
        return;
      }
  
      data.push(node.val);
      go(node.left);
      go(node.right);
    }
  
    go(root);
    return data;
  }
  
  function deserialize(data) {
    function go() {
      if (data.length === 0) return;
  
      const val = data.shift();
      if (val == null) return null;
  
      const node = new TreeNode(val);
      node.left = go();
      node.right = go();
      return node;
    }
  
    return go();
  }

  var longestConsecutive = function(nums) {
    if(!nums || !nums.length) return 0;
    
    let max = 0;
    let set = new Set(nums);
    
    for(let n of set) {
        if(set.has(n - 1))continue;
        
        let currNum = n;
        let currMax = 1;
        
        while(set.has(currNum + 1)) {
            currNum++;
            currMax++;
        };
        max = Math.max(currMax, max);
    }
    return max;
};

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left <= right) {
      [s[left], s[right]] = [s[right], s[left]]
      left++;
      right--;
    }
    return s
  };

  var singleNumber = function(nums) {
    return nums.filter(x => nums.indexOf(x) === nums.lastIndexOf(x))[0];
};

var singleNumber = function(nums) {
    let seen = new Set();
    for(let n of nums) {
        if(seen.has(n)) {
            seen.delete(n)
        } else {
            seen.add(n)
        }
    }
    return seen.values().next().value;
};

var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    
    const node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1));
    return node;
};

var maxProfit = function(prices) {
    let profit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        let prev = prices[i - 1];
        let curr = prices[i];
        
        if(curr > prev) {
            profit += curr - prev;
        };
    };
    return profit;
};

function isAnagram(s, t) {
    const obj = {};
    s.split('').map(c => obj[c] = obj[c] ? obj[c] + 1 : 1);
    t.split('').map(c => obj[c] = obj[c] ? obj[c] - 1 : -1);
    return Object.keys(obj).every(k => obj[k] === 0);
}

var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return (l1 ? l1 : l2);
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};

var climbStairs = function(n, memo={1: 1, 2: 2}) {
    if(memo[n] !== undefined) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n]
};

function exist(board, word) {
    if(!board.length) return false;
  
    const h = board.length;
    const w = board[0].length;
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
    function dfs(x, y, wordIdx) {
      if(board[x][y] !== word[wordIdx]) return false;
      if(wordIdx === word.length - 1) return true;
  
      board[x][y] = '*';
  
      for(const [dx, dy] of dirs) {
        const i = x + dx;
        const j = y + dy;
        if(i >= 0 && i < h && j >= 0 && j < w) {
          if(dfs(i, j, wordIdx + 1)) return true;
        }
      }
      board[x][y] = word[wordIdx];
      return false;
    };
  
    for(let i = 0; i < h; i++) {
      for(let j = 0; j < w; j++) {
        if(dfs(i, j, 0)) return true;
      }
    };
    return false;
  }

  function runningSum(nums) {
    for(let i = 1; i < nums.length; i++) {
      nums[i] = nums[i] + nums[i - 1];
    };
    return nums;
  }

  var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++) {
      if(jewels.indexOf(stones[i]) !== -1) count++;
    };
    return count;
  };

  function kidsWithCandies(candies, extraCandies) {
    return candies.map(c => c + extraCandies >= Math.max(...candies) ? true : false);
  };

  function maxWealth(accounts) {
      let max = 0;
      for(act of accounts) {
          max = Math.max(max, act.reduce((a, b) => a + b));
      };
      return max;
  }

  function numIdenticalPairs(nums) {
    let map = {};
    let count = 0;
    for(let n of nums) {
      !map[n] ? map[n] = 1 : count += map[n]++
    };
    return count;
  }

  function smallerNumbersThanCurrent(nums) {
    let arr = [];
  
    for(let i = 0; i < nums.length; i++) {
      let count = 0;
      for(let j = 0; j < nums.length; j++) {
        if(nums[i] > nums[j]) count++;
      }
      arr.push(count);
    };
    return arr;
  };

  function restoreString(s, indices) {
    let arr = Array(s.length);
    for(let i = 0; i < s.length; i++) {
      arr[indices[i]] = s[i]
    };
    return arr.join('');
  }

  function subtractProductAndSum(n) {
    let arr = n.toString().split('')
    return arr.reduce((a, b) => a * b) - arr.reduce((a, b) => parseInt(a) + parseInt(b)); 
  }

  var numberOfSteps = function(num, count=0) {
    if(!num) return count;
    if(num % 2 === 0) return numberOfSteps(num / 2, count + 1);
    return numberOfSteps(num - 1, count + 1);
};

var decompressRLElist = function(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i+=2) {
      for(let j = 0; j < nums[i]; j++) {
        arr.push(nums[i + 1]);
      };
    };
    return arr 
  };

  var getKth = function(low, hi, k) {
    const range = Array.from(Array(hi - low + 1).keys(), n => n + low);
    let obj = {};
    for(let n of range) {
      obj[n] = math(n)
    };
    let arr = (Object.entries(obj)).sort((a, b) => a[1] - b[1]);
    return parseInt(arr[k - 1][0]);
  };
  
  function math(n, count=0) {
    if(n === 1) return count;
    if(n % 2 === 0) return math(n / 2, count + 1);
    return math((3 * n) + 1, count + 1);
  }


  var isUgly = function(n) {
    if(n <= 0) return false;
    while(n % 2 === 0) n /= 2;
    while(n % 3 === 0) n /= 3;
    while(n % 5 === 0) n /= 5;
    return 1 === n;
};

function isPowerOfFour(n) {
    let left = 0;
    let right = n;
    while(left <= right) {
      let mid = Math.floor((left + right) / 2);
      if(4 ** mid < n) {
        left = mid + 1;
      } else if(4 ** mid > n) {
        right = mid - 1;
      } else {
        return true;
      }
    };
    return false;
  };

  var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(/[^A-Za-z]/g, " ").split(" ");
    let currMax = 1;
    let maxEl;
    let obj = {};
    for(let w of paragraph) {
        w = w.toLowerCase();
        if(!w.length || w === banned) continue;
        !obj[w] ? obj[w] = 1 : obj[w]++;
        if(obj[w] > currMax) {
            currMax = obj[w];
            maxEl = w;
        }
    };
    return maxEl;
};

function reverseVowels(s) {
    let left = 0;
    let right = s.length - 1;
    s = s.split('');
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    while(left < right) {
      while(left < right && !vowels.has(s[left])) left++;
      while(left < right && !vowels.has(s[right])) right--;
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    };
    return s.join('');
  };

  function addToArrayForm(num, k) {
    return (parseInt(num.join('')) + k).toString().split('')
  };

  var isPowerOfTwo = function(n) {
    let multi = 1;
    
    while(multi < n) {
        multi *= 2;
    };
    
    return multi === n;
};

function isPerfectSquare(num) {
    let left = 0;
    let right = num;
    while(left <= right) {
      let mid = Math.floor((left + right) / 2);
      let prod = mid * mid;
      if(prod < num) {
        left = mid + 1;
      } else if(prod > num) {
        right = mid - 1;
      } else {
        return true;
      }
    }
    return false;
  };

  function licenseKeyFormatting(s, k) {
    s = s.replace(/[^A-Za-z0-9]/g, "").split('')
    let count = 1;
    for(let i = s.length - 1; i >= 0; i--) {
      s[i] = s[i].toUpperCase();
      if(count % k === 0 && i > 0) s.splice(i, 0, '-');    
      count++;
    }
    return s.join('');
  }

  function thirdMax(nums) {
    let length = nums.length;
    nums.sort((a, b) => a - b);
    return length >= 3 ? nums[nums.length - length] : nums[nums.length - 1];
  }

  function validPalindrome(s) {
    if(palindrome(s)) return true;
    if(!Array.isArray(s)) s = s.split('')
    let n = s.length;
    for(let i = 0; i < n; i++) {
      let temp = [...s.slice(0, i), ...s.slice(i + 1)];
      if(palindrome(temp)) return true;
    };
    return false;
  };
  
  function palindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
      if(s[left] !== s[right]) return false;
      left++;
      right--;
    };
    return true;
  }


  function trap(nums) {
    let max = -Infinity; //first get max height to know how many times to iterate over slices
    for(let i = 0; i < nums.length; i++) {
      max = Math.max(max, nums[i])
    };
    let count = 0; //init count
  
    for(let i = 0; i < max; i++) { //iterate over array to create slices
      let slice = nums.map(x => x > i ? 1 : 0); //slices created by comparing to iterator. > i = 1, < i = 0;
      
      let left = 0; //idx var used to capture left most wall
      let right = nums.length - 1; //idx var used to capture right most wall

      while(left <= right && !slice[left]) left++; //while curr idx vals are 0, move to find walls
      while(left <= right && !slice[right]) right--;
      if(left === right) continue; //if walls are the same, no water capture


      for(let i = left; i < right; i++) { //iterate from left wall to right
        count += 1 - slice[i]; //add diff to count
      }
    }
  
    return count;
  }


function rainwater(nums) {
    let n = nums.length;
    let leftWall = Array(n).fill(0);
    let rightWall = Array(n).fill(0);

    let leftMax = 0
    for(let i = 0; i < n; i++) {
        leftWall[i] = leftMax;
        leftMax = Math.max(leftMax, nums[i]);
    };

    let rightMax = 0;
    for(let i = n - 1; i >= 0; i--) {
        rightWall[i] = rightMax;
        rightMax = Math.max(rightMax, nums[i]);
    };

    let total = 0;
    for(let i = 0; i < n; i++) {
        let currEl = nums[i];
        let low = Math.min(leftWall[i], rightWall[i]);
        if(low > currEl) {
            total += low - currEl;
        };
    };
    return total;
}

function trappingWaterTwo(nums) {
    let left = 0;
    let right = nums.length - 1;

    let leftMax = nums[left];
    let rightMax = nums[right];
    let count = 0;

    while(left < right) {
        leftMax = Math.max(leftMax, nums[left]);

        if(nums[left] < leftMax) count += leftMax - nums[left];

        rightMax = Math.max(rightMax, nums[right]);

        if(nums[right] < rightMax) res += rightMax - nums[right];

        nums[left] < nums[right] ? left++ : right--
    };
    return count;
}

function maxArea(nums) {
    let left = 0;
    let right = nums.length - 1;

    let count = 0;

    while(left < right) {
        let smallestWall = Math.min(nums[right], nums[left]);

        let area = smallestWall * (right - left);
        count = Math.max(area, count);

        if(nums[left] < nums[right]) left++;
        else right--;
    };
    return count;
};

function minOperations(boxes) {
    let arr = Array(boxes.length).fill(0);
    for(let i = 0; i < boxes.length; i++) {                
        for(let j = 0; j < boxes.length; j++) {
            if(parseInt(boxes[j]) && j !== i) {
                arr[i] += Math.abs(j - i);
            }
        }
    };
    return arr;
};

function checkArithmeticSubarrays(nums, left, right) {
    let arr = [];
    for(let i = 0; i < right.length; i++) {

        let slice = nums.slice(left[i], right[i] + 1).sort((a, b) => a - b);

        let diff = slice[1] - slice[0];
        for(let j = 1; j < slice.length; j++) {
            let diff2 = slice[j] - slice[j - 1];
            if(diff !== diff2) {
                arr.push(false);
                break;
            };
            if(j === slice.length - 1) arr.push(true);
        }
    };
    return arr;
};

checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]);

function numberOfArithmeticSlices(nums) {
    let slow = 0;
    let count = 0;
    for(let fast = 2; fast < nums.length; fast++) {
        let slice = nums.slice(slow, fast + 1);
        
        let diff = slice[1] - slice[0];

        console.log(slice)

        for(let i = 2; i < slice.length; i++) {
            let diff2 = slice[i] - slice[i - 1];
            if(diff !== diff2) break;
            if(i === slice.length - 1) count++;
        };

        console.log('fast', fast)
        console.log('num', nums.length - 1)
        if(fast === nums.length - 1) {
            console.log("HE")
            slow++;
        };
    };
    return count;
};

function maxIceCream(costs, coins) {
    costs.sort((a, b) => a - b);
    let num = 0;
    for(let c of costs) {
        if(coins >= c) {
            num++;
            coins -= c;
        } else {
            break;
        }
    };
    return num;
};

function uniqueOccurrences(nums) {
    let obj = {};
    for(let n of nums) {
        !obj[n] ? obj[n] = 1 : obj[n]++;
    };
    let set = new Set(Object.values(obj));
    return set.size === Object.values(obj).length;
}

function sumUnique(nums) {
    let obj = {};
    for(let n of nums) {
        !obj[n] ? obj[n] = 1 : obj[n]++
    };
    let sum = 0;
    for(let n in obj) {
        if(obj[n] > 1) continue;
        sum += parseInt(n);
    };
    return sum;
};

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i < nums.length; i+=2) {
        sum += Math.min(nums[i], nums[i + 1]);
    };
    return sum;
};

var judgeCircle = function(moves) {
    let obj = {
        "L": 0,
        "U": 0
    };
    for(let m of moves) {
        switch(m) {
            case "L":
                obj["L"]++;
                break;
            case "U":
                obj["U"]++;
                break;
            case "R":
                obj["L"]--;
                break;
            case "D":
                obj["U"]--;
                break;
        };
    };
    return Object.values(obj).every(n => !n);
};


function findTheDifference(s, t) {
    let obj = {};
    for(let i = 0; i < t.length; i++) {
        !obj[t[i]] ? obj[t[i]] = 1 : obj[t[i]]++;
    };
    for(let w of s) {
        obj[w]--;
        if(obj[w] === 0) delete obj[w];
    }
    return Object.keys(obj)[0];
};

function singleNumber(nums) {
    let obj = {};
    for(let n of nums) {
        if(obj[n]) {
            obj[n]++;
            if(obj[n] === 3) delete obj[n];
        } else {
            obj[n] = 1;
        }
    };
    return parseInt(Object.keys(obj)[0]);
};

var singleNumber = function(nums) {
    let seen = new Set();
    for(let n of nums) {
        if(!seen.has(n)) seen.add(n);
        else seen.delete(n);
    };
    return Array.from(seen);
};

function interpret(command) {
    let s = "";
    for(let i = 0; i < command.length; i++) {
        if(command[i] === "G") {
          s += "G";  
        } else if(command[i] + command[i + 1] === "(a") {
            s += "al";
        } else if(command[i] + command[i + 1] === "()"){
            s += "o";
        } else continue; 
    };
    return s;
};

function createTargetArray(nums, idx) {
    let target = [];
    for(let i = 0; i < nums.length; i++) {
        target.splice(idx[i], 0, nums[i]);
    }
    return target;
}

function isToeplitzMatrix(matrix) {
    for(let i = 0; i < matrix.length - 1; i++) {
        for(let j = 0; j < matrix[0].length - 1; j++) {
            if(matrix[i + 1][j + 1] !== matrix[i][j]) return false;
        }
    };
    return true;
}

function subsets(num) {
    let res = [];
    permute(num, [], res, 0);
    return res;
};

function permute(num, path, res, idx) {
    if(num.length === idx) {
        res.push(path);
        return;
    };

    permute(num, [...path, num[idx]], res, idx + 1);
    permute(num, [...path], res, idx + 1);
}

function numOfSubarrays(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        let path = [];
        for(let j = i; j < arr.length; j++) {
            path = [...path, arr[j]];
            if(path.reduce((a, b) => a + b) % 2 !== 0) {
                res.push(path)
            }
        };
    };
    return res.length;
}

function countMatches(items, ruleKey, ruleValue) {
    let dic = {
        "type": 0,
        "color": 1,
        "name": 2
    };
    let count = 0;
    for(let i of items) {
        if(i[dic[ruleKey]] === ruleValue) count++;
    }
    return count;
};

function balancedStringSplit(s) {
    let balance = 0;

    let left = 0;
    let right = 0;
    
    let count = 0;

    while(right < s.length) {
        if(s[right] === "R") balance++;
        else balance--;

        if((left || right) && !balance) {
            count++;
            left = right + 1;
        };
        right++;
    };
    return count;
}

function arrangeWords(text) {
    text = text.split(' ').map(x => x.toLowerCase()).sort((a, b) => a.length - b.length)
    let str = "";
    for(let i = 0; i < text.length; i++) {
        if(i === 0) str += text[0][0].toUpperCase() + text[0].slice(1)
        else str += text[i]        
        if(i !== text.length - 1) str += " "
    }
    return str;
};

function pangram(sentence) {
    let seen = new Set();
    for(let c of sentence) {
        seen.add(c)
    };
    return seen.size === 26
};

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;
    while(l < r) {
        if(s[l] !== s[r]) return false;
        r--;
        l++;
    };
    return true;
};

function validPalindrome(s) {
    if(isPalindrome(s)) return true;
    if(!Array.isArray(s)) s = s.split('');
    let temp = Array.from(s)
    for(let i = 0; i < s.length; i++) {
        let temp = [...s.slice(0, i), ...s.slice(i + 1)];
        if(isPalindrome(temp)) return true;
    }
    return false;    
};

const validPalindrome = (s) => {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
        }
    }
    return true
};

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome = (s) => s === s.split('').reverse().join('');

function mergeAlternately(str1, str2) {
    let n = str1.length > str2.length ? str1.length : str2.length;
    let s = ""
    for(let i = 0; i < n; i++) {
        if(str1[i] === undefined) {
            return s += str2.slice(i);
        } else if(str2[i] === undefined) {
            return s += str1.slice(i)
        } else {
            s += str1[i]
            s += str2[i]
        }
    };
    return s;
}

function selfDividingNumbers(left, right) {
    let res = [];
    for(let i = left; i <= right; i++) {
        let divisors = i.toString().split('');
        for(let j = 0; j < divisors.length; j++) {
            if(i % divisors[j] !== 0) break;
            if(j === divisors.length - 1) res.push(i);
        };
    };
    return res;
}

function checkPerfectNumber(num) {
    let res = 0;
    for(let i = 0; i <= num / 2; i++) {
        if(num % i === 0) res += i;
    };
    return res === num
};

var groupAnagrams = function(strs) {
    strs = strs.sort();
    var mapping = {};
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var sorted = str.split('').sort().join('');
        
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }
    
    var output = [];
    for (var arr in mapping) {
        output.push(mapping[arr]);
    }
    
    return output;
};

var fourSumCount = function(A, B, C, D) {
  
	const sumTwoList = function(x,y){
        let len = x.length;
        let result = new Map();
        for(let i = 0; i < len; i++){
            for(let j = 0; j < len; j++){
               let c = x[i] + y[j];
               result.set(c, result.get(c) + 1 || 1); 
            }
        }
        return result;
    }
    
    let sum1 = sumTwoList(A,B);
    let sum2 = sumTwoList(C,D);
    let total = 0;
   
    sum1.forEach((value,key) =>{
        let offset = 0 - key;
        if(sum2.has(offset)){
            total += (sum2.get(offset) * sum1.get(key));
        }
    })
    return total;
}

var rotate = function(matrix) {
    for (let i=0;i<matrix.length;i++) {
        for (let j=i;j<matrix[0].length;j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length/2;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[0].length-j-1];
            matrix[i][matrix[0].length-j-1] = temp;
        }
    }
};

var rotate = function(M) {
    let n = M.length, depth = ~~(n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            let temp = M[i][i+j]
            M[i][i+j] = M[opp-j][i]
            M[opp-j][i] = M[opp][opp-j]
            M[opp][opp-j] = M[i+j][opp]
            M[i+j][opp] = temp
        }
    }
};

var fourSumCount = function(A, B, C, D) {
    if (!A || !B || !C || !D) return [];
    // cuadratic solution... counter, reduced from sum_of_two
    let memory = new Map();
    for (let i of A) {
        for (let j of B) {
            memory.set(-(i + j), memory.get(-(i + j)) + 1 || 1);
        }
    }
    // look in the map if we have seen the complement of this sum
    let output = 0;
    for (let m of C) {
        for (let n of D) {
            output += memory.has(m + n)? memory.get(m + n): 0;
        }
    }
    return output;
};

function sortColors(nums) {
    function swap(i, j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    let l = 0;
    let r = nums.length - 1;
    let i = 0;
  
    while (i <= r) {
      const n = nums[i];
      if (n === 0) {
        swap(i, l);
        l++;
        i++;
      } else if (n === 2) {
        swap(i, r);
        r--;
      } else {
        i++;
      }
    }
  }


function exist(board, word) {
    let h = board.length; 
    let w = board[0].length;
    let coords = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function dfs(x, y, idx) {
        if(board[x][y] !== word[idx]) return false;
        if(idx === word.length - 1) return true;

        board[x][y] = "*";

        for(let [dx, dy] of coords) {
            const i = x + dx;
            const j = y + dy;
            if(i >= 0 && i < h && j >= 0 && j < w) {
                if(dfs(i, j, idx + 1)) return true;
            };
        };
        board[x][y] = word[idx];
        return false;
    };
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if(dfs(i, j, 0)) return true;
        }
    };
    return false;
};

function bfs(graph, root, target) {
    let que = [root];
    let visited = new Set();
    let level = 0;

    while(que.length) {
        let n = que.length;
        for(let i = 0; i < n; i++) {
            const node = que.shift();
            if(node === target) return level;
            for(const n of get_neighbors(graph, node)) {
                if(visited.has(n)) continue;
                que.push(n);
                visited.add(n);
            }
        };
        level++;
    };
    return level;
}

function get_neighbors(graph, node) {
    return graph[node];
}


function allAddens(n) {
    let res = [];
    let nums = Array.from(Array(n).keys(), n => n + 1);
    permute(nums, n, [], res, 0);
    return res
};

function permute(nums, remaining, path, res, idx) {
    if(!remaining) {
        res.push(Array.from(path));
        return;
    };

    for(let i = idx; i < nums.length; i++) {
        let n = nums[i];
        if(remaining - n < 0) continue;
        path.push(n);
        permute(nums, remaining - n, path, res, i);
        path.pop();
    };
};


var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let max = 0;
    for(let i = 0; i < boxTypes.length; i++) {
        let currBox = boxTypes[i];
        while(currBox[0] && truckSize) {
            max += currBox[1];
            truckSize--;
            currBox[0]--;
        }
    };
    return max;
}

var slowestKey = function(releaseTimes, keysPressed) {
    let max = releaseTimes[0];
    let maxIdx = 0;
    for(let i = 1; i < keysPressed.length; i++) {
        let release = releaseTimes[i] - releaseTimes[i - 1];
        if(release >= max) {
            max = release;
            maxIdx = i;
        }
    };
    return keysPressed[maxIdx];
};

var rearrangeBarcodes = function(barcodes) {
    let slow = 0;
    let fast = 1;
    while(fast < barcodes.length) {
        if(barcodes[slow] === barcodes[fast]) {
            fast++;
        } else {
            slow++;
            [barcodes[slow], barcodes[fast]] = [barcodes[fast], barcodes[slow]];
            fast = slow + 1;
        }
    };
    return barcodes
};

function rearrangeBarcodes(barcodes) {
    let obj = {};
    for(n of barcodes) {
        !obj[n] ? obj[n] = 1 : obj[n]++;
    };

    let nums = Object.entries(obj).sort((a, b) => b[1] - a[1]).map(c => c[0]);

    console.log(nums)

    let res = Array(barcodes.length);
    let idx = 0;


    for(let n of nums) {
        let count = obj[n];

        while(count--) {
            res[idx] = n;
            idx += 2;
            if(idx >= barcodes.length) idx = 1;
        }
    }
    return res;
}

function wordsearch(board, word) {
    const h = board.length;
    const w = board[0].length;
    const coords = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function dfs(x, y, wordIdx) {
        if(board[x][y] !== word[wordIdx]) return false;
        if(wordIdx === word.length - 1) return true;

        board[x][y] = "*";

        for(let [cx, cy] of coords) {
            let i = x + cx;
            let j = y + cy;

            if(i >= 0 && i < h && j >= 0 && j < w) {
                if(dfs(i, j, wordIdx + 1)) return true;
            }
        };
        board[x][y] = word[wordIdx];
        return false;
    };

    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if(dfs(i, j, 0)) return true;
        }
    };
    return false;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function wordLadder(start, target, wordList) {
    wordList = new Set(wordList);
    let que = [start];
    let steps = 0;
    while(que.length) {
        let n = que.length;
        steps++
        for(let i = 0; i < n; i++) {
            const currWord = que.shift();
            for(let j = 0; j < currWord.length; j++) {
                for(let a of alphabet) {
                    const testWord = currWord.slice(0, j) + a + currWord.slice(j + 1);
                    if(!wordList.has(testWord)) continue;
                    if(testWord === target) return steps;
                    que.push(testWord);
                    wordList.delete(testWord);
                }
            }
        }
    };
    return 0;
}

var slowestKey = function(releaseTimes, keysPressed) {
    let max = releaseTimes[0];
    let maxChar = keysPressed[0]
    for(let i = 1; i < keysPressed.length; i++) {
        let release = releaseTimes[i] - releaseTimes[i - 1];
        if(release === max && keysPressed[i] > maxChar || release > max) {
            max = release;
            maxChar = keysPressed[i]
        }
    };
    return maxChar;
};

function findMaxAverage(nums, k) {
    let sum = 0;
    for(let i = 0; i < k; i++) {
        sum += nums[i];
    };

    let max = sum;

    for(let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    };
    return max / k;
}

function findLucky(arr) {
    let obj = {};
    let idx = -1;
    for(let n of arr) {
        !obj[n] ? obj[n] = 1 : obj[n]++
    };
    return Math.max(...arr.filter(e => obj[e] === e), -1);
}

function splitPrimes(str) {
    let res = [];
    permute(str, [], res);
    return res.length;
};

function permute(str, path, res) {
    //pust to res
    if(!str.length) {
        res.push(Array.from(path));
        return
    }

    //push to path;
    for(let i = 1; i <= str.length; i++) {
        let substr = str.slice(0, i);
        if(isPrime(parseInt(substr)) && parseInt(substr) <= 1000 && substr[0] !== "0") {
            path.push(substr);
            permute(str.slice(i), path, res);
            path.pop();
        }
    }
}

function isPrime(n) {
    if(n === 1 || !n) return false;
    if(n < 4) return true;
    for(let i = 2; i <= n / 2; i++) {
        if(n % i === 0) return false;
    };
    return true;
}

const numPairsDivisibleBy60 = (time) => {
    const appearDic = {};
    let ans = 0;
    time.forEach(el => {
        const mod = el % 60;
        const left = (60 - mod) % 60;
        ans += appearDic[left] ? appearDic[left] : 0;
        appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
    });
    return ans;
};

var topKFrequent = function(words, k) {
    let obj = {};
    for(let w of words) {
        !obj[w] ? obj[w] = 1 : obj[w]++;
    };
    const arr = Object.keys(obj).sort((a, b) => {
        let countCompare = obj[b] - obj[a];
        if(countCompare == 0) return a.localeCompare(b);
        else return countCompare;
    })
    return arr.slice(0, k);
};

var fourSumCount = function(A, B, C, D) {
    if (!A || !B || !C || !D) return [];
    // cuadratic solution... counter, reduced from sum_of_two
    let memory = new Map();
    for (let i of A) {
        for (let j of B) {
            memory.set(-(i + j), memory.get(-(i + j)) + 1 || 1);
        }
    }
    // look in the map if we have seen the complement of this sum
    let output = 0;
    for (let m of C) {
        for (let n of D) {
            output += memory.has(m + n)? memory.get(m + n): 0;
        }
    }
    return output;
};

function numSquares(n) {
    const dp = [0];
    
    for(let i = 1; i <= n; i++) {
        dp[i] = Number.POSITIVE_INFINITY;
        for(let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i-j*j] + 1);
        }
    }
    return dp[n];
}

function lowestCommonAncestor(root, p, q) {
    if(!root || root === p || root === q) return root;
    let resL = lowestCommonAncestor(root.left, p, q);
    let resR = lowestCommonAncestor(root.right, p, q);
    return (resL && resR) ? root : (resL || resR);
}

function binary_tree_distance_k_nodes(root, target, k) {
    let res = [];
    if (root) {
        const target_level = find_target(root, target);
        bfs(root, target_level, k, res);
    }
    return res;
}

function find_target(root, target) {
    let level = 0;
    let que = [root];
    while(que.length) {
        level++
        let n = que.length;
        for(let i = 0; i < n; i++) {
            const node = que.shift();
            if(node === target) return level;
            for(let c of [node.left, node.right]) {
                if(c) que.push(c);  
            };
        };
    };
    return level;
}

function bfs(root, target_level, k, res) {
    let level = 0;
    let queue = [root];
    while (queue.length > 0) {
        const n = queue.length;
        level++;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (Math.abs(target_level - level) === k) {
                res.push(node);  // found node K away from target
            }
            for (const child of [node.left, node.right]) {
                if (child) queue.push(child);
            }
        }
    }
}

function wordLadder(begin, end, wordList) {
    wordList = new Set(wordList);
    let steps = 0;
    let que = [begin];
    while(que.length) {
        steps++;
        let n = que.length;
        for(let i = 0; i < n; i++) {
            let currWord = que.shift();
            for(let j = 0; j < currWord.length; j++) {
                for(let a of alpha) {
                    let testWord = currWord.slice(0, j) + a + currWord.slice(j + 1);
                    if(!wordList.has(testWord)) continue;
                    if(testWord === end) return steps;
                    que.push(testWord);
                    wordList.delete(testWord);
                };
            };
        };
    };
    return 0;
}

function countSmaller(nums) {
    for(let i = 0; i < nums.length; i++) {
        let count = 0;
        let num = nums[i];
        for(let j = i; j < nums.length; j++) {
            if(nums[j] < num) count++;
        };
        nums[i] = count;
    };
    return nums;
};

function numPairsDivisibleBy60(times) {
    let res = [];
    permute(times, [], res, 0);
    return res.length 
};

function permute(times, path, res, idx) {
    //push to res
    if(times.length === idx) {
        if(path.length !== 2) return;
        let check = (path.reduce((a, b) => a + b)) % 60;
        if(!check) res.push(Array.from(path));
        return;
    }

    permute(times, [...path, times[idx]], res, idx + 1);
    permute(times, [...path], res, idx + 1);
}

function numPairsDivisibleBy60(times) {
    let obj = {};
    let count = 0;
    times.forEach(x => {
        const mod = x % 60;
        const left = (60 - mod) % 60;
        count += obj[left] ? obj[left] : 0;
        obj[mod] = obj[mod] ? obj[mod] + 1 : 1;
    });
    return count;
}

function twoSumUniquePairs(nums, target) {
    let count = 0;
    let numSet = new Set(nums);
    let used = new Set();
    nums.forEach(x => {
        const diff = target - x;
        if(!used.has(x) && !used.has(diff) && numSet.has(diff)) count++;
        used.add(x, diff);
    });
    return count;
};

function longestValidString(str) {
    let longestSubstr = "";
    let slow = 0;
    for(let fast = 0; fast < str.length; fast += 2) {
        if(str[fast] === str[fast - 2]) slow = fast;
        let sub = str.slice(slow, fast + 2);
        if(sub.length > longestSubstr.length) longestSubstr = sub;
    };
    return longestSubstr;
};

var maxTurbulenceSize = function(arr) {
    let left = 0;
    let right = 1;
    let longest = 0;
    while(arr[0] === arr[1]) {
        left++;
        right++;
    }
    let start = arr[0] > arr[1] ? ">" : "<";
    while(right <= arr.length) {
        if(start === ">") {
            if(arr[right] > arr[right + 1]) {
                right++;
                start = "<";
            } else {
                left = right;
                right++
            }
        } else {
            if(arr[right] < arr[right + 1]) {
                right++;
                start = ">"
            } else {
                left = right;
                right++;
            }
        };
        longest = Math.max(longest, right - left);
    };
    return longest
};

function binary_tree_distance_k_nodes(root, target, k) {
    let res = [];
    if(root) {
        const targetLevel = findLevel(root, target);
        bfs(root, targetLevel, k, res);
    };
    return res;
};

function findLevel(root, target) {
    const que = [root];
    let level = 0;
    while(que.length) {
        level++;
        let n = que.length;
        for(let i = 0; i < n; i++) {
            const node = que.shift();
            if(node === target) return level;
            for(let c of [node.left, node.right]) {
                if(c) que.push(c);  
            };
        };
    };
    return level;
};

function bfs(root, targetLevel, k, res) {
    const que = [root];
    let level = 0;
    while(que.length) {
        level++;
        let n = que.length;
        for(let i = 0; i < n; i++) {
            const node = que.shift();
            if(Math.abs(targetLevel - level) === k) res.push(node);
            for(let c of [node.left, node.right]) {
                if(c) que.push(c);  
            };
        };
    };
};

function sumOddLengthSubarrays(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            for(let k = i; k <= j; k++) {
                if((i - j) % 2 === 0) sum += arr[k];
            }
        }
    };
    return sum;
}

var countNegatives = function(grid) {
    let count = 0;
    grid = grid.flat();
    for(n of grid) {
        if(n < 0) count++
    };
    return count;
};

function countNegatives(grid) {
    let count = 0;
    let inner = grid[0].length - 1;
    let outer = grid.length - 1;
    while(outer >= 0) {
        if(grid[outer][inner] < 0) {
            count++;
            inner--;
        } else if(grid[outer][inner] >= 0 || inner < 0) {
            outer--;
            inner = grid[0].length - 1;
        }
    }
    return count;
}

function maxSlidingWindow(nums, k) {
    let arr = [];
    for(let i = 0; i < nums.length - k + 1; i++) {
        const temp = nums.slice(i, i + k);
        arr[i] = Math.max(...temp);
    };
    return arr;
};

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

function reverseWords(s) {
    return s.split('').reverse().join('').split(' ').reverse().join(' ')
};

function reverseWords2(s) {
    s = s.split(' ')
    let str = "";
    for(let w of s) {
        for(let i = w.length - 1; i >= 0; i--) {
            str += w[i];
            if(!i) str += " "
        }
    }
    return str.trim();
}

function heightChecker(h) {
    let h2 = Array.from(h);
    h = h.sort((a, b) => a - b);
    let count = 0;
    for(let i = 0; i < h.length; i++) {
        if(h[i] !== h2[i]) count++;
    };
    return count;
};

function rotate(matrix) {
    const h = matrix.length;
    const w = matrix[0].length;

    const arr = []
    
    let x = h - 1;
    let curr = 0;

    while(x >= 0) {
        let sub = [];
        for(let i = w - 1; i >= 0; i--) {
            let currEl = matrix[i][curr]
            sub.push(currEl)
        };
        x--;
        curr++;
        arr.push(sub);
    };
    return arr;
};

function rotate(matrix) {
    const h = matrix.length;
    const w = matrix[0].length;
    for(let i = 0; i < h; i++) {
        for(let j = i; j < w; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
        matrix[i].reverse();
    };
    return matrix
};

function shortestToChar(s, c) {
    let arr = [];
    let answer = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) arr.push(i)
    };

    for(let i = 0; i < s.length; i++) {
        for(let idx of arr) {
            if(answer[i] == null) answer[i] = Math.abs(idx - i);
            else answer[i] = Math.min(answer[i], Math.abs(idx - i))
        }
    }
    return answer;
};

function shortestToChar(s, c) {
    let arr = [];
    let currCharIdx = s.indexOf(c);
    for(let i = 0; i < s.length; i++) {
        if(Math.abs(i - currCharIdx) > Math.abs(i - s.indexOf(c, i))) {
            currCharIdx = s.indexOf(c, i);
        }
        arr[i] = Math.abs(i - currCharIdx);
    };
    return arr;
};

// // Example 1:

// // Input: words = ["a","b","ba","bca","bda","bdca"]
// // Output: 4
// // Explanation: One of the longest word chain is "a","ba","bda","bdca".
// // Example 2:

// // Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// // Output: 5

function longestStrChain(words) {
    words.sort((a, b) => a.length - b.length);

    let count = 0;
    let currWordIdx = 0;
    let nextWordIdx = 1;

    while(nextWordIdx < words.length) {
        let currWord = words[currWordIdx];
        let nextWord = words[nextWordIdx];

        if(currWord.length + 1 !== nextWord.length) {
            currWordIdx++;
            nextWordIdx++;
        };

        console.log(currWord);
        console.log(nextWord)


        for(let i = 0; i < currWord.length; i++) {
            let currCharIdx = currWord.indexOf(currWord[i]);
            let nextCharIdx = nextWord.indexOf(currWord[i]);


              
            if(nextCharIdx - 1 <= currCharIdx <= nextCharIdx + 1) {
                if(i === currWord.length - 1) count++;
            }

            console.log('c', count)
        };

        currWordIdx++;
        nextWordIdx++;

    }

    return count;
};

longestStrChain(["a","b","ba","bca","bda","bdca"])

function luckyNumbers(matrix) {
    let mins = [];
    let answer = [];
    for(let sub of matrix) {
        mins.push(Math.min(...sub))
    };

    let colIdx = 0;
    while(colIdx < matrix[0].length) {
        let max = -Infinity;
        for(let i = 0; i < matrix.length; i++) {
            max = Math.max(max, matrix[i][colIdx])
        };
        if(mins.indexOf(max) !== -1) answer.push(max)
        colIdx++;
    }
    return answer;
};

function relativeSortArray(arr1, arr2) {
    let obj = {};
    let newArr = [];
    let remaining = arr1.filter(x => arr2.indexOf(x) === -1).sort((a, b) => a - b);
    for(let n of arr1) {
        !obj[n] ? obj[n] = 1 : obj[n]++
    };
    let posIdx = 0;
    let currIdx = 0;
    while(posIdx < arr2.length) {
        while(obj[arr2[posIdx]] > 0) {
            arr1[currIdx] = arr2[posIdx];
            currIdx++;
            obj[arr2[posIdx]]--
        };
        posIdx++;
    };
    return [...arr1.slice(0, currIdx), ...remaining];
}

function findMedianSortedArrays(nums1, nums2) {
    let big = [...nums1, ...nums2].sort((a, b) => a - b);
    if(big.length % 2 === 0) {
        let n1 = big[(big.length / 2) - 1];
        let n2 = big[(big.length / 2)];
        return (n1 + n2) / 2;
    } else {
        return big[Math.floor(big.length / 2)]
    }
    return big;
}

function minPathSum(grid) {
    let endX = grid.length - 1;
    let endY = grid[0].length - 1;

    for(let y = 0; y <= endY; y++) {
        for(let x = 0; x <= endX; x++) {
            if(y && x) {
                grid[x][y] = Math.min(grid[x][y] + grid[x - 1][y], grid[x][y] + grid[x][y - 1]);
            } else if(x || y) {
                if(x) {
                    grid[x][y] += grid[x - 1][y]
                } else {
                    grid[x][y] += grid[x][y - 1]
                }
            }
        }
    };
    return grid[endX][endY]
};

const uniquePaths = (m, n) => {
    return helper(m, n, 1, 1);
};

const helper = (m, n, row, col) => {
    if(row === m && col === n) return 1;
    if(row > m || col > n) return 0;
    
    const pathsRight = helper(m, n, row, col + 1);
    const pathsDown = helper(m, n, row + 1, col);
    
    return pathsRight + pathsDown;
};

function coinChange(coins, amount) {
    coins.sort((a, b) => a - b);
    let count = 0;
    function helper(remaining) {
        if(remaining === 0) return count;
        for(let i = coins.length - 1; i >= 0; i--) {
            let num = coins[i];
            if(remaining - num < 0) continue;
            count++;
            return helper(remaining - num);
        };
    };
    helper(amount)
    return count
};

coinChange([1], 0)

function coinChange(coins, amount) {
    coins.sort((a, b) => a - b);
    let count = 0;
    let left = coins.length - 1;
    let remaining = amount;
    while(remaining > 0) {
        let num = coins[left];
        if(left === 0 && remaining - num < 0) {
            return -1;
        } else if(remaining - num < 0) {
            left--;
        } else {
            remaining -= num;
            count++;
        }
    };
    return count;
};