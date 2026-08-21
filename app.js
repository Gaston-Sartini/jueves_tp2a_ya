import { readFile } from "node:fs";
// console.log(`🚀 ~ readFile:`, readFile)
// console.log(`🚀 ~ fs:`, fs)

// decirHola("lola", "perez")

function decirHola(nombre, apellido) {
  console.log(`hola ${nombre}, ${apellido}`);
}
// function decirChau(nombre, apellido) {
//      console.log(`chau ${nombre}, ${apellido}`)
// }

// console.log(decirHola("osvaldo", "ojeda"))

// decirHola("lolo", "perez")

function saludar(nombre, apellido, fn) {
  return fn(nombre, apellido);
}

// saludar("ricky", "martin", decirHola)
// saludar("ricky", "martin", decirChau)

//  const decirChau=(nombre, apellido)=>`chau ${nombre}, ${apellido}`

// decirChau("chakyra", "Perez")

const decirChau = (nombre, apellido) => {
  return `chau ${nombre}, ${apellido}`;
};
//  decirChau =0
// console.log(decirChau("chakyra1", "Perez"));
// console.log(decirChau("chakyra2", "Perez"));
// console.log(decirChau("chakyra3", "Perez"));
// console.log(decirChau("chakyra4", "Perez"));
// console.log(decirChau("chakyra5", "Perez"));

// console.log(1);

// setTimeout(()=> {
//      console.log(2)
// });

// callback
readFile("package.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  //   console.log(`🚀 ~ data:`, data);
});

// console.log(3);

// promesas



async function pedidoYa(url) {
  try {
    const data = await fetch(url);
    const info = await data.json();
    console.log(`🚀 ~ pedidoYa ~ data:`, info);
  } catch (error) {
    console.log(`🚀 ~ pedidoYa ~ error:`, error);
  }
}

pedidoYa("https://thesimpsonsapi.co/api/characters/1");

fetch("https://thesimpsonsapi.com/api/characters/2")
  .then((data) => data.json())
  .then((info) => {
     info.id=20
    console.log(info);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(3);
