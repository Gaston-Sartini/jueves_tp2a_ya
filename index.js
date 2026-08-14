// console.log(`🚀 ~ nombre:`, nombre)
// var nombre="osval"
// var nombre= "lolo"
// console.log(`🚀 ~ nombre:`, nombre)

// // console.log(`🚀 ~ nombre:`, nombre)
// let nombre="pepe"
// nombre="lolo"
// // let nombre=""
// console.log(`🚀 ~ nombre:`, nombre)

// console.log(`🚀 ~ dni:`, dni)
// const dni=987654
// // dni=764576
// // const dni=234567
// console.log(`🚀 ~ dni:`, dni)

// tipos de datos

// // datos primitivos
// let str=`Lolo`
// console.log(`🚀 ~ str:`,typeof str)

// let num=6
// let num2="6"
// console.log(`🚀 ~ num:`,typeof num)
// console.log(`🚀 ~ num:`, num===num2)

// let und=undefined
// console.log(`🚀 ~ und:`,typeof und)

// let big= 9876n
// console.log(`🚀 ~ big:`,typeof big)

// let nl=null
// console.log(`🚀 ~ nl:`, typeof nl)

let date= new Date()
console.log(`🚀 ~ date:`, date)

// let sym= Symbol("pepe")
// let sym2= Symbol("pepe")
// console.log(`🚀 ~ sym2:`, sym2)
// console.log(`🚀 ~ sym:`, sym)
// console.log(`🚀 :`, sym===sym2)

// let bolean=false
// console.log(`🚀 ~ bolean:`, typeof bolean)
// console.log(`🚀 ~ bolean:`,  bolean==0)

// datos complejos

//  const array=[1, "pepe"]
// console.log(`🚀 ~ array:`,typeof array)
// // array="hola"
// array.push("hola")
// console.log(`🚀 ~ array:`, array[1])

// const obj={
//      id:1,
//      nombre:"osval"
// }
// let data="id"
// console.log(`🚀 ~ obj:`, typeof obj)
// console.log(`🚀 ~ obj:`,  obj["id"])
// console.log(`🚀 ~ obj:`,  obj[data])
// console.log(`🚀 ~ obj:`,  obj.nombre)

// const data = [1, "chakyra", 40];

// // let id=data[0]
// // let nombre=data[1]
// // let edad=data[2]
// const [id, nombre, edad] = data;
// console.log(`🚀 ~ id:`, id);
// console.log(`🚀 ~ nombre:`, nombre);
// console.log(`🚀 ~ edad:`, edad);

const data = {
  id: 2,
  nombre: "chayane",
  edad: 50,
  mascotas: ["perro"],
};

// let nombre=data.nombre
// const {nombre, id}=data
// console.log(`🚀 ~ id:`, id)
// console.log(`🚀 ~ nombre:`, nombre)

// let n1=2
// console.log(`🚀 ~ n1:`, n1)
// let n2=n1
// console.log(`🚀 ~ n2:`, n2)
// n2=200
// console.log(`🚀 ~ n2:`, n2)
// console.log(`🚀 ~ n1:`, n1)

// esto no es copia
// const info=data
// info.edad=48

// console.log(`🚀 ~ data:`, data)
// console.log(`🚀 ~ info:`, info)

// const info={
//      id:data.id
// }

// const info={...data}
// info.edad=52
// info.mascotas[0]="gato"
// console.log(`🚀 ~ info:`, info)
// console.log(`🚀 ~ data:`, data)

// const info = JSON.parse(JSON.stringify(data));
// info.mascotas.push("dragon");
// console.log(`🚀 ~ info:`, info);
// console.log(`🚀 ~ info:`, info.id);
// console.log(`🚀 ~ data:`, data);

const info = structuredClone(data)
info.mascotas.push("dragon");
console.log(`🚀 ~ info:`, info)
console.log(`🚀 ~ data:`, data);
