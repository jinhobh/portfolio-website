"""
Model service — singleton that manages model lifecycle.

The model is loaded once at startup via the lifespan handler in main.py.
All inference calls go through this service.
"""

import numpy as np
import logging

logger = logging.getLogger(__name__)

MODEL_VERSION = "0.1.0-dummy"


class _DummyModel:
    """
    Placeholder model that mimics a real ML model interface.

    Replace this with your actual model (e.g. a PyTorch nn.Module,
    a scikit-learn pipeline, an ONNX runtime session, etc.).
    """

    def predict(self, features: list[float]) -> tuple[float, float]:
        """
        Run inference on input features.

        Returns:
            (prediction, confidence) tuple.
        """
        x = np.array(features)
        # Dummy logic: weighted sum + sigmoid for confidence
        prediction = float(np.dot(x, np.arange(1, len(x) + 1)))
        confidence = float(1.0 / (1.0 + np.exp(-np.mean(x))))
        return prediction, round(confidence, 4)


class ModelService:
    """Manages the ML model lifecycle."""

    def __init__(self) -> None:
        self._model: _DummyModel | None = None

    @property
    def is_loaded(self) -> bool:
        return self._model is not None

    @property
    def version(self) -> str:
        return MODEL_VERSION

    def load(self) -> None:
        """Load model into memory. Called once at startup."""
        logger.info("Loading ML model (version %s)...", MODEL_VERSION)
        # ----- Replace with real model loading -----
        # e.g. torch.load("weights.pt"), joblib.load("pipeline.pkl")
        self._model = _DummyModel()
        logger.info("Model loaded successfully.")

    def unload(self) -> None:
        """Release model resources."""
        self._model = None
        logger.info("Model unloaded.")

    def predict(self, features: list[float]) -> tuple[float, float]:
        """Run inference. Raises if model not loaded."""
        if self._model is None:
            raise RuntimeError("Model is not loaded")
        return self._model.predict(features)


# Singleton instance used throughout the app
model_service = ModelService()
