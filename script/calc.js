
// The total number of months included in the dataset
var total_months = finances.length;

// The net total amount of Profit/Losses over the entire period
var profit = 0;
var loss = 0;

for (var i = 0; i < finances.length; i++) {
    if (finances[i][1] > 0) {
        profit += finances[i][1];   // Here I have used if condition with more than zero to consider profits and add up all profits ranging from 0-85 for first array and second index of second array.
    }
    else {
        loss += finances[i][1];  // Here I have used else condition with less than zero to consider losses and add up all losses ranging from 0-85 for first array and second index of second array.
    }
}

var net_total = profit + loss;

// The average of the **changes** in Profit/Losses over the entire period
// The greatest increase in profits (date and amount) over the entire period.
// The greatest decrease in losses (date and amount) over the entire period.

var totalChanges = 0;

monthlyChanges = [];

for (var i = 0; i < finances.length; i++) {
    if (i + 1 < finances.length) {
        var curr_month = finances[i][1];       //  To calculate changes from month to month I first declared two variables called curr_month, next_month to calculate changes between next month and current month.
        var next_month = finances[i + 1][1];

        var change = next_month - curr_month;

        totalChanges += change;       // Here calculated total changes.

        var obj = new Object();            // Here I declared an object with two variables month, value to consider date and change.
        obj.month = finances[i + 1][0];
        obj.value = change;

        monthlyChanges.push(obj);        // Here added this object to empty array monthlyChanges.
    }
}

monthlyChanges.sort((a, b) => a.value - b.value); // Here sorted monthlyChanges array in ascending order.

var gtDec = monthlyChanges[0];                 // Assigned gratest decrease in changes to variable gtDec.
var gtInc = monthlyChanges[monthlyChanges.length - 1]; //Assigned gratest increase in changes to gtInc.

console.log(`Financial Analysis                               
--------------------------------------------------------              
Total Months: ${total_months}
Total: $${net_total}
Average  Change: $${(totalChanges / (finances.length - 1)).toFixed(2)}
Greatest Increase in Profits: ${gtInc.month} ($${gtInc.value})
Greatest Decrease in Profits: ${gtDec.month} ($${gtDec.value})
`)

// Above console.log shows output as mentioned in the readme file.


