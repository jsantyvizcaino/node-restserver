# SERVIDOR RESTfull con nodeJS

> para que su aplicacion funcione correctamente recuerde instalar los paquetes


```
npm install

```

La estructura de arbol de la aplicacion es

- node_modules
- server
    - config
        - config.js
    - models
        - categorias.js
        - producto.js
        - usuario.js
    - routes
        - categorias.js
        - producto.js
        - usuario.js
    - server.js
- .gitignore
- package-lock.json
- package.json
- README.md


## FUNCIONAMIENTO

El presente programa funciona como un sistema que se conecta a la motro de base de datos MongoDb en la cual hay una base de datos, la cual posee las siguientes tablas

| Usuario | Categoria | Producto |
| --------- | --------- | --------- |
| nombre | nombre | nombre |
| email |  | precioUni |
| password |  | disponible |
| img | | |
| role | | |
| estado | | |
| google | | |


Cada Schema (tabla) de la base de datos posee albergados en el sistema sus respectivos metodos 

|TABLA|get|post|delete|put|
| --------- | --------- | --------- | --------- | --------- |
|usuario|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
|categoria|:heavy_check_mark:| | | |
|producto|:heavy_check_mark:| | | | 


Con la ayuda de estos metodos, se obtiene el crud para los usuarios y asi se obtiene un sitema funcional que permite trabajar node js junto con una base de datos