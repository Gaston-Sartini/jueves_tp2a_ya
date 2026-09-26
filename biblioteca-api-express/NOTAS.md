1. Se instaló "express": "^5.2.1".
2. Empieza con ^ que significa que se va a actualizar todas las versiones dentro del "5." (que no rompe compatibilidad).
La versiones MAJOR no puede variar la MINOR y PATCH si.

3. PUT es idempotente y PATCH no.
En una solicitud PUT se manda un objeto armado. Si mando 10 veces van a ser las 10 veces el mismo objeto.
Por otro lado, en una solicitud PATCH puedo mandar a que se actualiza una propiedad del objeto y cambie en un valor. En este caso si hago 10 veces la peticion, por cada vez, el objeto va a cambiar la propiedad. Al final si se comparan los 10 objetos van a tener todos esa propiedad diferente.