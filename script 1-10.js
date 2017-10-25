//write first method
function sleep_in(weekday, vacation) {
    if(weekday == false || vacation == true){
        return(true);
    }else{
        return(false);
    }
}

function monkey_trouble(smilea, smileb){
    if(smilea == smileb){
        return(true);
    }else{
        return(false)
    }
}

function string_times(string, n){
    return(new Array(n + 1)).join(string);
}

function front_times(string, n){
    var stringTwo = "";
    for(i = 0; i < n; i++){
        stringTwo += string.substring(0,3);
    }
    return(stringTwo);
}

function string_bits(string){
    result = "";
    for(i = 0; i < string.length; i += 2){
        result = result + string.substring(i, i+1);
    }
    return(result);
}

function caughtSpeeding(speed,birthday){
    if(birthday == true)
        speed -= 5;
    if(speed <= 60){
        return 0;
    }
    else if(speed > 60 && speed <= 80){
        return 1;
    }else{
        return 2;
    }
}

function fizz_buzz(num){
    if(num % 3 == 0 && num % 5 == 0){
        return("FizzBuzz");
    }
    else if(num % 5 == 0){
        return("Buzz");
    }
    else if(num % 3 == 0){
        return("Fizz");
    }else{
        return(num + "!")
    }
}

function teaParty(tea,candy){
    if (tea < 5 || candy < 5) {
        return (0)
    }
    else if (tea >= 2 * candy || candy >= 2 * tea) {
        return (2);
    }else{
        return(1);
    }
}

function blackjack(hand1,hand2){
    if(hand1 > 21 && hand2 > 21){
        return(0);
    }
    else if(hand1 > hand2 && hand1 <= 21){
        return(hand1);
    }
    else if(hand2 > 21){
        return(hand1);
    }
    else if(hand2 <= 21){
        return(hand2);
    }
}

function loneSum (num1,num2,num3){
    if(num1 == num2 && num2 == num3){
        return(0)
    }
    else if(num1 == num2){
        return(num3);
    }
    else if(num1 == num3){
        return(num2);
    }
    else if(num2 == num3){
        return (num1);
    }else{
        return(num1 + num2 + num3);
    }
}



function tester() {

    //document.getElementById("output").innerHTML = string_times('bro', 12);
    document.getElementById("output").innerHTML = blackjack(0, 0);

}
