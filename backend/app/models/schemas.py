"""Pydantic schemas for request/response validation."""

from pydantic import BaseModel, Field


class PredictRequest(BaseModel):
    """Input features for model prediction."""

    features: list[float] = Field(
        ...,
        min_length=1,
        description="List of numeric input features",
        examples=[[1.0, 2.0, 3.0, 4.0]],
    )


class PredictResponse(BaseModel):
    """Model prediction output."""

    prediction: float = Field(..., description="Model prediction value")
    confidence: float = Field(
        ..., ge=0.0, le=1.0, description="Prediction confidence score"
    )
    model_version: str = Field(..., description="Version of the loaded model")


class HealthResponse(BaseModel):
    """Health check response."""

    status: str
    model_loaded: bool
    model_version: str
