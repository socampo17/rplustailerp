# Rplustailerp

Generic ERP project created with React+vite architecture and tailwindcss.

## ⚠️ El paso que no se te puede olvidar

Como configuramos el .gitignore para que no subiera tus variables de entorno (los archivos .env), la aplicación podría romperse o no conectar a tus servicios (como Firebase o tu API) si solo haces el npm install.

Para que te funcione al 100%, sigue estos pasos en la nueva PC:

Ejecuta npm install para descargar las dependencias.

Crea un archivo nuevo llamado .env (o .env.local) en la raíz del proyecto.

Copia el contenido del archivo .env.example que dejamos en el repositorio y rellena los valores reales (tus llaves, credenciales, etc.).

Ejecuta el comando de desarrollo (normalmente npm run dev si usas Vite, o npm start si usas Create React App) y ¡listo!
