function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById('result').value += value;  // or use innerHTML if you prefer
}

function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value=q ;
}