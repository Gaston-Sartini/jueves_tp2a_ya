// Cambie de un export con todas las funciones a tener que ponerle export a cada function. import no necesite require pero si from y el ".js" fue obligatorio.
import { sumar, promedio } from "./matematica.js";
console.log("Suma de 4 y 5: ",sumar(4,5));
console.log("Promedio de 10, 20 y 30 :", promedio([10, 20, 30]));