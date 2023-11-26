/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    let max = 0

    function dfs(node: TreeNode | null, currentMax: number) {
        if (node) {
            currentMax++
            if (currentMax > max) max = currentMax
        }
        else return

        dfs(node.left, currentMax)
        dfs(node.right, currentMax)
    }

    dfs(root, max)

    return max
};
