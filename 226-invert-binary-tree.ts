class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null

    function dfs(root: TreeNode | null) {
        if (!root?.left && !root?.right) return
        ;[root.left, root.right] = [root.right, root.left]

        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)
    return root
}
