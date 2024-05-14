//PRIMERO EN CONSOLA CREAR EL PACKAGE CON NPM INIT y ENTER


// obtener los datos
const data = require("./travels.json");
// console.log(data);

const puerto = 4000;

// crear el servidor
const { createServer } = require("node:http");

const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    let title = "";
    let h2 = "";
    let descripcion = "";
    let precio = "";
    let img = "";

    if (req.url === "/") {
        data.forEach((viaje) => {
            if (viaje.lugar == "🏠") {
                title = viaje.lugar;
                h2 = viaje.nombre;
                descripcion = viaje.descripcion;
                precio = viaje.precio;
                img = viaje.img;
            }
        });
    } else if (req.url === "/egipto") {
        data.forEach((viaje) => {
            if (viaje.lugar == "Egipto") {
                title = viaje.lugar;
                h2 = viaje.nombre;
                descripcion = viaje.descripcion;
                precio = viaje.precio;
                img = viaje.img;
            }
        })
    } else if (req.url === "/maldivas") {
        data.forEach((viaje) => {
            if (viaje.lugar == "Maldivas") {
                title = viaje.lugar;
                h2 = viaje.nombre;
                descripcion = viaje.descripcion;
                precio = viaje.precio;
                img = viaje.img;
            }
        })
    } else if (req.url === "/nuevayork") {
        data.forEach((viaje) => {
            if (viaje.lugar == "Nueva York") {
                title = viaje.lugar;
                h2 = viaje.nombre;
                descripcion = viaje.descripcion;
                precio = viaje.precio;
                img = viaje.img;
            }
        })
    } else if (req.url === "/venecia") {
        data.forEach((viaje) => {
            if (viaje.lugar == "Venecia") {
                title = viaje.lugar;
                h2 = viaje.nombre;
                descripcion = viaje.descripcion;
                precio = viaje.precio;
                img = viaje.img;
            }
        })
    } else if (req.url === "/vietnam") {
        data.forEach((viaje) => {
            if (viaje.lugar == "Vietnam") {
                title = viaje.lugar;
                h2 = viaje.nombre;
                descripcion = viaje.descripcion;
                precio = viaje.precio;
                img = viaje.img;
            }
        })
    } else {

        title = "Error 404";
        h2 = "Vaya, este destino no figura en nuestro catalogo.";
        img = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

    let menu = "";
    data.forEach((viaje) => {
        menu += `<a href="/${viaje.id}">${viaje.lugar}</a>`
    })

    res.write(`
  <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
}
h2 {
    margin: 1rem 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    font-style: italic;
    color: steelblue;
}
p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
}
img {
    width: 100%;
}
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: steelblue;
    height: 4rem;
}
a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 1rem;
    padding: 0.5rem;
    border: 1px solid white;
    border-radius: 5px;
    transition: 0.3s;
}
a:hover {
    background-color: white;
    color: darkblue;
}
    </style>
</head>
<body>
    <header>
<h1>Alejandro's travels</h1>
<nav>${menu}</nav>
<h2>${h2}</h2>
<p>${descripcion}</p>
<p>${precio}</p>
<img src="${img}" alt="${descripcion}"/>
    </header>
</body>
</html>`);
    res.end();
});

server.listen(puerto, () => {
    console.log(`server on http://localhost:${puerto}`);
});
