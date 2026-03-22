// let arr = [46,86,45, 80, 2, 11, 6, 7, 100];
let arr = [12, 34, 43, 55 , 23, 76]

let len = arr.length                        // creating a variable which contains the length of the array


// Finding Maximum Number in the Array.

function findMaximumNumber(arr){

    
    
    let largeNum = arr[0];                      // First element of the array is considered as largest element in the array.
    
    for (let i = 1; i < len; i++){              // Loop runs till the length of the array, i.e. till last element in the array.
        
        if (arr[i]> largeNum){                  // Checks if the any element in the array is larger than the current largest element. 
            largeNum = arr[i];                  // if the current element is larger than the largest element, than it is assigned as the largest element.
        }
    }
    console.log(`Maximum number in the array is: ${largeNum}`);                      // Printing the largest element in the array
}


// Finding sum of elements in the array.


const sumOfElements = (arr) => {
    
    let sum = 0;                                // created a 'sum' variable
    
    for (let i = 0; i < len; i++){              //created a loop such that it traverse thhrough first to last element
        sum = sum + arr[i];                     // array element is added to the variable named 'sum' 
    }
    
    console.log(`Sum of all elements:${sum}`);  // prints the total sum of the elements
}


// Function to count the odd numbers in the array

let countOdd = function (arr){
    
    let count = 0;                              // created a variable 'count' and initialised to 0
    
    for (let i = 0; i < len; i++){              // created a loop such that it traverse thhrough first to last element
        if ((arr[i] % 2) == 1){                 // checks if the element in the array is divisible by 2 or not, if not it enters the inner condition
            count++;                            // it increases the count varibale by 1
        }
    }
    
    console.log(`Count of odd numbers: ${count}`);  // prints the output
}


console.log(`Array: ${arr}`);

// function calling

findMaximumNumber(arr)
sumOfElements(arr)
countOdd(arr)