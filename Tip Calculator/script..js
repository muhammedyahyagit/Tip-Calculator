var calculateBtn = document.getElementById('calculate')
var billInput = document.getElementById('bill');
var tipInput  = document.getElementById('tip');
var totalSpan = document.getElementById('total')


function tipcalculate() {
    var billValue = billInput.value;
    var tipValue = tipInput.value;
    var totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

calculateBtn.addEventListener("click", tipcalculate);