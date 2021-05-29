/*   Modifica la funció 'a()' per a reemplaçar la promesa per aync/await:

function b() {
   // tasques asíncrones , que triguen una estona..
}

funtion a() {
   // Ens esperem que la funció b acabi
   b().then() = > {
         doMoreWork();
   }
}
*/


function b() {
    // tasques asíncrones , que triguen una estona..

}

async function a() {
    // Ens esperem que la funció b acabi
  const b = await b(); 
  doMoreWork(); 
}

a();