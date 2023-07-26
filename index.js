// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}
const inputStr = "mariyam, rahman!";
const reversedStr = reverseString(inputStr);
// console.log(reversedStr);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNum = (nums) => {
  let sum = 0;
  for (num of nums) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
};

const inputNum = [3, 5, -6, 7];
const result = sumOfPositiveNum(inputNum);
// console.log(result);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function mostFrequentElement(arr) {
  const frequencyMap = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let maxFrequency = 0;
  let mostFrequentElement;

  for (const element in frequencyMap) {
    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      mostFrequentElement = Number(element);
    }
  }

  return mostFrequentElement;
}

const inputArray = [5, 5, 5, 5, 3, 3, 1, 4, 5];
const result1 = mostFrequentElement(inputArray);
// console.log(result1);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(sortedNumbers, targetSum) {
  for (let firstIndex = 0; firstIndex < sortedNumbers.length; firstIndex++) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < sortedNumbers.length;
      secondIndex++
    ) {
      if (
        sortedNumbers[firstIndex] + sortedNumbers[secondIndex] ===
        targetSum
      ) {
        return [firstIndex, secondIndex];
      }
    }
  }
  return null;
}

const sortedNumbers = [1, 3, 6, 8, 11, 15];
const targetSum = 9;
const result3 = findTwoNumbersWithSum(sortedNumbers, targetSum);
console.log(result3);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") {
    if (num2 === 0) return "Cannot divide by zero";
    return num1 / num2;
  }
  return "Invalid operator";
}

console.log(calculator(5, "+", 3));
console.log(calculator(10, "-", 4));
console.log(calculator(6, "*", 7));
console.log(calculator(15, "/", 5));
console.log(calculator(10, "/", 0));
console.log(calculator(7, "%", 3));

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    password += letters[randomIndex];
  }

  return password;
}
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentCharValue = romanNumerals[romanNumeral[i]];
    const nextCharValue = romanNumerals[romanNumeral[i + 1]];

    if (nextCharValue > currentCharValue) {
      result += nextCharValue - currentCharValue;
      i++;
    } else {
      result += currentCharValue;
    }
  }

  return result;
}
console.log(romanToInteger("IX"));
console.log(romanToInteger("XXI"));
console.log(romanToInteger("MMXXI"));
