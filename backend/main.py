from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="NexLogix API", version="1.0.0")

# Configuración de políticas CORS para integración con el cliente (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HistorialEnvios(BaseModel):
    dia: str
    envios: int

class MetricasLogistica(BaseModel):
    total_paquetes: int
    en_ruta: int
    entregados: int
    incidencias: int
    historial_semanal: List[HistorialEnvios]
    distribucion_estados: list

@app.get("/api/dashboard", response_model=MetricasLogistica)
async def obtener_metricas_dashboard():
    # TODO: Reemplazar datos simulados con consultas a PostgreSQL (SQLAlchemy)
    # La estructura actual refleja el esquema anticipado de la base de datos
    return MetricasLogistica(
        total_paquetes=1250,
        en_ruta=430,
        entregados=805,
        incidencias=15,
        historial_semanal=[
            {"dia": "Lun", "envios": 150},
            {"dia": "Mar", "envios": 230},
            {"dia": "Mié", "envios": 180},
            {"dia": "Jue", "envios": 290},
            {"dia": "Vie", "envios": 200},
            {"dia": "Sáb", "envios": 120},
            {"dia": "Dom", "envios": 80},
        ],
        distribucion_estados=[
            {"name": "En Ruta", "value": 430, "fill": "#ef4444"}, 
            {"name": "Restante", "value": 55, "fill": "#0B353E"},
        ]
    )
