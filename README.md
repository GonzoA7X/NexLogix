# 📦 NexLogix - Advanced Logistics Intelligence Platform
> **NexLogix** es una plataforma logística empresarial de arquitectura *Full-Stack* (Monorepo), diseñada para ofrecer trazabilidad, monitoreo en tiempo real y gestión inteligente de envíos de alta densidad.

---

## 📑 Tabla de Contenidos
1. [Descripción General](#-descripción-general)
2. [Stack Tecnológico](#-stack-tecnológico)
3. [Características Principales](#-características-principales)
4. [Instalación y Configuración](#-instalación-y-configuración)
5. [Documentación de la API](#-documentación-de-la-api)
6. [Hoja de Ruta (Roadmap)](#-hoja-de-ruta-roadmap)

---

## 🌐 Descripción General

Desarrollada para suplir la necesidad de un control logístico moderno, NexLogix abandona las interfaces legadas en favor de un diseño inmersivo (*Dark Theme UI*). El sistema está compuesto por un backend robusto en Python capaz de escalar y un frontend React ultrarrápido alimentado por Vite.

## 💻 Stack Tecnológico

### Frontend
- **React 18** (Inicializado vía Vite para HMR inmediato)
- **Zustand** (Gestión de estado global ligero y libre de boilerplate)
- **Recharts** (Gráficos vectoriales SVG dinámicos para KPIs)
- **CSS-in-JS** (Sistema de diseño modular sin dependencias externas pesadas)

### Backend
- **Python 3.10+**
- **FastAPI** (Framework asíncrono de alto rendimiento para APIs REST)
- **Pydantic** (Validación de modelos de datos estricta)
- **Uvicorn** (Servidor ASGI en producción)

---

## ✨ Características Principales

- **Dashboard Analítico:** Visualización del volumen de paquetes y estado de rutas con gráficos de anillo multidimensionales.
- **Trazabilidad en Tiempo Real:** Tabla de datos con filtros rápidos para búsqueda por código (Tracking ID), nombre o modalidad.
- **Simulación Backend Asíncrona:** Integración de endpoints con latencia controlada simulando bases de datos de gran volumen.
- **Responsive Dark Theme:** Interfaz corporativa adaptada a entornos de baja luminosidad (Centros de distribución).

---

## 🚀 Instalación y Configuración

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.

### 1. Clonar el repositorio
\\\ash
git clone https://github.com/TuUsuario/NexLogix.git
cd NexLogix
\\\

### 2. Levantar el Backend (FastAPI)
\\\ash
cd backend
python -m venv venv
source venv/Scripts/activate  # En Windows
pip install fastapi "uvicorn[standard]"
uvicorn main:app --reload
\\\
*La API estará disponible en http://localhost:8000*

### 3. Levantar el Frontend (React)
Abre otra terminal en la raíz del proyecto:
\\\ash
cd frontend
npm install
npm run dev
\\\
*La interfaz estará disponible en http://localhost:5173*

---

## 📡 Documentación de la API

| Método | Endpoint | Descripción | Payload |
|--------|----------|-------------|---------|
| \GET\ | \/api/dashboard\ | Retorna métricas clave y distribuciones | \LogisticsMetrics\ |

*(Swagger UI disponible automáticamente en http://localhost:8000/docs)*

---

## 🗺️ Hoja de Ruta (Roadmap)
- [x] Arquitectura base (Frontend/Backend)
- [x] Diseño UI/UX Dark Mode
- [ ] Integración con PostgreSQL / SQLAlchemy
- [ ] Módulo de Autenticación (JWT)
- [ ] Módulo "Cotizador de Envíos"

---
*Diseñado y desarrollado por **Gonzalo Soto Jiménez - Software Engineer***
