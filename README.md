# 🛡️ Loyal Streetwear - Sistema de Inventario y Catálogo

Sistema web Fullstack diseñado para la gestión de inventario y ventas automatizadas vía WhatsApp para la marca **Loyal**. Este proyecto permite a los administradores gestionar stock y ganancias, mientras ofrece a los clientes un catálogo digital premium con modo oscuro.

## 🚀 Características Principales

* **Catálogo Digital:** Interfaz moderna con diseño *Streetwear* y efectos visuales de alta calidad.
* **Gestión de Inventario:** Panel administrativo para agregar, editar y eliminar productos en tiempo real.
* **Cálculo de Ganancias:** Visualización automática de utilidad neta por prenda.
* **Integración con WhatsApp:** Botón de pedido directo que envía los detalles de la prenda al vendedor.
* **Diseño Responsivo:** Optimizado para dispositivos móviles y escritorio.
* **Identidad Visual:** Integración de logo con transparencia dinámica (`mix-blend-mode`).

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React.js, Lucide React (iconos), CSS3 (Custom Properties & Flexbox/Grid).
* **Backend:** Python con FastAPI.
* **Base de Datos:** MySQL (XAMPP / MariaDB).
* **Estilos:** Diseño personalizado con enfoque en *Dark Mode* y `aspect-ratio` para imágenes verticales.

## 📦 Instalación y Configuración

### 1. Requisitos Previos
* Node.js (v16+)
* Python (3.9+)
* XAMPP (para MySQL)

### 2. Configuración del Backend
```bash
# Entrar a la carpeta del servidor
cd backend
# Instalar dependencias
pip install fastapi uvicorn
# Ejecutar el servidor
uvicorn main:app --reload