# Estrategia SEO para Oklus

## ✅ Lo que YA hicimos

### Meta Tags Optimizados

**Title:**
```
Oklus - Software para Clínicas Dentales Pequeñas | Agenda + Pacientes + Historial | Ecuador
```

**Description:**
```
Sistema de gestión dental simple para clínicas de 1-2 dentistas en Ecuador. Agenda, pacientes e historial clínico. Funciona sin internet. Sin facturación ni ERP. Beta gratis 2026 - solo 20 lugares.
```

**Keywords principales:**
- software dental Ecuador
- sistema gestión clínica dental
- agenda pacientes dentales
- software odontológico pequeñas clínicas
- historial clínico digital
- software consultorio dental
- programa dentistas Ecuador
- sistema dental sin internet
- software clínica dental Quito
- software clínica dental Guayaquil

**Geo-targeting:**
- País: Ecuador (EC)
- Ciudades: Quito, Guayaquil

---

## 📊 Keywords Research - Lo que REALMENTE buscan

### Keywords de Alta Intención (comercial)

| Keyword | Volumen Estimado (EC) | Competencia | Prioridad |
|---------|----------------------|-------------|-----------|
| software dental Ecuador | 200-500/mes | Alta | 🔴 Difícil |
| sistema gestión dental | 100-300/mes | Alta | 🔴 Difícil |
| agenda dentista online | 50-100/mes | Media | 🟡 Media |
| software consultorio dental | 100-200/mes | Alta | 🔴 Difícil |
| programa odontológico | 50-150/mes | Alta | 🔴 Difícil |

### Long-tail Keywords (AQUÍ está la oportunidad)

| Keyword | Volumen Estimado | Competencia | Prioridad |
|---------|-----------------|-------------|-----------|
| software dental para clínicas pequeñas | 10-50/mes | Baja | 🟢 ALTA |
| sistema dental sin internet | 5-20/mes | Baja | 🟢 ALTA |
| software dental gratis Ecuador | 20-50/mes | Media | 🟡 Media |
| agenda pacientes dentales simple | 10-30/mes | Baja | 🟢 ALTA |
| software dental sin facturación | 5-15/mes | Baja | 🟢 ALTA |
| programa dental 1 dentista | 5-20/mes | Baja | 🟢 ALTA |
| software odontológico offline | 5-15/mes | Baja | 🟢 ALTA |

---

## 🎯 Estrategia SEO (Largo Plazo - Post Beta)

### Fase 1: Fundación (Mes 1-2)

**On-Page SEO:**
- ✅ Title & Description optimizados
- ✅ Meta keywords
- ✅ Geo-targeting Ecuador
- ⏳ Agregar Schema.org (SoftwareApplication)
- ⏳ Crear página de términos y privacidad
- ⏳ Sitemap.xml
- ⏳ Robots.txt

**Contenido Inicial:**
- Blog: "Software dental para clínicas pequeñas: Por qué menos es más"
- Blog: "Cómo elegir software dental si eres dentista independiente"
- FAQ page con keywords long-tail

### Fase 2: Contenido (Mes 3-6)

**Blog Posts SEO-optimizados:**

1. **"7 Razones por las que el software dental tradicional NO funciona para clínicas pequeñas"**
   - Target: "software dental clínicas pequeñas"
   - Long-form (1500+ palabras)

2. **"Software dental que funciona sin internet: Ventajas para tu consultorio en Ecuador"**
   - Target: "software dental sin internet"
   - Include: Casos de uso reales

3. **"Agenda de pacientes dentales: Excel vs Software especializado"**
   - Target: "agenda pacientes dentales"
   - Comparación práctica

4. **"Cuánto cuesta realmente un software dental en Ecuador [2026]"**
   - Target: "precio software dental Ecuador"
   - Transparency = Trust

5. **"Software dental gratis vs de pago: Qué necesitas saber antes de elegir"**
   - Target: "software dental gratis Ecuador"
   - Positioning vs competencia

### Fase 3: Link Building (Mes 4-12)

**Local Ecuador:**
- Directorios locales de empresas Ecuador
- Cámaras de Comercio
- Asociaciones de Odontólogos Ecuador

**Menciones en Prensa:**
- Blogs de tecnología Ecuador
- Medios de salud/odontología
- Podcasts de emprendimiento local

**Guest Posts:**
- Blogs de odontólogos
- Sitios de gestión médica
- Tech blogs Ecuador

---

## 🔍 Google My Business (GMB)

**IMPORTANTE:** Cuando lances oficialmente:

1. Crear perfil Google My Business
2. Categoría: "Empresa de software"
3. Descripción con keywords
4. Fotos del equipo/producto
5. Posts semanales con tips
6. Responder reviews rápido

---

## 📈 Métricas SEO para Trackear

### Herramientas Gratis:
- **Google Search Console** (imprescindible)
- **Google Analytics 4**
- **Ubersuggest** (15 búsquedas gratis/día)

### Métricas Clave:
1. **Posición promedio** en Google (meta: Top 10 para long-tail en 6 meses)
2. **Impresiones** en búsqueda
3. **CTR** (Click Through Rate)
4. **Páginas indexadas**
5. **Backlinks** (meta: 10+ en 6 meses)

---

## 🚀 Quick Wins SEO (Hacer YA)

### 1. Google Search Console
```bash
1. Ir a: https://search.google.com/search-console
2. Agregar propiedad: oklus.com
3. Verificar dominio
4. Enviar sitemap
```

### 2. Google Analytics
```bash
1. Crear cuenta GA4
2. Instalar tracking code en Layout.astro
3. Configurar eventos: form_submit, button_click
```

### 3. Schema.org Markup
Agregar a `<head>`:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Oklus",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/PreOrder"
  },
  "operatingSystem": "Windows, macOS, Linux",
  "countryOfOrigin": "Ecuador",
  "description": "Sistema de gestión dental simple para clínicas de 1-2 dentistas"
}
```

### 4. Crear sitemap.xml
Astro genera automático. Solo configurar en `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oklus.com',
  integrations: [
    // ... otros
  ]
});
```

---

## 🎯 Keywords por Página (Futura Estructura)

### Home (/)
**Primary:** software dental Ecuador, software clínicas dentales pequeñas
**Secondary:** sistema gestión dental, agenda pacientes

### /funcionalidades
**Primary:** funcionalidades software dental
**Secondary:** agenda dental, historial clínico digital

### /precios
**Primary:** precio software dental Ecuador
**Secondary:** costo sistema dental, planes software odontológico

### /blog/[post]
Cada post optimizado para long-tail específica

---

## ⚠️ La Verdad sobre SEO para tu Beta

### Para BETA (próximos 6 meses):
**SEO NO es prioridad.** Por qué:
- Toma 6-12 meses rankear
- Necesitas 20 clínicas en 2-3 meses
- Competencia alta para keywords principales

### Para LANZAMIENTO PÚBLICO (2026):
**SEO SÍ es estratégico.** Por qué:
- Para ese momento ya tendrás 6+ meses de contenido
- Casos de éxito de beta = contenido valioso
- Long-tail keywords pueden traer clientes ideales (1-2 dentistas)

---

## 📋 Checklist SEO Mensual (Post-Lanzamiento)

**Cada mes:**
- [ ] Publicar 2-3 blog posts optimizados
- [ ] Conseguir 1-2 backlinks nuevos
- [ ] Revisar Google Search Console
- [ ] Actualizar contenido viejo (re-optimizar)
- [ ] Responder comentarios en blog
- [ ] Monitorear keywords principales

---

## 🎓 Recursos para Aprender Más

**SEO Básico:**
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Ahrefs Blog](https://ahrefs.com/blog)

**SEO Local Ecuador:**
- Buscar grupos Facebook "SEO Ecuador"
- LinkedIn: Seguir expertos SEO latam

**Tools:**
- Google Search Console (gratis)
- Google Analytics (gratis)
- Ubersuggest (limitado gratis)
- AnswerThePublic (gratis)

---

## 🎯 Objetivo Final SEO (12 meses)

**Keywords long-tail:**
- Top 3 para: "software dental clínicas pequeñas Ecuador"
- Top 5 para: "sistema dental sin internet"
- Top 10 para: "software dental Ecuador"

**Tráfico:**
- 500-1000 visitas/mes orgánicas
- 50-100 sign-ups desde SEO

**Authority:**
- 10+ backlinks de calidad
- Mencionado en 2-3 blogs/medios Ecuador

---

**RECUERDA:** SEO es maratón, no sprint. Para beta usa outreach directo. SEO será tu motor de crecimiento después del lanzamiento.
