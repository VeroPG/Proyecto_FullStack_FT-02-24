# Proyecto Final FullStack
## _TIENDA ONLINE - PRUEBA TÉCNICA FULLSTACK WEB DEVELOPMENT_

Proyecto de desarrollo de una tienda online implementando tanto el backend como el frontend.

Puedes ver la aplicación desplegada [aquí](/)
![image 1_1027](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/7f6b4502-45f0-4695-9359-051d1f27dc97)

Requisitos:
-  Mostar un listado de artículos dividido en 10 por página, con botones de navegación.
-  Cada artículo será mostrado en una tarjeta que deberá contener los siguientes datos:
nombre, relevancia y precio.
- Botones para ordenar los artículos por nombre, relevancia o precio tanto de manera ascendente como descendente. Los datos siempre se mostrarán ordenados de 10 en 10.
- Al pinchar en un artículo se mostrarán tanto los datos del producto como los de su
fabricante. Los fabricantes tendrán un nombre, un CIF y una dirección.
- La información de los artículos y sus fabricantes deberá ser guardada en una base de
datos.
- Habrá un buscador que permitirá buscar por el nombre del artículo y/o del
fabricante.

## Tecnologías utilizadas
- [React](https://reactjs.org/) - React single page application
- [Vite](https://vitejs.dev/) - Herramienta de automatización de proyectos
- [Routing](https://reacttraining.com/react-router/web/guides/philosophy) Routing done using React Router
- [Sass](https://sass-lang.com) -  Preprocesador de CSS 
- [NodeJS](https://nodejs.org/en) - Entorno de ejecución.
- [ExpressJS](https://expressjs.com/) - Framework de desarrollo.
- [Mongo Atlas](https://www.mongodb.com/es/atlas) -  Plataforma de datos multicloud
- [Mongoose](https://mongoosejs.com/) -   Biblioteca de modelado de datos orientada a objetos para MongoDB y NodeJS
- Middlewares Dev: Morgan y manage404 para seguimiento de logs y gestión de errores.
- Postman para probar rutas y conexiones.
- Trello con metodología Agile Scrum.
- Git y Github.

  
![images](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/4c21ede1-857c-46f5-a733-843400e916c9)


## Setup

1. Clona el repositorio. En la carpeta server (carpeta raiz) ejecuta e instala las dependencias. Ejecuta el script del seeder para cargar los datos en la BBDD.

```sh
npm i
npm run feed_db
npm run feed_products_db

```

3. Entra en la carpeta cliente e instala dependencias. Este proyecto tiene tanto el back como el front unificados.

```sh
cd client
npm i
```

3. Levanta primero el servidor y despues el cliente desde una terminal abierta en cada carpeta.

```sh
npm run server
npm run client
```

Tendrás que incluir tus credenciales  de Mongo Atlas en el archivo .env

## Capturas de la APP

![Captura de pantalla 2024-05-14 093252](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/9d77ccb0-85e6-4008-8659-67a6b0517c0c)
![Captura de pantalla 2024-05-14 093904](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/f6e32227-ee3e-4445-8163-19ce40751fac)
![Captura de pantalla 2024-05-14 093852](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/5bd89ce6-fa55-4c76-9577-c88717809653)
![Captura de pantalla 2024-05-14 093842](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/902c0650-33a9-49db-84be-f4c6eae3074e)
![Captura de pantalla 2024-05-14 093654](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/67b3c13b-745e-4b36-bcdb-55af2700e318)
![Captura de pantalla 2024-05-14 093641](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/7df129a9-045d-40c7-9ad4-71e5f69aea80)
![Captura de pantalla 2024-05-14 093344](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/e37c6bbd-d340-49f4-9349-3b93fc10c946)
![Captura de pantalla 2024-05-14 093300](https://github.com/VeroPG/Proyecto_FullStack_FT-02-24/assets/59848697/c38895cd-e904-44f5-a6e3-8e14a92dc478)
