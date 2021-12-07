var display=document.getElementById("display");
var oprator;
var oprand1=0;
var oprand2=0;
var isOp1=true;
var isOprator=false;
display.innerHTML="0";

function enterNumber(x)
{
    
    
    if(isOp1)
    {
        display.innerHTML=x.value;    
        isOp1=false;
    }
    else
    {
        display.innerHTML+=x.value;            
    }
    if(isOprator)
    {
        oprand2=display.innerHTML.substring(oprand1.length+1);
    
    }
    else
    {
       oprand1=display.innerHTML;        
    
    }
    
}
function enterOp(x)
{    
    isOprator=true;
    oprator=x.value;
    display.innerHTML+=x.value;    
    
}
function ans(x)
{
    display.innerHTML+=x.value;
    switch(oprator)
    {
        case '+':
                oprand1=parseFloat(oprand1)+parseFloat(oprand2);
                display.innerHTML+=oprand1;
                break;
        case '-':oprand1=oprand1-oprand2;
                display.innerHTML+=oprand1;
                break;
        case '*':
                oprand1=oprand1*oprand2;            
                display.innerHTML+=oprand1;
                break;
        case '/':oprand1=oprand1/oprand2;
                display.innerHTML+=oprand1;
                break;
        case '%':oprand1=oprand1%oprand2;
                display.innerHTML+=oprand1;
                break;

    }
}

function clearAll()
{
    display.innerHTML=0;    
    oprand1=0;
    oprand2=0;
    isOp1=true;
    isOprator=false;
    display.style.backgroundColor="rgba(0, 0, 0, 0.2);";
    
}