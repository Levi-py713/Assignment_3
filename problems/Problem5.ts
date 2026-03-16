// Problem 5

const countOccurrences = (list: Array, it) => {
    let check = 0
    for (let i = 0; i < list.length; i += 1) {
        if (list[i] === it) {
            check += 1
        }
    }

    return check
}

export default countOccurrences; // Uncomment this line when done writing the function
