"""POST /predict — model inference endpoint."""

from fastapi import APIRouter, HTTPException
from app.models.schemas import PredictRequest, PredictResponse
from app.services.model_service import model_service

router = APIRouter(tags=["inference"])


@router.post("/predict", response_model=PredictResponse)
async def predict(request: PredictRequest) -> PredictResponse:
    if not model_service.is_loaded:
        raise HTTPException(status_code=503, detail="Model not loaded")

    try:
        prediction, confidence = model_service.predict(request.features)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Inference failed: {e}")

    return PredictResponse(
        prediction=prediction,
        confidence=confidence,
        model_version=model_service.version,
    )
