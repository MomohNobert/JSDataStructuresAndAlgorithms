function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {}

    for (var letter of first) {
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (var letter of second) {
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1;
        }
    }

    return true
}

console.log(validAnagram("hello", "ellh"))