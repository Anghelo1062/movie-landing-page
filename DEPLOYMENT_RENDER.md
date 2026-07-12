# 🚀 Guía Completa de Deployment en Render

Esta guía te mostrará cómo deployar la Landing Page de **La Era del Hielo** en Render en menos de 10 minutos.

---

## 📋 Requisitos Previos

1. **Cuenta en Render**: Ve a [render.com](https://render.com) y crea una cuenta gratis
2. **Repositorio GitHub**: Sube este proyecto a GitHub (repositorio público o privado)
3. **Git instalado** en tu computadora

---

## 🔧 Paso 1: Preparar tu Repositorio en GitHub

### Opción A: Si no tienes GitHub configurado aún

```bash
# 1. Inicializa Git (si no lo has hecho)
git init

# 2. Agrega todos los archivos
git add .

# 3. Haz tu primer commit
git commit -m "Inicial: Landing Page La Era del Hielo"

# 4. Agrega el repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/ice-age-landing.git

# 5. Sube los archivos
git branch -M main
git push -u origin main
```

### Opción B: Si ya tienes el repositorio

Solo asegúrate de que todos tus cambios estén pusheados:

```bash
git add .
git commit -m "Landing page lista para deploy"
git push origin main
```

---

## 🌐 Paso 2: Conectar con Render

### 2.1 Abre Render.com

1. Ve a [render.com](https://render.com)
2. Haz clic en **"Sign up"** (o login si ya tienes cuenta)
3. Elige **"Sign up with GitHub"** (más fácil)
4. Autoriza a Render para acceder a tus repositorios

### 2.2 Crea un Nuevo Web Service

1. En el dashboard de Render, haz clic en **"+ New"**
2. Selecciona **"Web Service"**
3. Conecta tu repositorio:
   - Busca **"ice-age-landing"** (o el nombre de tu repo)
   - Haz clic en **"Connect"**

---

## ⚙️ Paso 3: Configura el Deployment

Completa el formulario con estos valores:

| Campo | Valor |
|-------|-------|
| **Name** | `ice-age-landing` (o tu preferencia) |
| **Environment** | `Node` |
| **Build Command** | `pnpm install && pnpm build` |
| **Start Command** | `pnpm start` |
| **Plan** | `Free` ✅ |

### Configuración Visual (si es necesario):

```
Build Command:  pnpm install && pnpm build
Start Command:  pnpm start
Runtime:        Node
Plan:           Free
Region:         cualquiera (por defecto está bien)
```

---

## 🚀 Paso 4: Deploy

1. Haz scroll hasta abajo y verifica todos los datos
2. Haz clic en **"Create Web Service"**
3. ¡Listo! Render comenzará a compilar e deployar tu sitio

### Espera mientras se despliega:

- Render mostrará logs de compilación
- Verás mensajes como "Building..." → "Deploying..." → "Live"
- Esto toma típicamente **2-5 minutos**

---

## ✅ Paso 5: Verifica que tu sitio está en vivo

Cuando veas "Live" con un checkmark verde, tu sitio está online:

```
✓ ice-age-landing  LIVE
https://ice-age-landing.onrender.com
```

Haz clic en la URL o cópiala en tu navegador para ver tu landing page.

---

## 📱 Prueba Responsiveness

Tu sitio debe verse bien en:

1. **Desktop** (1920x1080) - Pantalla completa
2. **Tablet** (768px) - iPad
3. **Mobile** (375px) - iPhone

Abre DevTools (F12) en tu navegador y prueba con los diferentes tamaños.

---

## 🔄 Actualizaciones Posteriores

Después del primer deploy, **cualquier push a GitHub se deployará automáticamente**:

```bash
# Haz cambios en tu código local
# Luego:
git add .
git commit -m "Descripción de cambios"
git push origin main

# En 1-2 minutos verás los cambios en vivo ✨
```

---

## 🐛 Troubleshooting

### ❌ "Build failed"
**Solución**: Revisa los logs de Render. Usualmente es porque falta alguna dependencia. Asegúrate de hacer `pnpm install` localmente antes de pushear.

### ❌ "Application failed to start"
**Solución**: Verifica el archivo `next.config.mjs` y que no haya errores TypeScript. Compila localmente: `pnpm build`

### ❌ "Port error"
**Solución**: Render asigna el puerto automáticamente. No debería ser un problema si usas el start command correcto.

### ❌ "Las imágenes no cargan"
**Solución**: Las imágenes vienen de URLs externas. Si la red es lenta, espera o usa imágenes locales en `/public`.

---

## 📝 Dominio Personalizado (Opcional)

Para usar tu propio dominio (ej: midominio.com):

1. En Render dashboard → tu Web Service
2. Ve a **"Settings"** → **"Custom Domain"**
3. Agrega tu dominio
4. Render te mostrará los registros DNS que debes configurar
5. Configura los registros en tu proveedor de dominio

---

## 🎉 ¡Hecho!

Tu Landing Page de **La Era del Hielo** está ahora deployada y en vivo en Render. 

**Comparte tu URL**:
- La URL será algo como: `https://ice-age-landing.onrender.com`
- Puedes compartirla en redes sociales, proyectos, etc.

---

## 📊 Variables de Entorno (si las necesitas)

Si necesitas agregar variables de entorno (como API keys):

1. En Render dashboard → tu Web Service
2. Ve a **"Environment"**
3. Agrega tus variables
4. Render redeplegará automáticamente

---

## 💡 Tips & Tricks

- **Modo Incógnito**: Si ves cachés antiguos, abre tu sitio en modo incógnito
- **Hard Refresh**: Presiona `Ctrl+Shift+R` (Windows/Linux) o `Cmd+Shift+R` (Mac)
- **Monitoreo**: Render muestra logs en tiempo real - usa esto para debugging
- **Free Plan Limits**: El plan free reinicia después de 15 minutos de inactividad (normal)

---

## 📚 Recursos Útiles

- **Documentación de Render**: https://render.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Bootstrap Docs**: https://getbootstrap.com/docs

---

## ❓ Problemas No Listados

Si encuentras un problema no cubierto aquí:

1. **Revisa los logs en Render** - ve a tu Web Service → "Logs"
2. **Lee el error completamente** - suele indicar la solución
3. **Busca en Stack Overflow**: copia el error exacto en Google

---

## 🎬 Próximos Pasos

Una vez que tu sitio esté deployado:

- Personaliza los colores en `/app/page.tsx`
- Agrega más películas creando nuevas páginas
- Integra un backend (comentarios, ratings, etc.)
- Usa un CMS para actualizar el contenido

---

**¿Necesitas ayuda?** Revisa la documentación de Render o crea un issue en tu repositorio de GitHub.

**¡Disfruta!** ❄️🎬
