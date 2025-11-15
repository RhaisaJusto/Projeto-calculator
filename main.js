

function insertToDisplay (data) {
   document.querySelector ('#display').value += data;
}

function clean (){
       document.querySelector ('#display').value = ' ';
}

function back (){
    const display = document.querySelector ('#display');
    display.value = display.value.slice(0, -1);
}

function result () {
       const display = document.querySelector ('#display');
    try {
      display.value = eval (display.value)
   
    } catch (error) {
    display.value = 'Erro'
    
    }
 }

 function percentage () {
   let value = document.getElementById('display').value;
   if (value) {
      document.getElementById ("display").value = eval (value) / 100;
   }
 }

 // variável de cor, não usei
var corApagar = '#db373fff';

var corIgualdade = '#fac655ff';

var corOperacoes = '#db9437ff';