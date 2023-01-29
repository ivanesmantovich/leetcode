// Ransom Note

function canConstruct(ransomNote: string, magazine: string): boolean {
    const availableLetters = countTheLetters(magazine);
    return constructNote(ransomNote, availableLetters);
};

function countTheLetters(magazine: string): Map<string, number> {
    const availableLetters = new Map<string, number>();
    for (const letter of magazine) {
        if (availableLetters.has(letter)) {
            availableLetters.set(letter, availableLetters.get(letter)! + 1);
        } else {
            availableLetters.set(letter, 1);
        }
    }
    
    return availableLetters;
}

function constructNote(ransomNote: string, availableLetters: Map<string, number>): boolean {
    for (const letter of ransomNote) {
        if (availableLetters.has(letter) === false || 
            availableLetters.get(letter) === 0) {
            return false;
        }
        availableLetters.set(letter, availableLetters.get(letter)! - 1);
    }
    return true;
}