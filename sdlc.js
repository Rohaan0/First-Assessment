// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning

const array = ["1. Planning", "2. Analysis of Requirments", "3. Design", "4. Implementation", "5. Testing & Integration", "6. Maintain"]


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 

const analysisOfRequirements = "This is the second step, in which you analize the requirements in which you need to create a solution. Developers start to brainstorm any way that they could possibly solve the issue and prepare to start"

const design = "This is the third step, This is when the programmer starts to create psuedocode to have an outline of what they are creating"

const implementation = "This is the fourth one, This is where the psudocode is written into computer programming language and the code is written"

const testingAndIntegration = "This is where the code is now to be tested and used to solve the problem and is seen too run properly."

const maintain = "This is where the code is now checked for any leftover bugs and maintained to make sure it runs properly."


const defArr = [planning, analysisOfRequirements, design, implementation, testingAndIntegration, maintain]

for (i = 0; i < array.length; i++){
    console.log(array[i] + ": " + defArr[i])
    for (j = 0; j < array.length; j++){
        console.log()
    }
}