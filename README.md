# 🎬 La Era del Hielo - Landing Page

Landing page responsiva de **La Era del Hielo** creada con HTML, CSS, Bootstrap y Next.js.

## ✨ Características

✅ **Responsive Design** - Se adapta a todos los dispositivos (móvil, tablet, desktop)  
✅ **Navbar Fija** - Barra de navegación con 3 enlaces principales  
✅ **Banner Principal** - Imagen de fondo con título centrado y botón "Ver Tráiler"  
✅ **Sección de Sinopsis** - Información completa sobre la película  
✅ **Carrusel Bootstrap** - Galería de 5 imágenes con controles de navegación  
✅ **Efectos Visuales** - Animaciones y efectos hover profesionales  
✅ **Footer Estilizado** - Créditos y información adicional  

## 📋 Requisitos Cumplidos

### 1. Estructura y Bootstrap (30 puntos) ✅
- ✅ Usa Bootstrap 5.3.8
- ✅ Estructura responsive con `container`, `row` y `col`
- ✅ Navbar fija en la parte superior con 3 enlaces (Inicio, Información, Galería)

### 2. Sección de Presentación (10 puntos) ✅
- ✅ Banner principal con imagen de fondo
- ✅ Título grande y centrado ("La Era del Hielo")
- ✅ Botón "Ver Tráiler" con efecto hover que enlaza a YouTube

### 3. Sección de Información (10 puntos) ✅
- ✅ Sinopsis completa de la película
- ✅ Carrusel Bootstrap con 5 imágenes

---

## 🚀 Deployment en Render

### Opción 1: Deployment Automático (Recomendado)

1. Sube este repositorio a GitHub
2. Ve a [Render.com](https://render.com)
3. Crea una nueva "Web Service"
4. Conecta tu repositorio de GitHub
5. Selecciona:
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Environment**: Node
6. Haz clic en "Create Web Service"
7. ¡Listo! Tu sitio estará en vivo en aproximadamente 3-5 minutos

### Opción 2: Usando render.yaml

Si tu repositorio contiene el archivo `render.yaml` en la raíz, Render lo detectará automáticamente y usará esa configuración.

---

## 💻 Desarrollo Local

### Requisitos
- Node.js 18+ 
- pnpm (o npm/yarn)

### Instalación y Ejecución

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Ejecutar en producción
pnpm start
```

El sitio estará disponible en `http://localhost:3000`

---

## 📁 Estructura del Proyecto

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx          # Landing page principal
│   ├── layout.tsx        # Layout raíz con metadatos
│   └── globals.css       # Estilos globales
├── public/               # Archivos estáticos
├── package.json          # Dependencias del proyecto
├── render.yaml           # Configuración para Render
├── next.config.mjs       # Configuración de Next.js
└── tsconfig.json         # Configuración de TypeScript
```

---

## 🎨 Tecnologías Utilizadas

- **Next.js 16** - Framework React
- **Bootstrap 5.3** - Framework CSS responsive
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Utilidades CSS (complementario)

---

## 📸 Vista Previa

La landing page incluye:
- Navbar con logo y 3 navegación fija
- Banner hero con imagen de fondo y botón CTA
- Sección de información con imagen y sinopsis
- Carrusel con múltiples imágenes de la película
- Footer con créditos

---

## 🔗 Enlaces

- **Ver Tráiler**: [YouTube - Ice Age Trailer](https://www.youtube.com/watch?v=OYaAYy0RqKs)
- **Película Original**: IMDB - The Ice Age
- **Estudio**: Blue Sky Studios

---

## ✅ Checklist de Requisitos

- [x] Estructura HTML + Bootstrap responsive
- [x] Container, row y col correctamente implementados
- [x] Navbar fija con 3+ enlaces
- [x] Banner con imagen de fondo y título centrado
- [x] Botón "Ver Tráiler" con enlace funcional a YouTube
- [x] Efectos hover en botón
- [x] Sección de sinopsis
- [x] Carrusel Bootstrap con imágenes
- [x] Diseño responsivo (móvil, tablet, desktop)
- [x] Deployable en Render

---

## 📝 Licencia

Este proyecto es educativo. Las imágenes son de fuentes públicas y se usan con fines de demostración.

---

## 👨‍💻 Autor

Creado con ❤️ usando v0, HTML, CSS y Bootstrap.

**¡Disfruta de La Era del Hielo!** ❄️
