function firstLast6(array){
    if(array[0] == 6 || array[array.length-1] == 6){
        return(true);
    }else{
        return(false);
    }
}


function has23(array){
    if(array[0] == 2 || array[0] == 3){
        return(true);
    }
    else if(array[array.length-1] == 2 || array[array.length-1] == 3){
        return(true);
    }else{
        return(false);
    }
}

function fix23(nums){
    if(nums[0] == 2 && nums[1] == 3){
        nums[1] = 0;
    }
    if(nums[1] == 2 && nums[2] == 3){
        nums[2] = 0;
    }
    return(nums);
}

function countYZ(string){
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i+1] == " "){
            if(string[i].toLowerCase() == "y" || string[i].toLowerCase() == "z"){
                count++;
            }
        }
    }
    if(string[string.length-1].toLowerCase() == "z" || string[string.length-1].toLowerCase() == "y"){
        count++;
    }
    return(count);
}

function endOther(string1, string2){
    if(string1.toLowerCase().endsWith(string2.toLowerCase()) || string2.toLowerCase().endsWith(string1.toLowerCase())){
        return(true);
    }else{
        return(false);
    }
}

function starOut(string){
    var x = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] == "*"){
            for(var j = 1; j < 3; j++)
                if(string[i + j] == "*"){
                    x++
                }else{
                    break;
                }
            string = string.substring(0, i-1) + string.substring(i + x + 2, string.length);
            i = 0;
            x = 0;
        }
    }
    return(string);
}


function getSandwich(string){
    var first = string.indexOf("bread");
    var last = string.lastIndexOf("bread");
    if(first == last){
        return("");
    }
    else{
        return(string.substring(first+5,last))
    }
}

function canBalance(string){
    var rightSum = 0;
    var leftSum = 0;

    for(var i = 0; i < string.length; i++){
        rightSum += string[i];
    }
    for(var j = 0; j < string.length; j++){
        if(rightSum == leftSum){
            return(true);
            break;
        }
        else{
            rightSum -= string[j];
            leftSum += string[j];
        }
    }
    return(false);
}

function countClumps(string){
    var count = 0;
    for(var i = 0; i < string.length-1; i++){
        if(i < string.length-1 && string[i] == string[i+1]){
            if(i == 0){
                count++
            }
            else if(string[i-1] != string[i]){
                count++
            }
        }
    }
    return(count);
}

function evenlySpaced(a,b,c){
    if(a-b == b-c || a-c == c-b || c-a == a-b){
        return(true);
    }
    return(false);
}





function tester() {

    //document.getElementById("output").innerHTML = string_times('bro', 12);
    document.getElementById("output").innerHTML = StarOut(Str*ing);

}
