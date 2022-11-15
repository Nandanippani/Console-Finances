
// The total number of months included in the dataset
var total_months = finances.length;

// The net total amount of Profit/Losses over the entire period
var profit = 0;
var loss = 0;

for (var i = 0; i < finances.length; i++) {
    if (finances[i][1] > 0) {
        profit += finances[i][1];
    }
    else {
        loss += finances[i][1];
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
        var curr_month = finances[i][1];
        var next_month = finances[i + 1][1];

        var change = next_month - curr_month;

        var obj = new Object();
        obj.month = finances[i + 1][0];
        obj.value = change;

        monthlyChanges.push(obj);

        totalChanges += change;
    }
}

monthlyChanges.sort((a, b) => a.value - b.value);

var gtDec = monthlyChanges[0];
var gtInc = monthlyChanges[monthlyChanges.length - 1];

console.log(`Financial Analysis
--------------------------------------------------------
Total Months: ${total_months}
Total: $${net_total}
Average  Change: $${(totalChanges / (finances.length - 1)).toFixed(2)}
Greatest Increase in Profits: ${gtInc.month} ($${gtInc.value})
Greatest Decrease in Profits: ${gtDec.month} ($${gtDec.value})
`)

