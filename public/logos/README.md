# Logos institucionales

Los tres archivos PNG de esta carpeta son **marcadores transparentes**.
Sustitúyelos por los logos definitivos conservando exactamente estos nombres:

| Archivo        | Institución                                                             |
| -------------- | ----------------------------------------------------------------------- |
| `unach.png`    | Universidad Autónoma de Chiapas                                           |
| `cecocise.png` | Centro de Estudios para la Construcción de la Ciudadanía y la Seguridad   |
| `mddh.png`     | Maestría en Defensa de los Derechos Humanos                               |

## Requisitos del archivo

- Formato **PNG con canal alfa** (32 bits).
- Fondo **completamente transparente**: sin recuadro blanco ni relleno.
- Sin marcos, sombras ni márgenes incorporados a la imagen.
- Proporción original del logo, sin deformar ni recortar.
- Resolución recomendada: 600 px o más en el lado mayor.

## Cómo se aplica el color

La presentación **no modifica el archivo**. El tono cromático se resuelve por
CSS en `src/index.css`:

```css
[data-theme='light'] .institutional-logo {
  filter: grayscale(1) brightness(0.55) contrast(1.05);
}

[data-theme='dark'] .institutional-logo {
  filter: grayscale(1) brightness(2.6) contrast(0.95);
}
```

Como el filtro actúa solo sobre los píxeles opacos, la transparencia se
conserva y nunca se genera una caja de fondo alrededor del logo.

Si un logo definitivo ya viene en un tono que no requiere conversión, basta con
excluirlo del filtro añadiendo una regla específica para ese archivo.

## Comportamiento

Los logos son **estáticos** en toda la presentación: no rotan, no se escalan al
pasar el cursor, no flotan ni se desplazan. Su posición es fija.
