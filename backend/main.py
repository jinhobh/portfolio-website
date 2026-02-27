"""
FastAPI ML Inference Server
"""

from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import health, predict
from app.services.model_service import model_service


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load ML model on startup, clean up on shutdown."""
    model_service.load()
    yield
    model_service.unload()


app = FastAPI(
    title="ML Inference API",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(predict.router)
