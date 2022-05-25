function convertTime(timeInput){
    let hour = timeInput.slice(0,1);
    let minute = timeInput.slice(3,4);
    let numHour = parseInt(hour);
    let numMin = parseInt(minute);
    let timeOfDay;
    let result = '';
    if (hour == "00" && minute == "00"){
        return "Midnight"
    } else if (hour == "12" && minute == "00"){
        return "Noon"
    }
    else{
        if(numHour >= 12){
            timeOfDay = " pm";
        }
        else{
            timeOfDay = " am";
        }
    }
    let lowNums = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
    let highNums = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if(numHour == 0){
        result = "Tweleve";
    }
    else if(numHour < 12){
        result = lowNums[numHour];
    }
    else{
        result = lowNums[numHour - 11];
    }

    if(numMin == 0){
        result += " " + lowNums[numMin];
    }
    else if(numMin < 10){
        result += " oh " + lowNums[numMin];
    }
    else if(numMin < 20){
        result += " " + lowNums[numMin];
    }
    else{
        let tens = Math.floor(numMin / 10);
        let ones = numMin % 10;
        if(tens <= 9){
            result += " " + highNums[tens];
            if(ones > 0){
                result += " " + lowNums[ones];
            }
        }
    }
    result += " " + timeOfDay;
    return result;
}