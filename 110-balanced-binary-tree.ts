function getHeight(root: TreeNode | null) {
    if (!root) return [true, 0]

    const [leftBalanced, leftHeight] = getHeight(root.left)
    const [rightBalanced, rightHeight] = getHeight(root.right)

    const balanced =
        leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1 // разница
    // + 1 потому что находимся на 1 выше, чем та нода из которой достали height
    const height = Math.max(leftHeight, rightHeight) + 1

    return [balanced, height]
}

function isBalanced(root: TreeNode | null): boolean {
    return getHeight(root)[0]
}
