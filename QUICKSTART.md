# 🚀 Inicio Rápido - Landing Page La Era del Hielo

## ⏱️ 5 Minutos para Tener tu Sitio en Vivo

### Opción 1: Deploy Inmediato en Render (RECOMENDADO)

```bash
# 1. Sube a GitHub
git add .
git commit -m "Landing page lista"
git push origin main

# 2. Ve a render.com → New → Web Service
# 3. Conecta tu repositorio
# 4. Usa estos valores:
#    - Build: pnpm install && pnpm build
#    - Start: pnpm start
# 5. Click "Create" → ¡Listo en 2 minutos!
```

📱 Tu sitio estará en: `https://tu-proyecto.onrender.com`

---

### Opción 2: Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Abrir en navegador
# http://localhost:3000
```

---

## 📋 Checklist Previo a Deployment

- [ ] Confirmaste que `pnpm build` funciona sin errores
- [ ] Tienes GitHub configurado
- [ ] Tienes cuenta en Render
- [ ] El archivo `render.yaml` está en la raíz

---

## 📁 Archivos Clave

```
📦 Proyecto
├── 📄 app/page.tsx          ← Landing page (422 líneas)
├── 📄 app/layout.tsx         ← Metadatos y config
├── 📄 render.yaml            ← Config para Render
├── 📄 README.md              ← Documentación completa
├── 📄 DEPLOYMENT_RENDER.md   ← Guía paso a paso
├── 📄 CHECKLIST.md           ← Requisitos completados
└── 📄 package.json           ← Dependencias
```

---

## 🎯 Requisitos Completados: 50/50 ✅

✅ Bootstrap responsive (30 pts)
✅ Navbar fija + 3 enlaces
✅ Banner con imagen de fondo
✅ Botón "Ver Tráiler" → YouTube
✅ Sinopsis y carrusel (10 pts)
✅ Diseño mobile-first
✅ Pronto para Render

---

## 🔗 URLs Importantes

- **YouTube Tráiler**: https://www.youtube.com/watch?v=OYaAYy0RqKs
- **Render**: https://render.com
- **Documentación Render**: https://render.com/docs

---

## 💡 Próximos Pasos Post-Deploy

1. Personaliza los colores en `app/page.tsx`
2. Cambia textos y descripciones
3. Agrega tu propio dominio
4. Integra Analytics

---

## ❓ Problemas?

Revisa estos archivos en orden:
1. **DEPLOYMENT_RENDER.md** - Guía completa
2. **README.md** - Documentación
3. **CHECKLIST.md** - Requisitos

---

## 🎬 ¡Ya Está! 

Tu landing page de La Era del Hielo está lista. 

**Próximo paso**: [Leer DEPLOYMENT_RENDER.md](./DEPLOYMENT_RENDER.md) para deployar.

