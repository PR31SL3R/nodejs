/*
We’re not going to sugar-coat it: Chicago’s winters can be rough. The temperatures sometimes dip to uncomfortable levels and, after last year’s “polar vortex”, the University of Chicago Weather Service wants to find out exactly how bad the winter was. More specifically, they are interested in knowing the total number of days in which the temperature was below zero degrees Celsius.

Input
The input is composed of two lines. The first line contains a single positive integer 𝑛
n
 (1≤𝑛≤100
1
≤
n
≤
100
) that specifies the number of temperatures collected by the University of Chicago Weather Service. The second line contains 𝑛
n
temperatures, each separated by a single space. Each temperature is represented by an integer 𝑡
t
 (−1000000≤𝑡≤1000000
−
1
000
000
≤
t
≤
1
000
000
)

Output
You must print a single integer: the number of temperatures strictly less than zero.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let nums = line.split(' ');
    let a = parseInt(nums[0]);
    let counter = 0
    /*Solve the test case and output the answer*/
    for (let i = 1; i <= a; i++) {  
        let b = parseInt(nums[1]);
        if(b < 0){
            counter++;
        }   
        console.log(counter);
    }
});