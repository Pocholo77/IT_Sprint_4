/*
Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 
- Usar .forEach() per obtenir aquest array.
- Usar .map() per obtenir aquest array.

var tasks = [
{
   'name' : 'Start React web',
   'duration' : 120
},
{
   'name' : 'Work out',
   'duration' : 60
},
{,
   'name' : 'Procrastinate on facebook',
   'duration' : 240
}
]; */

var tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
    ];

    /* let tasksNames = tasks.map(( )=>{ tasks.forEach( element =>{ return element.name;}) });     ---> Nu sé si esta es la idea */


    let tasksNames_forEachMethod = [];

    tasks.forEach( element => {
      tasksNames_forEachMethod.push ( element.name);
    });

    console.log(tasksNames_forEachMethod);

    let tasksNames_mapMethod = tasks.map( element => element.name );

    console.log(tasksNames_mapMethod);