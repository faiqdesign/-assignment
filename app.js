    function validatePassword(password) {
    // Check if password contains alphabets and numbers
    let hasAlphabets = /[a-zA-Z]/.test(password);
    let hasNumbers = /[0-9]/.test(password);

    // Check if password does not start with a number
    let doesNotStartWithNumber = !/^[0-9]/.test(password);

    // Check if password is at least 6 characters long
    let isAtLeastSixCharactersLong = password.length >= 6;

    // Validate password based on requirements
    if (hasAlphabets && hasNumbers && doesNotStartWithNumber && isAtLeastSixCharactersLong) {
        return true;
    } else {
        return false;
    }
}

let password = prompt("Enter a password:");
while (!validatePassword(password)) {
    password = prompt("Enter a valid password (should contain alphabets and numbers, not start with a number, and be at least 6 characters long):");
}

console.log("Password update!");



function modifyArray(arr) {
    return arr.filter(num => num % 2 === 0)
              .map(num => num * 2);
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const modifiedArray = modifyArray(inputArray);
console.log(modifiedArray);





function findCommonElements(arr1, arr2) {
    let commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonElements.push(arr1[i]);
                break; // Break the inner loop since we found a common element
            }
        }
    }

    return commonElements;
}

// Example usage
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
let result = findCommonElements(array1, array2);
console.log(result); // Output: [4, 5]
