<p align="center">
  <img src="https://i.postimg.cc/VkW50JZS/oie-png-1.png" alt="Logo_tortudev">
</p>

# Manipulación del Dom Básica_ Ejercicio de elección de Pastilla 💊 roja o Azul Matrix        

## Lenguajes empleados:
   
###
* **HTML**
* **JAVASCRIPT**

##
Ejercicios básicos pertenecientes a la escuela de JavaScript, enfocados principalmente en el manejo del **DOM**, y la **API** eventListener().

En la cual al pasar por encima(mouse) de los botones de elección, el fondo se pone de colores de manera random.

A su vez, presenta unas interesantes elecciones de los caminos para salir o quedarse en la matrix 😲. Animate!!! 
```
btn.addEventListener('mousemove', () => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
      });
```