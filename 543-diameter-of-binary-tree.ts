function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0

    function traversal(node: TreeNode | null) {
        if (!node) return 0

        const leftDiameter = traversal(node.left)
        const rightDiameter = traversal(node.right)
        maxDiameter = Math.max(leftDiameter + rightDiameter, maxDiameter)

        return Math.max(leftDiameter, rightDiameter) + 1
    }

    traversal(root)

    return maxDiameter
}
