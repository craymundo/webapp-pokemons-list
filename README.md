# webapp-pokemons-list

Proyecto en VUE utilizando Clean Architecture.

Esta SPA esta construido bajo el concepto de una Arquitectura limpia.

![alt text](https://miro.medium.com/max/4800/1*D1EvAeK74Gry46JMZM4oOQ.png)

La implementación de la arquitectura en el proyecto se encuentra en la siguiente ruta libs/core/src. En donde observaremos la siguiente estructura de carpetas:

- app: web en vue con typescript
- libs/core/: 
    - data
    - domaint/entity
    - usecases
        - interactor
        - repository


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
