for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if(i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

//Fizz Buzz Pseudocode
/*
1. FOR LOOP:
   Set counter to 1
   Break when counter reaches 100 
   Increment counter by 1 = ++
       2. IF number MOD % 3 && % 5 === 0 
            THEN PRINT 'fizzbuzz'
       3. ELSE IF number MOD % 3 === 0 
            THEN PRINT 'fizz'
       4. ELSE IF number MOD % 5 === 0 
            THEN PRINT 'buzz'
       5. ELSE PRINT number as normal
            PRINT number (eg. 1, 2, 4, 7, 8, 10) 
6. CLOSE LOOP          
*/
