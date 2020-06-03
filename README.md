# color-cayena-front

Aplicacion en ReactJS, Webpack, Material-ui. (Reactjs v16.8.6. y webpack v4.42.1.)

Para el coloreado se utilizó un modelo caffe pre-entrenado producto de la investigacion <i><a href='https://github.com/richzhang/colorization'>Automatic colorization using deep neural networks. "Colorful Image Colorization." In ECCV, 2016.</a></i> de la autoria de <a href='https://github.com/richzhang'>Richand Zhang</a> y cuyos recursos estan disponibles por medio del licenciamiento <strong>BSD 2-Clause "Simplified" License</strong>.

Copyright (c) 2016, Richard Zhang, Phillip Isola, Alexei A. Efros
All rights reserved.

Este proyecto, llamado Color Cayena,  tiene una naturaleza academica en el marco de trabajo de grado para pregrado y su objetivoes el uso de herramientas de Computer Vision para el coloreado y restauración de imagenes historicas en la ciudad de Barranquilla, Colombia. 


### Pre-requisitos

Version de node v12.14.0, verificar con el siguiente comando:
```
node --version
```


### Instalación


Para la instalacion se requiere seguir los siguientes pasos

Instalar los modulos de node

```
npm install
```


Para construir y correr la aplicacion se debe ejecutar el siguiente comando

```
npm run start
```
debido a la configuración de webpack este comando activará la escucha de los cambios y correrá el servidor expuesto en localhost:3000


## Authors
Andres Pérez y Dinorah Pérez