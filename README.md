# Zajuna LMS — Componente Frontend (React JS)

Proyecto frontend del Sistema de Gestión de Aprendizaje (LMS) **Zajuna**, desarrollado con **React JS**.

- **Programa:** Análisis y Desarrollo de Software (228118)
- **Competencia:** 220501096 — Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo.
- **Actividad:** GA7-220501096-AA4 — Codificar el frontend utilizando framework.
- **Evidencia:** GA7-220501096-AA4-EV03 — Componente frontend del proyecto formativo.
- **Aprendiz:** Valentina Noreña Gomez

---

## Tecnologías

- React 18
- Vite
- React Router DOM 6 (navegación entre módulos)
- PropTypes (tipado y documentación de props)
- CSS Modules (estilos centralizados, sin estilos en línea)

---

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Generar versión de producción (opcional)
npm run build
```

La aplicación queda disponible en `http://localhost:5173`.

### Credenciales de prueba

| Campo      | Valor                     |
| ---------- | ------------------------- |
| Correo     | `valnorena@misena.edu.co` |
| Contraseña | `123456`                  |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/      → Navbar, Sidebar, Footer
│   ├── auth/        → LoginForm, InputGroup
│   ├── data/        → UserProfileCard, EvidenceTable, CourseCard
│   └── feedback/    → AlertMessage, SpinnerLoading
├── context/         → AuthContext (manejo de sesión)
├── data/            → mockData (datos simulados de la API)
├── pages/           → LoginPage, DashboardLayout y vistas de cada módulo
├── App.jsx          → Definición de rutas
└── main.jsx         → Punto de entrada
```

---

## Componentes implementados

Los componentes corresponden a los definidos en la evidencia AA4-EV02:

| Categoría        | Componente        | Función                                            |
| ---------------- | ----------------- | -------------------------------------------------- |
| Layout           | `Navbar`          | Barra superior con logo y menú de perfil.          |
| Layout           | `Sidebar`         | Menú lateral de navegación entre módulos.          |
| Layout           | `Footer`          | Pie de página con derechos y enlaces.              |
| Formulario/Auth  | `LoginForm`       | Formulario de inicio de sesión.                    |
| Formulario/Auth  | `InputGroup`      | Campo de texto genérico y reutilizable.            |
| Visualización    | `UserProfileCard` | Tarjeta con los datos del aprendiz.                |
| Visualización    | `EvidenceTable`   | Tabla de evidencias entregadas y pendientes.       |
| Visualización    | `CourseCard`      | Tarjeta de cada curso inscrito.                    |
| Feedback         | `AlertMessage`    | Alertas de éxito, error, advertencia e información.|
| Feedback         | `SpinnerLoading`  | Indicador de carga.                                |

---

## Cumplimiento de la lista de chequeo (AA4-EV02)

1. **Responsabilidad única:** cada componente cumple una sola función.
2. **PascalCase:** archivos y funciones de componentes (`UserProfileCard.jsx`).
3. **Modularidad:** componentes reutilizables (ej. `InputGroup`, `CourseCard`).
4. **Diseño responsivo:** media queries en todos los CSS Modules.
5. **Props documentadas/tipadas:** comentarios JSDoc + `PropTypes`.
6. **Manejo de errores:** estados de error y datos vacíos controlados.
7. **Sin estilos en línea:** estilos centralizados con CSS Modules.

