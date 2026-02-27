"""GET /health — liveness + model status."""

from fastapi import APIRouter
from app.models.schemas import HealthResponse
from app.services.model_service import model_service

router = APIRouter(tags=["health"])


@router.get("/health", response_model=HealthResponse)
async def health_check() -> HealthResponse:
    return HealthResponse(
        status="ok" if model_service.is_loaded else "degraded",
        model_loaded=model_service.is_loaded,
        model_version=model_service.version,
    )
