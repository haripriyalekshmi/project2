var calculator=document.getElementById('mainscreen');


function buttonClick(value)
{
    calculator.value+=value;  //screen value=passvalue
}
//working of clear button
function clearButton()
{
    calculator.value=" ";
}

function findResult()
{   
    try{
    var result=eval(calculator.value);
    calculator.value=result;
    }
    catch{
        calculator.value='ERROR'
    }

}