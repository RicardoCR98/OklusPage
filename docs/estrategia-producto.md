# Estrategia de Producto, Branding y Crecimiento — Oklus

> Contexto generado: 2026-03-04
> Fase actual: Pre-PMF / Beta

---

## Contexto del proyecto

- **SaaS:** Oklus — software de gestión para clínicas dentales en Ecuador (expansión LATAM futura)
- **Diferencial:** Offline-first + simplicidad radical + precio accesible (los tres combinados)
- **Target:** Clínicas de 1-2 dentistas en Ecuador
- **Fundador:** Perfil técnico/desarrollador, sin red previa en sector dental
- **Modelo de negocio:** Sin definir (en validación)
- **Validación actual:** 1-5 conversaciones informales, 1 registro en landing
- **Estado:** Pre-PMF, ningún piloto activo aún

---

## Decisión estratégica de arquitectura

### Conclusión: web de producto (Oklus) como núcleo, blog dentro de Oklus, LinkedIn como canal personal

**Descartar:**
- Web de marca personal separada → no aporta clientes dentales en esta fase
- Blog general de fundador → dilución total de autoridad y keywords

**Razón principal:** Los dentistas compran por recomendación de colegas y por confianza en el producto, no por afinidad con el fundador. Una web de marca personal antes de tener traction no tiene en qué apoyarse.

**Cuándo tiene sentido marca personal separada:** cuando se cumplan las tres condiciones simultáneamente:
1. Oklus tiene usuarios pagando (aunque sean 10 clínicas)
2. Quieres atraer inversión, co-fundadores o prensa
3. Tienes algo genuinamente interesante que contar sobre el proceso

---

## Estructura de web objetivo

```
oklus.com/              → Landing (conversión: registro beta)
oklus.com/blog/         → Blog de gestión dental (autoridad + SEO)
oklus.com/blog/[slug]   → Artículos individuales
oklus.com/precios/      → Cuando esté definido el modelo (Mes 3-4)
oklus.com/demo/         → Cuando haya clínicas piloto (Mes 2-3)
```

**No construir ahora:**
- Página de funcionalidades extensa (cambiará con feedback)
- Casos de éxito (no los hay aún)
- Comparativas con competidores (prematuro)
- Múltiples planes de precios (sin datos de disposición a pagar)

---

## Regla de contenido para el blog

> El blog no habla del software. Habla de los problemas del cliente.

| Correcto | Incorrecto |
|---|---|
| "Cómo reducir citas perdidas en tu clínica dental" | "Por qué Oklus tiene modo offline" |
| "Excel vs software para gestión de pacientes" | "Funcionalidades de Oklus" |
| "Cómo trabajan clínicas en zonas sin internet en Ecuador" | "Actualización v2.1 de Oklus" |

**Primeros 4 artículos propuestos (basados en pain points del ICP):**
1. "Cómo reducir las citas perdidas en tu clínica dental"
2. "¿Excel o software dental? Lo que nadie te dice sobre gestionar pacientes"
3. "Cómo funciona una clínica dental sin internet en Ecuador"
4. "Historial clínico digital: qué necesitas realmente (y qué no)"

---

## Plan de acción 6 meses

### Mes 1 — Validación agresiva (no construcción)
**Objetivo: 20 conversaciones con dentistas reales**

- Conversaciones sobre su día a día, no demos del producto
- Preguntas clave:
  - ¿Qué pierdes cuando se va la luz o el internet?
  - ¿Cuánto pagas ahora por gestión?
  - ¿Qué te haría cambiar de sistema?
- Canales: WhatsApp directo, colegios de odontología, grupos Facebook dentistas Ecuador, Instagram clínicas locales
- Meta: identificar 3 clínicas dispuestas a ser piloto
- En paralelo: comprar dominio oklus.com u oklus.ec

### Mes 2 — Infraestructura y primeros pilotos
**Objetivo: dominio propio activo, 2-3 clínicas piloto**

- Migrar de oklus.pages.dev a dominio propio
- Reescribir copy de landing con el lenguaje literal de las conversaciones del mes 1
- Implementar ruta /blog en Astro (puede estar vacía)
- Onboard de primeros pilotos: instalar, soporte directo, feedback semanal

### Mes 3 — Primera capa de contenido + modelo de negocio
**Objetivo: 4 artículos publicados, pricing definido**

- Publicar los 4 artículos propuestos arriba
- Con 2-3 meses de uso piloto, preguntar directamente: "¿Pagarías $X/mes?"
- Crear primera versión de página /precios

### Mes 4 — Distribución y backlinks
**Objetivo: primeros registros orgánicos, Oklus en directorios**

- Publicar en: Capterra, SaaSworthy, GetApp LATAM
- Product Hunt launch (si hay demo funcional + capturas reales)
- Contactar colegios de odontología Ecuador (backlink institucional + acceso a usuarios)
- LinkedIn: publicar proceso — "Mes 3 construyendo software para dentistas, esto aprendí"

### Mes 5 — Conversión de pilotos
**Objetivo: primeros usuarios pagos**

- Presentar plan de precios a pilotos con descuento early adopter
- Documentar 1-2 casos reales con métricas (tiempo ahorrado, citas recuperadas)
- 4 artículos adicionales de blog
- Optimizar artículos del mes 3 con datos de GSC

### Mes 6 — Escalar el canal que funciona
**Objetivo: duplicar lo que funciona, descartar lo que no**

Responder: ¿de dónde vienen los registros?
- Blog funcionando → escalar a 6-8 artículos/mes, guest posts
- Referidos funcionando → programa formal de referidos
- Nada funcionando → revisar estrategia de distribución (no de producto)

---

## Errores estratégicos a evitar

1. **Invertir en SEO antes de 10 conversaciones reales** — el SEO tarda 3-6 meses; si el ICP cambia, el contenido completo está mal orientado
2. **Añadir features antes de validar los actuales** — agenda + pacientes + historial es suficiente para validar
3. **Quedarse en oklus.pages.dev** — cada mes sin dominio propio es domain authority perdido
4. **Blog sobre el software en lugar de los problemas del cliente** — ver tabla arriba
5. **No definir precio hasta tener 50 usuarios** — el precio es señal de validación, no solo revenue
6. **Crear marca personal ahora** — sin audiencia previa y sin traction, es un proyecto paralelo sin ROI
7. **Hablar solo con dentistas que te conocen** — sesgo de confirmación; buscar dentistas fríos para feedback real

---

## Prioridad de canales (en orden)

```
Conversaciones directas > Código/producto > Contenido blog > SEO orgánico
```

---

## Métricas de éxito por fase

| Mes | Métrica principal |
|-----|-------------------|
| 1-2 | 20 conversaciones documentadas, 2-3 pilotos activos |
| 3-4 | Pricing definido, 4+ artículos publicados, dominio propio |
| 5-6 | Primeros usuarios pagos, canal de adquisición identificado |
