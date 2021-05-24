function reversor(...phrase){
    let stringedPhrase = phrase.toString();
    let reversedPhrase = stringedPhrase.split('').reverse();

    console.log(reversedPhrase);
}

reversor('Hola que tal?');