from typing import Generic, Type

from g_mate.schemas.base import ModelType


class CRUDBase(Generic[ModelType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model
