
# Manakin Labs - Sitio Web Corporativo

Este repositorio contiene el código fuente del sitio web corporativo de **Manakin Labs**, una empresa de desarrollo de software y automatización con presencia en Guanacaste, Costa Rica. El proyecto está construido como una _landing page_ estática con HTML, CSS y JavaScript, optimizada para presentar servicios, testimonios, tecnologías clave y canales de contacto.

## Tabla de contenidos

1. [Características principales](#características-principales)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Dependencias externas](#dependencias-externas)
4. [Setup y despliegue](#setup-y-despliegue)
5. [Personalización del chatbot de n8n](#personalización-del-chatbot-de-n8n)
6. [Flujo de estilos y assets](#flujo-de-estilos-y-assets)
7. [SEO y analítica](#seo-y-analítica)
8. [Mantenimiento y testing manual](#mantenimiento-y-testing-manual)
9. [To-Do / mejoras futuras](#to-do--mejoras-futuras)

## Características principales

- **Diseño premium y responsivo** basado en _Bootstrap 5.3_ con animaciones vía _AOS_ y efectos visuales personalizados en `styles.css`.
- **Secciones destacadas**: servicios, tecnologías, testimonios de clientes, proceso de trabajo, branding y CTA claros para captación de leads.
- **Formularios de contacto** (HTML) con componentes custom y validaciones básicas manejadas en `script.js`.
- **Botones flotantes**: acceso directo a WhatsApp, botón “scroll to top” y **chatbot embebido de n8n**.
- **Optimización SEO**: metas enriquecidas para redes sociales (Open Graph y Twitter), _structured data_ (JSON-LD) para negocio y servicios.
- **Recursos visuales** almacenados en `assets/` con imágenes optimizadas y _webp_ para hero.

## Estructura del proyecto

```
manakinlabs/
├── assets/               # Imágenes, íconos y recursos gráficos
├── index.html            # Página principal del sitio
├── styles.css            # Estilos personalizados
├── script.js             # Lógica de interacción y animaciones
├── formularios.html      # Página auxiliar para formularios de servicio
├── formularioautomation.html
├── politicas-privacidad.html
└── README.md             # (Este documento)
```

> Nota: puede haber archivos adicionales generados por el flujo de trabajo del usuario (favicons, fuentes locales, etc.).

## Dependencias externas

El sitio depende de varias librerías entregadas vía CDN:

- **Bootstrap 5.3 (CSS/JS)** para el grid y componentes base.
- **Font Awesome 6** para iconografía.
- **AOS (Animate On Scroll)** para animaciones al hacer _scroll_.
- **particles.js** para efectos en el hero.
- **Google Fonts** (`Inter` y `Poppins`).
- **n8n Chat Widget** (`@n8n/chat`) para el chatbot embebido.

Estas alusiones se encuentran referenciadas directamente en `index.html` a través de etiquetas `<link>` y `<script>`.

## Setup y despliegue

Al ser un sitio estático, no requiere compilación ni dependencias locales adicionales.

1. **Clonar o descargar** el repositorio en el servidor deseado.
2. Servir los archivos usando cualquier hosting estático (Netlify, Vercel, GitHub Pages) o subirlos a un hosting tradicional con soporte HTTPS.
3. Asegurarse de que el dominio/public URL esté registrado en:
   - **Allowed Origins** del workflow de n8n (ver siguiente sección).
   - Configuración de cualquier servicio de analítica o integraciones externas.

### Desarrollo local

Basta con abrir `index.html` en un navegador moderno o utilizar un servidor local básico (por ejemplo, `npx serve`). No hay pipeline de build.

## Personalización del chatbot de n8n

El chat se integra mediante CDN en `index.html`:

```html
<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

  createChat({
    webhookUrl: 'https://webhook.n8.manakinlabs.com/webhook/6bcd354d-ac9e-452e-b644-c40f57dd362e/chat',
    mode: 'window',
    loadPreviousSession: true,
    showWelcomeScreen: false,
    initialMessages: [
      '¡Hola! 👋',
      'Soy el asistente virtual de Manakin Labs, ¿en qué puedo ayudarte hoy?'
    ],
    metadata: {
      source: 'website-index'
    }
  });
</script>
```

### Recomendaciones de configuración

- En n8n, el workflow debe estar **activo** y utilizar un **Chat Trigger**.
- Añade el dominio del sitio a **Allowed Origins (CORS)** dentro del nodo `Chat Trigger`.
- Si se requiere streaming, activar `enableStreaming` tanto en n8n como en el `createChat`.
- El **estilo visual** del chat se personaliza en `styles.css` usando variables CSS (`--chat--*`) y reglas específicas bajo la sección “n8n CHAT CUSTOMIZAtion”. Se ajustó el botón flotante para usar un ícono de bot mediante `Font Awesome`.

## Flujo de estilos y assets

- `styles.css` centraliza variables, colores, tipografías, efectos, animaciones y responsividad.
- Secciones específicas están documentadas con comentarios (`/* ============================================ */`) para facilitar el mantenimiento.
- El branding principal usa una paleta verde/azul oscuro y efectos _glassmorphism_.

## SEO y analítica

- Metadatos extensivos en `<head>`: título, descripción, keywords y robots.
- JSON-LD para `LocalBusiness`, `ProfessionalService` y `Organization`.
- Integración lista para herramientas como Google Analytics o Meta Pixel (actualmente no incluidas; añadir en `index.html` si se requiere).

## Mantenimiento y testing manual

1. **Pruebas básicas**:
   - Revisar que los enlaces funcionen (`href` de navbar, CTA, redes sociales).
   - Asegurar que el chatbot carga y responde (abrir en el dominio aprobado).
   - Validar formulario de contacto (campos requeridos, feedback visual).
   - Testear animaciones y partículas en distintos navegadores.
2. **Responsividad**:
   - Evaluar en breakpoints principales (320px, 768px, 1024px, 1440px).
   - Confirmar que los botones flotantes (WhatsApp y chat) no se superponen.
3. **Performance**:
   - Optimizar imágenes (`assets`) cuando se agreguen nuevas.
   - Minimizar llamadas externas si el tiempo de carga aumenta.

## To-Do / mejoras futuras

- Integrar un backend para manejar envíos reales del formulario de contacto.
- Añadir analítica (Google Analytics 4 o Matomo) y scripts de conversiones.
- Incorporar un sistema de despliegue continuo (CI/CD) para hosting estático.
- Internacionalizar el contenido (i18n) para versiones en inglés.
- Agregar secciones dinámicas (blog, casos de estudio) si se requiere contenido frecuente.

---

**Contacto interno:** Para dudas sobre el sitio o actualizaciones, comunicarte con el equipo de desarrollo de Manakin Labs o el responsable del workflow de n8n.


