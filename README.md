# FizzBuzz
Fizz Buzz Pseudocode &amp; Program

## The Problem 
*Write a program that prints numbers from 1-20
*For multiples of 3 print 'fizz' instead of the number
*For multiples of five print 'buzz' instead of the number
*For numbers which are multiples of both 3 and 5 print 'fizzbuzz'
*For numbers not divisible by 3 or 5, or both, print the number as normal

## Fizz Buzz Pseudocode
*FOR LOOP:
*Set counter to 1
*Break when counter reaches 100 
*Increment counter by 1 = ++
       *IF number MODULUS % 3 && MODULUS % 5 === 0 
            *THEN PRINT 'fizzbuzz'
       *ELSE IF number MODULUS % 3 === 0 
            *THEN PRINT 'fizz'
       *ELSE IF number MODULUS % 5 === 0 
            *THEN PRINT 'buzz'
       *ELSE PRINT number as normal
            *PRINT number (eg. 1, 2, 4, 7, 8, 10) 
*CLOSE LOOP          
