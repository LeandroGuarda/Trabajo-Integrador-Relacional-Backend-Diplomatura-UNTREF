PROYECTO INTEGRADOR: CRUD con Node.js y MySQL

 La aplicación permitirá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos relacional, utilizando el archivo trailerflix.json como referencia para diseñar el modelo de datos.

 1-
 Diseño de la base de Datos:
 La base de datos se creo utilizando la plataforma dbdiagram.io. Una vez diseñada, se exportaron los script en formato .sql y se ejecutaron en MySQL WorkBench.
 Mediante IA se cargaron los datos contenidos en el archivo .json.

 Creacion de Base de Datos:

 La base de datos creada presenta una estructura de 6 tablas:

1-Table: contenidos
Columns:
id bigint AI PK 
titulo varchar(100) 
gen varchar(50) 
poster varchar(255) 
duracion int 
id_categoria bigint 
trailer varchar(255) 
temporadas varchar(10) 
resumen text

2 - Table: Actores
Columns:
id bigint AI PK 
nombre varchar(100) 
apellido varchar(100)

3- Table: contenido_actores
Columns:
id_contenido bigint PK 
id_actor bigint PK

4-Table: contenido_generos
Columns:
id_contenido bigint PK 
id_genero bigint PK

5- Table: generos
Columns:
id bigint AI PK 
nombre varchar(50)

6 - Table: categorias
Columns:
id bigint AI PK 
nombre varchar(50)

Relaciones en la Base de Datos:

Contenido y Categorias:

. Relación: Uno-a-Muchos
. Descripción: Cada contenido pertenece a una categoría específica, y cada categoría        puede incluir múltiples contenidos.
- Detalles de la Relación:
. Categorias.hasMany(Contenido, { foreignKey: 'id_categoria', sourceKey: 'id' })
. Contenido.belongsTo(Categorias, { foreignKey: 'id_categoria', targetKey: 'id' })

Contenido y Actores

. Relación: Muchos-a-Muchos
. Descripción: Un contenido puede incluir varios actores, y cada actor puede aparecer en varios contenidos.
- Detalles de la Relación:
Contenido.belongsToMany(Actor, { through: ContenidoActores, foreignKey: 'id_contenido' })
Actor.belongsToMany(Contenido, { through: ContenidoActores, foreignKey: 'id_actor' })

Contenido y Generos

. Relación: Muchos-a-Muchos
. Descripción: Cada contenido puede estar asociado a múltiples géneros, y cada género puede incluir varios contenidos.
- Detalles de la Relación:
. Contenido.belongsToMany(Genero, { through: ContenidoGeneros, foreignKey: 'id_contenido' })
. Genero.belongsToMany(Contenido, { through: ContenidoGeneros, foreignKey: 'id_genero' })

ContenidoActores y Contenido/Actor

. Relación: Pertenece a (Many-to-One)
. Descripción: La tabla ContenidoActores actúa como tabla intermedia para relacionar contenidos y actores de manera eficiente.
- Detalles de la Relación:
. ContenidoActores.belongsTo(Contenido, { foreignKey: 'id_contenido' })
. ContenidoActores.belongsTo(Actor, { foreignKey: 'id_actor' })

ContenidoGeneros y Contenido/Genero

. Relación: Pertenece a (Many-to-One)
. Descripción: La tabla ContenidoGeneros permite la relación de múltiples géneros para cada contenido.
- Detalles de la Relación:
. ContenidoGeneros.belongsTo(Contenido, { foreignKey: 'id_contenido' })
. ContenidoGeneros.belongsTo(Genero, { foreignKey: 'id_genero' })


ESTRUCTURA DEL PROYECTO:

/json
  - trailerflix.json
/README.md
/app.js
/conexion/
/controllers/
- contenidoController.js
  - database.js
/models/
    - contenido.js
    - categoria.js
    - generos.js
    - actor.js
    - contenidoGeneros.js
    - contenidoActores.js
    - contenidoBusqueda.js
    - relaciones.js
/routes/
    - contenidoRoutes.js
    
Detalles de estructura:
/json
  - trailerflix.json: El archivo json contiene la informacion utilizada en la base de datos.

/app.js: Archivo principal de la aplicación donde se configuran las rutas, la conexión con la base de datos

/conexion/database.js: Archivo para establecer la conexión con MySQL.

/models/
    - contenido.js: Modelo para gestionar contenido,
    - categoria.js: Modelo para gestionar categorias,  
    - generos.js: Modelos para gestionar generos,
    - actor.js: Modelo para gestionar los actores,
    - contenidoGeneros.js: Modelo para las relaciones en contenido y genero,
    - contenidoActores.js: Modelo para las relaciones entre contenido y actores,
    - relaciones.js: Modelo para establecer las relaciones entre las tablas.

/controllers/
- contenidoController.js: Contiene la logica del CRUD

INSTALACION Y USO DEL PROYECTO:

Dependencias utilizadas:

express: Framework web para Node.js que facilita la creación de aplicaciones web y APIs.
morgan: Middleware para registrar las solicitudes HTTP en la consola, útil para el desarrollo y la depuración.
mysql2: Cliente MySQL para Node.js que permite interactuar con la base de datos MySQL.
sequelize: ORM (Object-Relational Mapping) para Node.js que facilita la interacción con bases de datos relacionales.
nodemon: Herramienta que monitoriza los cambios en el código fuente de una aplicación Node.js y reinicia automáticamente el servidor cuando detecta modificaciones, lo que facilita el desarrollo al evitar la necesidad de reiniciar manualmente la aplicación después de cada cambio.

