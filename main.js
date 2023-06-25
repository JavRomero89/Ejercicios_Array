console.log("-----STRINGS-----");
let Javier = "Soy un noob"
console.log(Javier);

Javier = "No entiendo nada"
console.log(Javier);

console.log(Javier[5]);

Javier[0] = "A"
console.log(Javier);

console.log("-----ARRAYS-----");

let classNames = ["Santiago", "Morales", "Otniel", "Oscar", "Javier"]
console.log(classNames[4]);

classNames[5] = "Javier"
console.log(classNames);

let personalInfo = ["Javier", "Romero Castro", "Callao", 34]
alert(`${personalInfo[0]} ${personalInfo[1]} nacido en ${personalInfo[2]} ha conseguido convertirse en desarrolador web a sus ${personalInfo[3]} años.`);

console.log("-----OBJETOS-----");

let cualquiera ={
    name: 'Harry',
    iLikeJs: true,
    favFilms: ['Peli1','Peli2','Peli4']
}

console.log(cualquiera);

cualquiera.favFilms[0]='Ferdinand'
console.log(cualquiera);

cualquiera.surName='Potter'
console.log(cualquiera);

delete cualquiera.favFilms
console.log(cualquiera);  