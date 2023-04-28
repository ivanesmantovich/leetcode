// Palindrome number (https://leetcode.com/problems/palindrome-number/)

// Simple solution
function isPalindrome(x: number): boolean {
    return x.toString() === x.toString().split('').reverse().join('')
}

// Optimal solution (https://www.youtube.com/watch?v=yubRKwixN-U)
// TODO
