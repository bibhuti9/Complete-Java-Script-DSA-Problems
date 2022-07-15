let findPermutations = (string) => {
    if (!string || typeof string !== "string") {
        return "Please enter a string"
    } else if (string.length < 2) {
        return string
    }

    // This array will hold our permutations
    let permutationsArray = []

    for (let i = 0; i < string.length; i++) {
        let char = string[i]

        // if char was used already, skip this time to remove duplicates
        if (string.indexOf(char) != i)
            continue
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
}
console.log(findPermutations('abc'));