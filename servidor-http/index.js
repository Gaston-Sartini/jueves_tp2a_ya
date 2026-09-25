const http = require("http");
const libros = require("../biblioteca-api/data/libros.json");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log("🚀 ~ url:", url);
    console.log("🚀 ~ method:", method);

    if(method === "GET" && url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ mensaje: "Biblioteca API"}));
    } else if (method === "GET" && url === "/libros"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(libros));
    } else if (method === "POST" && url === "/eco"){
        let body = "";
        let cuerpo = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            try {
                cuerpo = JSON.parse(body);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(cuerpo));                
            } catch (error) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({error: "El body no es un JSON válido"}));                
            }
        });
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Ruta no encontrada"}));
    };
});

server.listen(3000, () => console.log("Servidor en http://localhost:3000"));