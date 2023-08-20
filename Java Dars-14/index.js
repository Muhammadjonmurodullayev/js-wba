// let res = new Map()
// let obj = {}
// obj.name = "webbrain academiy"
// Map.name = "Academiy"
// console.log(obj);
// console.log(res);
// 1)Masala
// var AmIAfraid = function(day, findMultiplesber) {
//     if (day === "Monday" && number === 12) {
//         return true;
//     } else if (day === "Tuesday" && number > 95) {
//         return true;
//     } else if (day === "Wednesday" && number === 34) {
//         return true;
//     } else if (day === "Thursday" && number === 0) {
//         return true;
//     } else if (day === "Friday" && number % 2 === 0) {
//         return true;
//     } else if (day === "Saturday" && number === 56) {
//         return true;
//     } else if (day === "Sunday" && (number === 666 || number === -666)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(AmIAfraid("Monday", 12));
// console.log(AmIAfraid("Tuesday", 100));
// console.log(AmIAfraid("Wednesday", 34));
// console.log(AmIAfraid("Thursday", 0));
// console.log(AmIAfraid("Friday", 6));
// console.log(AmIAfraid("Saturday", 56));
// console.log(AmIAfraid("Sunday", -666));
// console.log(AmIAfraid("Tuesday", 50));
// console.log(AmIAfraid("Sunday", 777));
// function TwoPositive(a, b, c) {
//     let count = 0;

//     if (a > 0) {
//         count++;
//     }

//     if (b > 0) {
//         count++;
//     }

//     if (c > 0) {
//         count++;
//     }

//     return count === 2;
// }
// console.log(TwoPositive(1, 2, 3));
// console.log(TwoPositive(-1, 2, 3));
// console.log(TwoPositive(0, 0, 0));
// console.log(TwoPositive(-1, -2, 3));
// function multiply(a, b) {
//     const product = simple(a) * simple(b);
//     return product.toning();
// }
// function multiply(a, b) {
//     num1 = BigInt(a);
//     num2 = BigInt(b);
//     let result = (a * b).toString();
//     return result;
// }
// const result = multiply("2", "3");
// const result1 = multiply("30", "69");
// const result2 = multiply("11", "85");
// console.log(result);fu(mixedUpBoard, solvedBoard) {
// const numRows = mixedUpBoard.length;
// const numCols = mixedUpBoard[0].length;


// if (numRows !== solvedBoard.length || numCols !== solvedBoard[0].length) {
//     return null;
// }


// const currentBoard = JSON.parse(JSON.stringify(mixedUpBoard));

// // Step 4: Create an empty aay to store moves
// const moves = [];

// // Step 5: Loop over each element
// for (let i = 0; i < numRows; i++) {
//     for (let j = 0; j < numCols; j++) {
//         const currentElement = currentBoard[i][j];
//         const targetElement = solvedBoard[i][j];

//         // Step 6: Check if elements match
//         if (currentElement !== targetElement) {
//             // Step 7: Find target position
//             let targetRow, targetCol;
//             for (let row = 0; row < numRows; row++) {
//                 for (let col = 0; col < numCols; col++) {
//                     if (solvedBoard[row][col] === currentElement) {
//                         targetRow = row;
//                         targetCol = col;
//                         break;
//                     }
//                 }
//             }

//             // Step 8: Generate move string
//             let move;
//             if (targetRow === i) {
//                 const direction = targetCol < j ? "L" : "R";
//                 const steps = Math.abs(targetCol - j);
//                 move = direction + i + steps;
//             } else {
//                 const direction = targetRow < i ? "U" : "D";
//                 const steps = Math.abs(targetRow - i);
//                 move = direction + j + steps;
//             }

//             // Step 9: Add move to moves aay
//             moves.push(move);

//             // Step 10: Apply move
//             const temp = currentBoard[i][j];
//             currentBoard[i][j] = currentBoard[targetRow][targetCol];
//             currentBoard[targetRow][targetCol] = temp;
//         }
//     }
// }

// // Step 12: Return moves
// return moves;
// }
// function solve(mixedUpBoard, solvedBoard) {
//     const numRows = mixedUpBoard.length;
//     const numCols = mixedUpBoard[0].length;
//     if (numRows !== solvedBoard.length || numCols !== solvedBoard[0].length) {
//         return null;
//     }
//     const currentBoard = JSON.parse(JSON.stringify(mixedUpBoard));
//     const moves = [];
//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < numCols; j++) {
//             const currentElement = currentBoard[i][j];
//             const targetElement = solvedBoard[i][j];
//             if (currentElement !== targetElement) {
//                 let targetRow, targetCol;
//                 for (let row = 0; row < numRows; row++) {
//                     for (let col = 0; col < numCols; col++) {
//                         if (solvedBoard[row][col] === currentElement) {
//                             targetRow = row;
//                             targetCol = col;
//                             break;
//                         }
//                     }
//                 }
//                 let move;
//                 if (targetRow === i) {
//                     const direction = targetCol < j ? "L" : "R";
//                     const steps = Math.abs(targetCol - j);
//                     move = direction + i + steps;
//                 } else {
//                     const direction = targetRow < i ? "U" : "D";
//                     const steps = Math.abs(targetRow - i);
//                     move = direction + j + steps;
//                 }
//                 moves.push(move);
//                 const temp = currentBoard[i][j];
//                 currentBoard[i][j] = currentBoard[targetRow][targetCol];
//                 currentBoard[targetRow][targetCol] = temp;
//             }
//         }
//     }
//     return moves;
// }

// function solve(mixedUpBoard, solvedBoard) {
//     const numRows = mixedUpBoard.length;
//     const numCols = mixedUpBoard[0].length;
//     if (numRows !== solvedBoard.length || numCols !== solvedBoard[0].length) {
//         return null;
//     }
//     let currentBoard = [...mixedUpBoard];
//     let moves = [];
//     for (let row = 0; row < numRows; row++) {
//         for (let col = 0; col < numCols; col++) {
//             const symbol = solvedBoard[row][col];
//             let currentRow, currentCol;
//             for (let i = 0; i < numRows; i++) {
//                 for (let j = 0; j < numCols; j++) {
//                     if (currentBoard[i][j] === symbol) {
//                         currentRow = i;
//                         currentCol = j;
//                         break;
//                     }
//                 }
//             }
//             const rowDiff = row - currentRow;
//             const colDiff = col - currentCol;
//             if (rowDiff === 0 && colDiff === 0) {
//                 continue;
//             }
//             let direction, steps;
//             if (rowDiff !== 0) {
//                 direction = rowDiff > 0 ? 'D' : 'U';
//                 steps = Math.abs(rowDiff);
//             } else {
//                 direction = colDiff > 0 ? 'R' : 'L';
//                 steps = Math.abs(colDiff);
//             }
//             moves.push(direction + steps);
//             for (let i = 0; i < steps; i++) {
//                 if (direction === 'L') {
//                     [currentBoard[currentRow][currentCol], currentBoard[currentRow][currentCol - 1]] = [currentBoard[currentRow][currentCol - 1], currentBoard[currentRow][currentCol]];
//                     currentCol--;
//                 } else if (direction === 'R') {
//                     [currentBoard[currentRow][currentCol], currentBoard[currentRow][currentCol + 1]] = [currentBoard[currentRow][currentCol + 1], currentBoard[currentRow][currentCol]];
//                     currentCol++;
//                 } else if (direction === 'U') {
//                     [currentBoard[currentRow][currentCol], currentBoard[currentRow - 1][currentCol]] = [currentBoard[currentRow - 1][currentCol], currentBoard[currentRow][currentCol]];
//                     currentRow--;
//                 } else if (direction === 'D') {
//                     [currentBoard[currentRow][currentCol], currentBoard[currentRow + 1][currentCol]] = [currentBoard[currentRow + 1][currentCol], currentBoard[currentRow][currentCol]];
//                     currentRow++;
//                 }
//             }
//         }
//     }
//     if (JSON.stringify(currentBoard) === JSON.stringify(solvedBoard)) {
//         return moves;
//     } else {
//         return null;
//     }
// }
// function solve(mixedUpBoard, solvedBoard) {
//     function cloneBoard(board) {
//         return board.map(row => [...row]);
//     }

//     function isEqual(board1, board2) {
//         return JSON.stringify(board1) === JSON.stringify(board2);
//     }

//     function move(board, moveStr) {
//         const [direction, index] = moveStr;
//         const clonedBoard = cloneBoard(board);
//         const row = clonedBoard[index[0]];

//         if (direction === 'L') {
//             row.unshift(row.pop());
//         } else if (direction === 'R') {
//             row.push(row.shift());
//         } else if (direction === 'U') {
//             clonedBoard.unshift(clonedBoard.pop());
//         } else if (direction === 'D') {
//             clonedBoard.push(clonedBoard.shift());
//         }

//         return clonedBoard;
//     }

//     function getPossibleMoves() {
//         const directions = ['L', 'R', 'U', 'D'];
//         const moves = [];
//         for (let i = 0; i < solvedBoard.length; i++) {
//             for (let j = 0; j < solvedBoard[i].length; j++) {
//                 directions.forEach(direction => {
//                     moves.push(direction + i + j);
//                 });
//             }
//         }

//         return moves;
//     }

//     function solve(board, moves) {
//         if (isEqual(board, solvedBoard)) {
//             return moves;
//         }
//         const possibleMoves = getPossibleMoves();
//         for (const moveStr of possibleMoves) {
//             const newBoard = move(board, moveStr);
//             const newMoves = [...moves, moveStr];
//             const result = solve(newBoard, newMoves);

//             if (result) {
//                 return result;
//             }
//         }

//         return null;
//     }
//     return solve(mixedUpBoard, []);
// }
// function distinct(a) {
//     let uniquea = [];
//     let seen = {};

//     for (let i = 0; i < a.length; i++) {
//         if (!seen[a[i]]) {
//             uniquea.push(a[i]);
//             seen[a[i]] = true;
//         }
//     }

//     return uniquea;
// }
// let input = [1, 2, 1, 1, 3, 2];
// let output = distinct(input);
// console.log(output);
// function aay(string) {
//     const sequences = string.split(',');

//     sequences.shift();
//     sequences.pop();

//     if (sequences.length === 0) {
//         return null;
//     }
//     const result = sequences.join(' ');

//     return result;
// }
// console.log(array("1,2,3"));
// console.log(array("1,2,3,4"));
// console.log(array("1,2,3,4,5"));
// console.log(array(""));
// console.log(array("1"));
// console.log(array("1,2"));
// function dropCap(n) {
//     let words = n.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > 2) {
//             words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//         }
//     }
//     return words.join(' ');
// }
// let input = "apple of banana";
// let output = dropCap(input);
// console.log(output);
// function solve(arr) {
//     let uniqueInt = 0;
//     for (let i = 0; i < arr.length; i++) {
//         uniqueInt ^= arr[i];
//     }
//     return uniqueInt;
// }
// const arr1 = [1, -1, 2, -2, 3];
// console.log(solve(arr1));
// const arr2 = [-3, 1, 2, 3, -1, -4, -2];
// console.log(solve(arr2));
// const arr3 = [1, -1, 2, -2, 3, 3];
// console.log(solve(arr3));
// function printArray(array) {
//     return array.join(",");
// }

// // Example Usage
// let array = ["h", "o", "l", "a"];
// let result = printArray(array);
// console.log(result);
// function isOpposite(s1, s2) {
//     // Check if the length of the strings is not equal or if both strings are empty
//     if (s1.length !== s2.length || (s1.length === 0 && s2.length === 0)) {
//         return false;
//     }

//     for (let i = 0; i < s1.length; i++) {
//         // Check if the characters at the same index are the same letter but opposite case
//         if (s1[i].toLowerCase() === s2[i].toLowerCase() && s1[i] !== s2[i]) {
//             continue;
//         } else {
//             return false;
//         }
//     }

//     return true;
// }

// // Example usage
// console.log(isOpposite("hello", "HELLO")); // true
// console.log(isOpposite("world", "world")); // false
// console.log(isOpposite("abc", "")); // false
// console.log(isOpposite("", "")); // false
// function doubleChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i] + str[i];
//     }
//     return result;
// }
// console.log(doubleChar("String")); // Output: "SSttrriinngg"
// console.log(doubleChar("Hello World")); // Output: "HHeelllloo  WWoorrlldd"
// console.log(doubleChar("1234!_ ")); // Output: "11223344!!__  "
// function billboard(name, price = 30) {
//     var cost = 0;
//     var nameLength = name.length;

//     for (var i = 0; i < nameLength; i++) {
//         cost += 30; // Default cost per character
//     }

//     return cost;
// }

// // Example usage
// var name = "Jeong-Ho Aristotelis";
// var adCost = calculateBillboardCost(name);
// console.log("The cost of the billboard ad for the name '" + name + "' is £" + adCost);
// function triangleType(a, b, c) {
//     // Check if the sides can form a triangle
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         return 0; // Not a triangle
//     }

//     // Calculate the square of side lengths
//     const squareA = Math.pow(a, 2);
//     const squareB = Math.pow(b, 2);
//     const squareC = Math.pow(c, 2);

//     // Check if one angle is 90° (Right triangle)
//     if (squareA + squareB === squareC || squareA + squareC === squareB || squareB + squareC === squareA) {
//         return 2; // Right triangle
//     }

//     // Check if one angle is more than 90° (Obtuse triangle)
//     if (squareA + squareB < squareC || squareA + squareC < squareB || squareB + squareC < squareA) {
//         return 3; // Obtuse triangle
//     }

//     // If none of the above conditions are met, it is an Acute triangle
//     return 0;
// }

// console.log(triangleType(2, 4, 6)); // Output: 0 (Not a triangle)
// console.log(triangleType(8, 5, 7)); // Output: 1 (Acute)
// console.log(triangleType(3, 4, 5)); // Output: 2 (Right)
// console.log(triangleType(7, 12, 8)); // Output: 3 (Obtuse)
// function estSubsets(arr) {
//     const set = new Set(arr);
//     const setSize = set.size;
//     let result = 0;

//     for (let i = 1; i <= setSize; i++) {
//         result += Math.pow(2, setSize - i);
//     }

//     return result;
// }

// console.log(estSubsets([1, 2, 3, 4])); // Output: 15
// console.log(estSubsets(['a', 'b', 'c', 'd', 'd'])); // Output: 15
// function removeEveryOther(array) {
//     return array.filter((_, index) => index % 2 === 0);
// }

// // Example usage
// const originalArray = ["Keep", "Remove", "Keep", "Remove", "Keep"];
// const modifiedArray = removeEveryOther(originalArray);
// console.log(modifiedArray); // Output: ["Keep", "Keep", "Keep"]
// function findMultiples(integer, limit) {
//     let multiples = [];

//     for (let i = integer; i <= limit; i += integer) {
//         multiples.push(i);
//     }

//     return multiples;
// }

// console.log(findMultiples(2, 6));
// function addLength(str) {
//     const words = str.split(" ");
//     const result = words.map(word => `${word} ${word.length}`);
//     return result;
// }

// console.log(addLength("apple ban")); // Output: ["apple 5", "ban 3"]
// console.log(addLength("you will win")); // Output: ["you 3", "will 4", "win 3"]
// function validateBattlefield(field) {
//     const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
//     let shipCount = Array(10).fill(0);

//     for (let i = 0; i < field.length; i++) {
//         for (let j = 0; j < field[i].length; j++) {
//             if (field[i][j] === 1) {
//                 const shipSize = getShipSize(field, i, j);
//                 shipCount[shipSize - 1]++;
//                 if (shipCount[shipSize - 1] > shipSizes[shipSize - 1]) {
//                     return false;
//                 }
//             }
//         }
//     }

//     return shipCount.every((count, index) => count === shipSizes[index]);
// }

// function getShipSize(field, i, j) {
//     let size = 0;

//     if (i < field.length - 1 && field[i + 1][j] === 1) {
//         while (i < field.length && field[i][j] === 1) {
//             size++;
//             i++;
//         }
//         return size;
//     } else if (j < field[i].length - 1 && field[i][j + 1] === 1) {
//         while (j < field[i].length && field[i][j] === 1) {
//             size++;
//             j++;
//         }
//         return size;
//     } else {
//         return 1;
//     }
// }
// const field = [
//     [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

// console.log(validateBattlefield)
// const reverse = (a) => {
//     let reversedArray = [];
//     for (let i = a.length - 1; i >= 0; i--) {
//         reversedArray.push(a[i]);
//     }
//     return reversedArray;
// };
// const originalArray = [1, 2, 3];
// const reversedArray = reverse(originalArray);
// console.log(reversedArray);
// const reverse = a => a.map(a.pop, [...a]);
// const a = [1, 2, 3];
// const reversedArr = reverse(a);
// console.log(reversedArr); // Output: [3, 2, 1]
// Array
// const reverse = a => a.map(a.pop, [...arr]);
// const central_pixels = arr => arr.reduceRight((acc, val) => (acc.push(val), acc), []);
//function reverseArray(arr) {
// function central_pixels(image) {
//     var reversedArray = [];
//     for (var i = image.length - 1; i >= 0; i--) {
//         reversedArray.push(image[i]);
//     }
//     return reversedArray;
// }

// function central_pixelsInPlace(arr) {
//     var left = 0;
//     var right = image.length - 1;
//     while (left < right) {
//         var temp = image[left];
//         image[left] = image[right];
//         image[right] = temp;
//         left++;
//         right--;
//     }
//     return image;
// }
// function central_pixels(image, color) {
//     // First pass: Find the maximum depth
//     let maxDepth = 0;
//     const depths = Array(image.pixels.length).fill(0);

//     for (let i = 0; i < image.pixels.length; i++) {
//         if (image.pixels[i] === color) {
//             let depth = 0;
//             // Check left pixel
//             if (i % image.width !== 0 && image.pixels[i - 1] === color) {
//                 depth = Math.max(depth, depths[i - 1] + 1);
//             }
//             // Check top pixel
//             if (i >= image.width && image.pixels[i - image.width] === color) {
//                 depth = Math.max(depth, depths[i - image.width] + 1);
//             }
//             depths[i] = depth;
//             maxDepth = Math.max(maxDepth, depth);
//         }
//     }

//     // Second pass: Find pixels with maximum depth
//     const positions = [];
//     for (let i = 0; i < image.pixels.length; i++) {
//         if (depths[i] === maxDepth && image.pixels[i] === color) {
//             positions.push(i);
//         }
//     }

//     return positions;
// }

// // Usage example
// const image = new Image([0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0], 4, 3);
// const color = 1;
// const result = central_pixels(image, color);
// console.log(result); // Output: [6, 7, 8]
// function flip(d, a) {
//     if (d === 'R') {
//         return a.map((column, index) => a.slice().sort((a, b) => b - a)[index]);
//     } else if (d === 'L') {
//         return a.map((column, index) => a.slice().sort((a, b) => a - b)[index]);
//     }
// }

// function flip(d, a) {
//     if (d === 'R') {
//         return a.reduceRight((acc, column) => {
//             acc.push(column);
//             return acc;
//         }, []);
//     } else if (d === 'L') {
//         return a.reduceRight((acc, column) => {
//             acc.unshift(column);
//             return acc;
//         }, []);
//     }
// }
// function findAverage(array) {
//     if (array.length === 0) {
//         return 0;
//     }

//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     return sum / array.length;
// }
// console.log(1);