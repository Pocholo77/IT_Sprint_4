function calculo(){ 
    let op1 = document.getElementById('num1').value;
    let op2 = document.getElementById('num2').value;
    let cont = 0;
    
    while( cont <= op2){
      let total = op1*cont;
       
      document.getElementById('results').innerHTML = document.getElementById('results').innerHTML += `${op1} * ${cont} = ${total} </br>`;
      cont++;
    }
    
}

function deleteInfo(){
  document.getElementById('results').innerHTML = " ";  
  document.getElementById('num1').value = "";       
  document.getElementById('num2').value = "";

}