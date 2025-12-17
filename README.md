# Oklus — Landing Page (Waitlist)

Landing page de **Oklus** (software dental) con formulario de lista de espera. Los registros se guardan en **Google Sheets** usando un **webhook** (Google Apps Script).

## Tecnologías

- **Astro** (`.astro`) — build estático
- **Tailwind CSS v4** con `@tailwindcss/vite`
- **TypeScript** (tipado en scripts dentro de componentes)
- **Google Apps Script + Google Sheets** (persistencia de la waitlist vía webhook)

## Estructura del proyecto

- `src/pages/index.astro`: landing (entry)
- `src/components/*`: secciones (Hero, Features, WaitlistForm, Header, Footer, etc.)
- `src/layouts/Layout.astro`: layout base (meta tags, header/footer, lightbox)
- `src/styles/global.css`: estilos globales (incluye `@import "tailwindcss";`)
- `src/assets/*`: assets empaquetados (ej: `OklusIcon.svg`)
- `public/*`: estáticos passthrough (imágenes usadas por el sitio)
- `docs/INSTRUCCIONES_GOOGLE_SHEETS.md`: guía paso a paso para configurar Google Sheets + Apps Script
- `src/test/test-webhook.html`: página simple para probar el webhook sin levantar Astro

## Requisitos

- **pnpm**

## Comandos

Desde la raíz del proyecto:

- `pnpm install`: instalar dependencias
- `pnpm dev`: desarrollo en `http://localhost:4321`
- `pnpm build`: build de producción en `dist/`
- `pnpm preview`: previsualizar el build

Nota: si querés usar `pnpm astro check`, Astro puede pedir instalar `@astrojs/check` y `typescript` en este repo.

## Waitlist → Google Sheets (webhook)

El formulario vive en `src/components/WaitlistForm.astro` y hace un `POST` al Web App de Google Apps Script.

- Se envía como `application/x-www-form-urlencoded` usando `URLSearchParams`.
- Usa `fetch(..., { mode: "no-cors" })` para evitar el preflight CORS. Por esto, no se puede leer la respuesta del servidor: si no hay error de red, se asume éxito.
- En Apps Script, los datos llegan en `e.parameter` (no JSON).

### Campos enviados

- `timestamp` (ISO string)
- `email` (requerido)
- `clinicSize` (requerido)
- `clinicName` (opcional)

### Configurar Google Apps Script

Seguí la guía: `docs/INSTRUCCIONES_GOOGLE_SHEETS.md`.

Luego actualizá la URL del webhook en:

- `src/components/WaitlistForm.astro` (constante `WEBHOOK_URL`)
- `src/test/test-webhook.html` (constante `WEBHOOK_URL`, opcional para testing)

### Probar el webhook rápido

1. Abrí `src/test/test-webhook.html` en el navegador.
2. Tocá **Probar Webhook**.
3. Revisá tu Google Sheet: debería aparecer una fila nueva.

## Deploy

Es un sitio estático: ejecutá `pnpm build` y desplegá el contenido de `dist/` en Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.

## Notas (recomendado)

- El webhook es público por diseño. Si querés reducir spam, agregá un `token`/`secret` (por ejemplo un campo extra) y validalo en Apps Script antes de escribir en la hoja.
