
function randomBetween(min,max){
    return min + Math.floor(Math.random() * (max - min + 1));
}

document.getElementById('generateNumbers').addEventListener('click',function(){
    
    var inputValue = document.getElementById('inputNumber').value;
    
    if(inputValue < 0 || inputValue > 255){
        document.getElementById('alert').innerHTML = '<span style="color:red">Please enter a number between 0 and 255.</span>';
        
        document.getElementById('testObject').style.backgroundColor = 'rgb(255,255,255)';
    }
    
    if(!inputValue){
        document.getElementById('alert').innerHTML = '<span style="color:#ff8c00">You did not enter a valid number.</span>';
        
        document.getElementById('testObject').style.backgroundColor = 'rgb(255,255,255)';
    }
    
    if(inputValue >0 && inputValue <=255){
        
     
    var r = randomBetween(0,inputValue);
    var g = randomBetween(0,inputValue);
    var b = randomBetween(0,inputValue);
    
    document.getElementById('alert').innerHTML = "";
    document.getElementById('testObject').style.backgroundColor = 'rgb(' + r +',' + g + ',' + b + ')';
    }
    
});