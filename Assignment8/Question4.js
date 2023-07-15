function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let str2_tree = function(s) {
    if (!s) return null;
    let i = 0;
    while (i < s.length && s[i] !== '(') i++;
    let root = new TreeNode(parseInt(s.substring(0, i)));
    let j = i + 1, cnt = 1;
    for (let k = j; k < s.length; k++) {
        if (s[k] === '(') cnt++;
        else if (s[k] === ')') cnt--;
        if (cnt === 0) {
            root.left = str2_tree(s.substring(j, k));
            j = k + 2;
            break;
        }
    }
    cnt = 1;
    for (let k = j; k < s.length; k++) {
        if (s[k] === '(') cnt++;
        else if (s[k] === ')') cnt--;
        if (cnt === 0) {
            root.right = str2_tree(s.substring(j, k));
            break;
        }
    }
    return root;
};

let treeToArray = function(root) {
    let res = [];
    let dfs = function(node) {
        if (!node) return;
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    return res;
};

let s = "4(2(3)(1))(6(5))";
let root = str2_tree(s);
let result_Array = treeToArray(root);

console.log(result_Array); // [4, 2, 6, 3, 1, 5]
