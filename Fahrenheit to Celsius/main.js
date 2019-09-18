document.getElementById('calc-btn').addEventListener('click', calcTotal)

function calcTotal(){

    let num1 = Number(document.getElementById('num1').value);
   

    let total = (num1 - 32) * 5/9

    document.getElementById('result').innerHTML=total
}