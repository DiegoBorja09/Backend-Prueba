#Prueba Tecnica Backend
##instalacion
Luego de clonar el repositorio ejecuta el comando 
*npm install*
para instalar las dependencias del proyecto, en el archivo .env debes escribir las variables que el programa va a utilizar que son:
*DB_HOST* : host donde se escuentra la base de datos
*DB_PORT* : Puerto donde se escuentra la base de datos
*DB_USERNAME* : el usuario con acceso a la base de datos que utilice
*DB_PASSWORD* : la contraseña para acceder a las bases de datos
*DB_NAME* : el nombre de la base de datos que vamos a utilizar
*PORT* : el puerto ya estara por defecto pero lo puedes cambiar por el que desea recuerda que el puerto es donde va a correr nuestro backend

para correr el proyecto en produccion debes ejecutar el comando
*npm run start*

si quieres ejecutar el proyecto como desarrollador utiliza el comando 
*npm run dev*

si no tenemos ningun error por consola debe mostrar estos mensajes
*Listening: http://localhost:4000*
*conexion exitosa*

###Descripcion del codigo

en esta seccion vamos a mostar como esta constituido nuestro proyecto con sus diferentes carpetas y explicamos como funciona nuestro codigo

[![CARPETAS](https://i.postimg.cc/fLsWyBsd/Captura.jpg)](https://postimg.cc/GBMnSPH3)

como vemos en la carpeta tenemos diferentes carpetas acontinuacion explicaremos que contiene cada una.
en el archivo index.js configuramos nuestra app importamos los diferente librerias que utilizaremos como express y cors.
[![2.jpg](https://i.postimg.cc/4yN97JGp/2.jpg)](https://postimg.cc/0MFQh1bN)

es importante que configuremos en origin que es la direccion donde le vamos a hacer peticiones a nuestro. backend por defecto estara localhost:4200 que es donde corre el frontend que utilizaremos desarrollado en angular .

en la carpeta *config* tendremos 2 archivos una llamado *database.js* que tiene los metodos para conectar nuestra base de datos y hacer consultar ademas tambien maneja los diferentes errores que podemos obtener tambien tendremos otro archivo llamado *index.js* en el cual configuramos nuestras variables de entorno que luego utilizamos para conectar la base de datos.

en la carpeta de *services* encontraremos un archivo llamado *user.js* donde 
codificamos todos los metodos que utilizaremos en el proyecto como obtener todos los usuarios, obtener usuario por su id, crear usuario entre otros metodos que se encargan de pasar una consulta a nuestra base de datos y obtener lo que necesitamos.

en la carpeta de routes tendremos un archivo llamado routes donde se crearon las rutas con sus diferentes metodos como *GET, POST, PUT Y DELETE* que invocan a nuestros servicios y gestionan las peticiones de el Frontend.