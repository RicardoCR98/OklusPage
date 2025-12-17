# Configurar Google Sheets para el formulario de Waitlist

## ¿Qué necesitas?
- Una cuenta de Google (Gmail)
- 5 minutos de tu tiempo

## ✅ Es 100% GRATIS - Sin costos ocultos

---

## Paso 1: Crear tu Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja
3. Nómbrala: **"Oklus Waitlist"**
4. En la primera fila, agrega estos encabezados:
   - Columna A: `Timestamp`
   - Columna B: `Email`
   - Columna C: `Dentistas`
   - Columna D: `Nombre Clínica`

---

## Paso 2: Crear el Google Apps Script (Mini Backend)

1. En tu Google Sheet, ve a **Extensions** → **Apps Script**
2. Borra todo el código que aparece por defecto
3. **Pega este código:**

```javascript

// 📋 CÓDIGO PARA GOOGLE APPS SCRIPT
// Copia y pega TODO este código en tu Google Apps Script

function doPost(e) {
  try {
    // Obtener la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Los datos vienen en e.parameter (NO en e.postData)
    // porque ahora usamos URLSearchParams en lugar de JSON
    var timestamp = e.parameter.timestamp;
    var email = e.parameter.email;
    var clinicSize = e.parameter.clinicSize;
    var clinicName = e.parameter.clinicName || "No proporcionado";

    // Agregar fila con los datos
    sheet.appendRow([
      timestamp,
      email,
      clinicSize,
      clinicName
    ]);

    // Retornar éxito
    return ContentService
      .createTextOutput("success")
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    // Log del error para debugging
    Logger.log("Error: " + error.toString());

    // Retornar error
    return ContentService
      .createTextOutput("error: " + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Esta función NO es necesaria con URLSearchParams
// pero la dejamos por si acaso
function doGet(e) {
  return ContentService
    .createTextOutput("Webhook is running")
    .setMimeType(ContentService.MimeType.TEXT);
}

```

4. Click en **💾 Guardar** (icono de disquete)
5. Pon un nombre al proyecto: **"Oklus Waitlist Handler"**

---

## Paso 3: Publicar como Web App (Crear el webhook)

1. Click en **Deploy** → **New deployment**
2. Click en el icono de engranaje ⚙️ junto a "Select type"
3. Selecciona **"Web app"**
4. Configura así:
   - **Description**: "Waitlist webhook"
   - **Execute as**: **Me** (tu cuenta)
   - **Who has access**: **Anyone** (¡importante!)
5. Click **Deploy**
6. Te pedirá autorización:
   - Click **Authorize access**
   - Selecciona tu cuenta de Google
   - Click **Advanced** (Avanzado)
   - Click **Go to Oklus Waitlist Handler (unsafe)** - No te preocupes, es tu propio código
   - Click **Allow** (Permitir)
7. **COPIA LA URL** que te muestra (algo como: `https://script.google.com/macros/s/AKfycby.../exec`)

---

## Paso 4: Conectar el formulario con Google Sheets

1. Abre el archivo: `src/components/WaitlistForm.astro`
2. Busca la línea 194:
   ```javascript
   const WEBHOOK_URL = "TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI";
   ```
3. Reemplaza `TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI` con la URL que copiaste:
   ```javascript
   const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycby.../exec";
   ```
4. Guarda el archivo

---

## ✅ ¡Listo! Prueba el formulario

1. Inicia tu servidor de desarrollo: `npm run dev`
2. Llena el formulario en tu página
3. Click en "Avisame cuando esté disponible"
4. Ve a tu Google Sheet → Los datos deberían aparecer automáticamente

---

## 📊 Acceder a tus datos

Simplemente abre tu Google Sheet en cualquier momento. Ahí verás todos los registros en tiempo real.

Puedes:
- Filtrar por fecha
- Exportar a Excel
- Compartir con tu equipo
- Hacer gráficas
- Todo lo que Google Sheets puede hacer

---

## 💰 Costos

**$0** - Completamente gratis.

Google Apps Script es gratuito con límites muy generosos:
- Hasta 20,000 invocaciones por día
- Para una waitlist, esto es MÁS que suficiente

---

## 🐛 Solución de problemas

### El formulario no envía datos
- Verifica que la URL del webhook esté correcta
- Asegúrate de que publicaste el script como "Anyone" tiene acceso

### Recibo error de CORS
- Esto es normal en desarrollo local a veces
- En producción (Netlify) funcionará perfectamente

### No aparecen los datos en el Sheet
- Verifica que autorizaste el script correctamente
- Revisa la consola del navegador (F12) para ver errores

---

## 📝 Notas importantes

- La URL del webhook es **pública pero segura** - solo puede agregar datos, no leerlos
- Nadie puede acceder a tu Google Sheet sin tu permiso
- Puedes cambiar los permisos en cualquier momento desde Google Sheets
