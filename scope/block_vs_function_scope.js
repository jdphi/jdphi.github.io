function example1(flag) { //flag will take a boolean
    if (flag === true) {
        let str = 'Hello'; //this will not return from this function, resulting in an undefined.
                            //this 'let' statement only exists within the {} of the if...else statement.
    }
    else {
        str = 'Goodbye'; //this will not print either. This is invalid syntax, due to the else {} statement
                        // not having a variable declaration keyword of 'let' 
    }
    return str;
}

//console.log(example1(false)) //comment this to have the program run successfully
                                //uncomment to see that 'str' is not defined
                                
//console.log(example1(true)) //comment this to have the program run successfully.
                                //uncomment to see that 'str' is not defined

function example2(flag) {//second example to demonstrate function scope of 'var' keyword
    if (flag === true) {
        var str = 'Hello example2'; //this will print when flag = true
    }
    else {
        str = 'Goodbye example2'; // this will print when flag = false
                        // this is because the 'var' keyword has function scope
                        // .. it persists beyond the {} of the if..else statement
    }
    return str;
}
console.log(example2(false))
console.log(example2(true))
