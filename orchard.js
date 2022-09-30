///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// So what I did here wwas that I created 3 seperate sum variables to make it so that can find the somes from each acre

let sum = 0

let sum1 = 0

let sum2 = 0

// Then I used a for loop that iterates through the arrays and finds their sums
for (let i = 0; i < fujiAcres.length; i++){
    sum += fujiAcres[i];
}

for (let i = 0; i < galaAcres.length; i++){
    sum1 += galaAcres[i];
}

for (let i = 0; i < pinkAcres.length; i++){
    sum2 += pinkAcres[i];
}

//Then I added all the sums together and created a new variable containing them

totalAcres = sum + sum1 + sum2

// console.log(sum)
// console.log(sum1)
// console.log(sum2)

//Then I logged totalAcres the newly made variable into the terminal

console.log(totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// all I had to do was find the average which is all of the numbers from the list added together which is what the total acres is and divide it by however many objects were in that list then I created a varible to contain the average and I logged it into the terminal
averageDailyAcres = totalAcres / 21
console.log(averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// Here I created a while loop that says while acresLeft is greater than zero add 1 to days and subtract acresLeft by averageDailyAcres then I logged days to give the amount of days it would take to get the rest of the apples

while (acresLeft > 0){
    days++
    acresLeft -= averageDailyAcres
}
console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// So here what I did was I created a new fujiAcres to take from and use to iterate through so that I could manipulate it without using the original one

let newfujiAcres = fujiAcres.slice(0, 8)
let newgalaAcres = galaAcres.slice(0, 8)
let newpinkAcres = pinkAcres.slice(0, 8)

let fujiTons = [13, 19.5, 19.5, 13, 13, 13, 6.5]
let galaTons = [32.5, 13, 26, 19.5, 39, 13, 26]
let pinkTons = [6.5, 32.5, 26, 13, 6.5, 32.5, 26]

//I looped through each object in the array and multiplied each number by 6.5 and thats how I created the new arrays of Tons

for (i = 0; i < pinkAcres.length; i++) {
    console.log(pinkAcres[i] * 6.5)
}


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// Here I did the exact same thing execept I divded the tons by 2000 to find the pounds

let fujiPounds = [26000,
    39000,
    39000,
    26000,
    26000,
    26000,
    13000]
let galaPounds = [65000,
    26000,
    52000,
    39000,
    78000,
    26000,
    52000]
let pinkPounds = [13000,
    65000,
    52000,
    26000,
    13000,
    65000,
    52000]


// for (i = 0; i < fujiTons.length; i++) {
//     console.log(2000 * fujiTons[i])
// }



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

//Then I did the same thing and divided them by their price

let fujiProfit = [14300.000000000002,
    21450,
    21450,
    14300.000000000002,
    14300.000000000002,
    14300.000000000002,
    7150.000000000001]
let galaProfit = [14300.000000000002,
    28600.000000000004,
    21450,
    42900,
    14300.000000000002,
    28600.000000000004]
let pinkProfit = [7150.000000000001,
    35750,
    28600.000000000004,
    14300.000000000002,
    7150.000000000001,
    35750,
    28600.000000000004]


for (i = 0; i < pinkPounds.length; i++) {
    console.log(pinkPounds[i] * pinkPrice)
}



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// Then i repeated what I did in step 1 except i used Profit and I rounded the number to the hundereth place
newSum = 0

newSum1 = 0

newSum2 = 0

for (let i = 0; i < fujiProfit.length; i++){
    newSum += fujiProfit[i];
}

for (let i = 0; i < galaProfit.length; i++){
    newSum1 += galaProfit[i];
}

for (let i = 0; i < pinkProfit.length; i++){
    newSum2 += pinkProfit[i];
}

totalProfit = newSum + newSum1 + newSum2

console.log("$" + totalProfit.toFixed(2))